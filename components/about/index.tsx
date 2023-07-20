import React from "react";
import styles from "./styles.module.css";
export default function AboutComponent() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.myInfo}>
        <div>
          <h1>About Me</h1>
          As a new developer in the field of software, I constantly motivate
          myself to learn and improve. I enjoy researching and implementing new
          technologies, and I always strive to achieve the best results. I am
          passionate and enthusiastic about computer science, and I believe that
          this passion is reflected in the work I do.
        </div>
        <div>
          <h2>My hobbies include</h2>
          Walking, cooking, watching movies, playing video games and swimming
        </div>
        <div>
          <h2>Languages and Tools</h2>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="bootstrap"
            width="60"
            height="60"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="60"
            height="60"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="60"
            height="60"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="60"
            height="60"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="typescript"
            width="60"
            height="60"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="60"
            height="60"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="sass"
            width="60"
            height="60"
          />
        </div>
      </div>

      <div className={styles.gitHubSkill}>
        <img
          src="https://streak-stats.demolab.com?user=emredevs&locale=en&mode=daily&theme=dracula&hide_border=true&border_radius=5"
          height="150"
          alt="streak graph"
        />
        <img
          src="https://github-readme-stats.vercel.app/api?username=emredevs&theme=dracula&show_icons=true&count_private=true&hide_border=true"
          height="150"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=emredevs&theme=dracula&hide_border=true&layout=compact"
          height="150"
        />
      </div>
    </div>
  );
}
