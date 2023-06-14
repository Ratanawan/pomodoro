import { ReactNode } from "react";

export enum SocialMedia {
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
  LINKEDIN = "LINKEDIN",
}

export type SocialMediaItem = {
  icon: ReactNode;
  url: string;
};
