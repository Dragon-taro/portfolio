import * as React from "react";
import * as styles from "./style.css";

interface ILinkIcon {
  link: string;
  icon: string;
}

const LinkIcon: React.SFC<ILinkIcon> = ({ link, icon }) => (
  <a href={link} target="_blank">
    <i className={`fab fa-lg ${icon}`} />
  </a>
);

const links: ILinkIcon[] = [
  {
    icon: "fa-facebook-square",
    link: "https://www.facebook.com/DragonTaro1031"
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/DragonTaro1031"
  },
  {
    icon: "fa-github",
    link: "https://github.com/Dragon-taro"
  }
];

const SNSLinks: React.SFC = () => (
  <div className={styles.snsLinks}>
    {links.map((link, index) => (
      <LinkIcon key={index} {...link} />
    ))}
  </div>
);

export default SNSLinks;
