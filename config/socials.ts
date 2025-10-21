import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@FouadKom/",
    icon: Icons.gitHub,
    link: "https://github.com/FouadKom/",
  },
  {
    name: "LinkedIn",
    username: "Fouad Komeiha",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/fouad-komeiha",
  },
  {
    name: "Gmail",
    username: "fouadkomeiha",
    icon: Icons.gmail,
    link: "mailto:fouadkomeiha@gmail.com",
  },
];
