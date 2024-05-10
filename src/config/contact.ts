import { IcMail, IcTelegram, IcTwitter } from "@/assets/icons";

type Contact = {
  description: string;
  icon: typeof import("*.svg");
};

type Social = {
  href: string;
} & Omit<Contact, "description">;

export const contacts: Contact[] = [
  {
    description:
      "For Enquiries; reach out to info@coinvalueguild.com Response within 24 hours max",
    icon: IcMail,
  },
  {
    description:
      "If there's a need for swift response, contact our customer support line directly",
    icon: IcTelegram,
  },
];

export const socials: Social[] = [
  {
    icon: IcTwitter,
    href: "/",
  },
  {
    icon: IcTelegram,
    href: "/",
  },
];
