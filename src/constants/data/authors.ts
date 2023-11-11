import andrewJohnsonImage from "public/assets/authors/andrew-johnson.jpeg";
import dianneRussellImage from "public/assets/authors/dianne-russel.png";
import floydMilesImage from "public/assets/authors/floyd-miles.png";
import jennyWilsonImage from "public/assets/authors/jenny-wilson.png";
import leslieAlexanderImage from "public/assets/authors/leslie-alexander.png";

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
