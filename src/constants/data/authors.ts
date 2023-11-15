import andrewJohnsonImage from "public/assets/authors/andrew-johnson.jpeg";
import dianneRussellImage from "public/assets/authors/dianne-russel.png";
import eleanorPenaImage from "public/assets/authors/eleanor-pena.png";
import floydMilesImage from "public/assets/authors/floyd-miles.png";
import guyHawkinsImage from "public/assets/authors/guy-hawkins.png";
import jacobJonesImage from "public/assets/authors/jacob-jones.png";
import jennyWilsonImage from "public/assets/authors/jenny-wilson.png";
import leslieAlexanderImage from "public/assets/authors/leslie-alexander.png";
import robertFoxImage from "public/assets/authors/robert-fox.png";

export const authors = [
  {
    id: "floyd-miles",
    name: "Floyd Miles",
    image: floydMilesImage,
    positionId: "contentWriter",
    companyHandle: "@Company",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: "dianne-russell",
    name: "Dianne Russell",
    image: dianneRussellImage,
    positionId: "contentWriter",
    companyHandle: "@Company",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: "jenny-wilson",
    name: "Jenny Wilson",
    image: jennyWilsonImage,
    positionId: "contentWriter",
    companyHandle: "@Company",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: "leslie-alexander",
    name: "Leslie Alexander",
    image: leslieAlexanderImage,
    positionId: "contentWriter",
    companyHandle: "@Company",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: "guy-hawkins",
    name: "Guy Hawkins",
    image: guyHawkinsImage,
    positionId: "contentWriter",
    companyHandle: "@Company",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: "eleanor-pena",
    name: "Eleanor Pena",
    image: eleanorPenaImage,
    positionId: "contentWriter",
    companyHandle: "@Company",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: "robert-fox",
    name: "Robert Fox",
    image: robertFoxImage,
    positionId: "contentWriter",
    companyHandle: "@Company",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: "jacob-jones",
    name: "Jacob Jones",
    image: jacobJonesImage,
    positionId: "contentWriter",
    companyHandle: "@Company",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: "andrew-johnson",
    name: "Andrew Johnson",
    image: andrewJohnsonImage,
    positionId: "contentWriter",
    companyHandle: "@Company",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];

export type Author = (typeof authors)[number];
