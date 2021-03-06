import React, { useState } from "react";
import style from "./style.module.css";

interface SocialLink {
  icon: string;
  color: string;
  link: string;
}

const socialLinks: SocialLink[] = [
  { icon: "github", color: "#333", link: "https://github.com/theboi" },
  {
    icon: "linkedin",
    color: "#0077b5",
    link: "https://www.linkedin.com/in/ryan-the/",
  },
  {
    icon: "instagram",
    color:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    link: "https://www.instagram.com/theboi_io/",
  },
  {
    icon: "twitter",
    color: "#1da1f2",
    link: "https://twitter.com/theboi_io",
  },
  {
    icon: "medium-m",
    color: "#00ab6c",
    link: "https://medium.com/@theboi",
  },
  {
    icon: "tiktok",
    color: "#010101",
    link: "/rick",
  }
];

export default function AboutPage(props) {
  const [isCrowned, setIsCrowned] = useState(false);

  return (
    <>
      <div className={style.main}>
        <div className={style.meWrapper}>
          <img
            className={style.me}
            src={
              isCrowned
                ? props.isDarkMode
                  ? "/images/crowns/dark-me-crown.jpg"
                  : "/images/crowns/light-me-crown.jpg"
                : "/images/crowns/me.jpg"
            }
            alt="Me"
            style={isCrowned ? { cursor: "pointer" } : null}
          />
          <div
            className={style.meMap}
            onClick={() => setIsCrowned(true)}
            style={isCrowned ? { cursor: "pointer" } : null}
          />
          {/* <div className={style.heart}/> */}
        </div>
        <div className={style.intro}>
          <h1 className={style.hey}>Hey,</h1>
          <p>
            I'm Ryan — a <span>student</span>, self-taught software{" "}
            <span>developer</span> and <span>designer</span> based in Singapore.
            Coding since 2018.
          </p>
          <div className={style.contact}>
            <i className={`far fa-envelope`} />
            <a href="mailto:ryan.theodore.2006@gmail.com" target="_blank">
              ryan.theodore.2006@gmail.com
            </a>
          </div>
          <div className={style.social}>
            {socialLinks.map((value, index) => {
              return (
                <a
                  key={index}
                  className={style.socialButtons}
                  style={{ background: value.color }}
                  href={value.link}
                  target="_blank"
                >
                  <i className={`fab fa-${value.icon}`} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
