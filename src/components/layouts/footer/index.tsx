import { FacebookFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons";
import { Layout } from "antd";
import { SocialMedia, SocialMediaItem } from "./types";
import { ColorCode } from "../../../constants/Color";
import React from "react";

const SocialMediaUrls = {
  [SocialMedia.FACEBOOK]: "https://www.facebook.com/oggy.wann",
  [SocialMedia.INSTAGRAM]: "https://www.instagram.com/salaza212",
  [SocialMedia.LINKEDIN]: "https://kh.linkedin.com/in/ratanawan-thepanom-486b4a186",
}

const data: Array<SocialMediaItem> = [
  {
    icon: <FacebookFilled />,
    url: SocialMediaUrls.FACEBOOK
  },
  {
    icon: <InstagramFilled />,
    url: SocialMediaUrls.INSTAGRAM
  },
  {
    icon: <LinkedinFilled />,
    url: SocialMediaUrls.LINKEDIN
  },
]

// Component
const LinkedIcon = ({ icon, url }: SocialMediaItem) => {
  return (
    <a
      href={url}
      target="_blank"
      style={{ margin: "8px", fontSize: 32, color: ColorCode.RedOrange }}
      className="d-flex align-items-center justify-content-center"
    >
      {icon}
    </a>
  );
}

const Footer = () => {
  return (
    <Layout.Footer
      className="d-flex align-items-center justify-content-center"
    >
      {data.map((object: SocialMediaItem, index) => {
        const { icon, url } = object;
        return (
          <React.Fragment key={index}>
            <LinkedIcon icon={icon} url={url} />
          </React.Fragment>
        );
      })}
    </Layout.Footer>
  );
}

export default Footer;