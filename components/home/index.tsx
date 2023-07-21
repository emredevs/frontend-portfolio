"use client";
import React, { useEffect, useState } from "react";
import { UserType } from "@/types/user-info/type";
import Link from "next/link";
import axios from "axios";
import styles from "./styles.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
export default function HomeComponents() {
  const [user, setUser] = useState<UserType>();
  useEffect(() => {
    axios
      .get<UserType>("https://api.github.com/users/emredevs")
      .then((res) => setUser(res.data));
  }, []);
  // const socialRouter = (info: string) => {
  //   window.open(info, "_blank");
  // };
  return (
    <div className={styles.homeComponent}>
      <div>
        <img src={user?.avatar_url} alt={user?.name} />
      </div>
      <div>
        <div>
          HI THERE ! I'M <b>{user?.name}</b>
        </div>
        <div>Frontend Developer</div>
        <div className={styles.socialIcon}>
          <Link href={"https://wa.me/05445123306"} target="_blank">
            <WhatsAppIcon style={{ fontSize: "xx-large" }} />
          </Link>
          <Link href={"https://www.instagram.com/emreer.0/"} target="_blank">
            <InstagramIcon style={{ fontSize: "xx-large" }} />
          </Link>
          <Link href={"https://github.com/emredevs"} target="_blank">
            <GitHubIcon style={{ fontSize: "xx-large" }} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/emre-er-4b8348261/"}
            target="_blank"
          >
            <LinkedInIcon style={{ fontSize: "xx-large" }} />
          </Link>

          {/* <WhatsAppIcon
            onClick={() => socialRouter("https://wa.me/05445123306")}
            style={{ cursor: "pointer", fontSize: "xx-large" }}
          />
          <InstagramIcon
            onClick={() => socialRouter("https://www.instagram.com/emreer.0/")}
            style={{ cursor: "pointer", fontSize: "xx-large" }}
          />
          <GitHubIcon
            onClick={() => socialRouter("https://github.com/emredevs")}
            style={{ cursor: "pointer", fontSize: "xx-large" }}
          />
          <LinkedInIcon
            onClick={() =>
              socialRouter("https://www.linkedin.com/in/emre-er-4b8348261/")
            }
            style={{ cursor: "pointer", fontSize: "xx-large" }}
          /> */}
        </div>
        <div className={styles.cvLink}>
          <Link href={"img/cv.pdf"} target="_blank" download={"EmreErCv.pdf"}>
            My Cv
            <SimCardDownloadIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
