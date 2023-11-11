import businessIcon from "public/assets/categories/business.png";
import economyIcon from "public/assets/categories/economy.png";
import startupIcon from "public/assets/categories/startup.png";
import techIcon from "public/assets/categories/tech.png";

export const categories = [
  {
    id: "business",
    icon: businessIcon,
  },
  {
    id: "startup",
    icon: startupIcon,
  },
  {
    id: "economy",
    icon: economyIcon,
  },
  {
    id: "technology",
    icon: techIcon,
  },
];

export type Category = (typeof categories)[number];
