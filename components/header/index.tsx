import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <Link href={"/"}>ƎE</Link>
      </div>
      <div className={styles.headerLink}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"mailto:jp.emreer@gmail.com"}> GmailContact</Link>
      </div>
    </div>
  );
}
