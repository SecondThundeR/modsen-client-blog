"use client";

import { Form, Formik } from "formik";
import { type ComponentProps, memo, useCallback, useMemo } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { Input, Select, TextArea } from "@/components/form";
import { Button } from "@/components/ui";
import { contactUsFormDefaultValues } from "@/constants/form";
import { useSendContactUsMail } from "@/hooks/useSendContactUsMail";
import {
  contactUsSchema,
  type ContactUsSchemaType,
} from "@/schemas/contactUsSchema";

import { ContactFormAlert } from "../";
import styles from "./ContactForm.module.scss";
import { type ContactFormProps } from "./interfaces";

const FormikContactUs = Formik<ContactUsSchemaType>;
type FormikSubmitType = ComponentProps<typeof FormikContactUs>["onSubmit"];

function ContactForm({ formLocale, alertLocale }: ContactFormProps) {
  const { sentStatus, onSend } = useSendContactUsMail();
  const queryRelatedOptions = useMemo(() => {
    const { heading, first, second, third } = formLocale.query;
    return [
      {
        id: "id-default",
        value: "query-default",
        name: heading,
        isDisabled: true,
      },
      {
        id: "id-1",
        value: "query-1",
        name: first,
      },
      {
        id: "id-2",
        value: "query-2",
        name: second,
      },
      {
        id: "id-3",
        value: "query-3",
        name: third,
      },
    ];
  }, [formLocale.query]);
  const { error, success } = alertLocale;

  const onSubmit: FormikSubmitType = useCallback(
    async (values, { resetForm, validateForm }) => {
      if (!(await validateForm(values))) return;
      const queryFriendlyName =
        queryRelatedOptions.find((query) => query.value === values.query)
          ?.name ?? values.query;
      onSend({ ...values, query: queryFriendlyName }, resetForm);
    },
    [onSend, queryRelatedOptions],
  );

  return (
    <FormikContactUs
      initialValues={contactUsFormDefaultValues}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={onSubmit}
      validationSchema={toFormikValidationSchema(contactUsSchema)}
    >
      {({ errors, values, setFieldValue }) => (
        <Form className={styles.wrapper}>
          <Input
            id="name"
            name="name"
            placeholder={formLocale.name}
            value={values.name}
            onChange={(event) => setFieldValue("name", event.target.value)}
            errorMessage={errors.name}
            fullPadding
          />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder={formLocale.email}
            value={values.email}
            onChange={(event) => setFieldValue("email", event.target.value)}
            errorMessage={errors.email}
            fullPadding
          />
          <Select
            id="query"
            name="query"
            options={queryRelatedOptions}
            value={values.query}
            onChange={(event) => setFieldValue("query", event.target.value)}
            errorMessage={errors.query}
            fullPadding
          />
          <TextArea
            id="message"
            name="message"
            placeholder={formLocale.message}
            rows={3}
            value={values.message}
            onChange={(event) => setFieldValue("message", event.target.value)}
            errorMessage={errors.message}
            fullPadding
          />
          <ContactFormAlert
            errorLocale={error}
            successLocale={success}
            sentStatus={sentStatus}
          />
          <Button
            size="large"
            type="submit"
            disabled={sentStatus === "pending"}
          >
            {formLocale.send}
          </Button>
        </Form>
      )}
    </FormikContactUs>
  );
}

export default memo(ContactForm);
