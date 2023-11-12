import filipLapinImage from "public/assets/testimonials/filip-lapin.jpeg";
import randolphVolkmanImage from "public/assets/testimonials/randolph-volkman.jpeg";
import taraBoganImage from "public/assets/testimonials/tara-bogan.jpeg";

export const testimonials = [
  {
    id: "randolph-volkman",
    name: "Randolph Volkman",
    image: randolphVolkmanImage,
    data: "Alias rerum dolores et tempora tenetur sit eum eos.",
    location: "Beavercreek, USA",
  },
  {
    id: "tara-bogan",
    name: "Tara Bogan",
    image: taraBoganImage,
    data: "Ab ipsa eum porro voluptatum perferendis.",
    location: "London, UK",
  },
  {
    id: "filip-lapin",
    name: "Filip Łapin",
    image: filipLapinImage,
    data: "Voluptas animi doloremque quia totam minima tenetur accusantium possimus delectus.",
    location: "Warsaw, PL",
  },
];

export type Testimonial = (typeof testimonials)[number];
