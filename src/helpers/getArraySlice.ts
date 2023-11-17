export function getArraySlice(
  page: number,
  elementsPerPage: number,
  maxSize: number,
) {
  if (page < 1) page = 1;
  const startSlice = elementsPerPage * (page - 1);
  const endSlice = elementsPerPage * page;

  return {
    start: startSlice,
    end: endSlice >= maxSize ? maxSize : endSlice,
  };
}
