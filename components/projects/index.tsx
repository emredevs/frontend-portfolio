"use client";
import { Repo, RepoType } from "@/types/github-repo/type";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import GitHubIcon from "@mui/icons-material/GitHub";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CodeIcon from "@mui/icons-material/Code";
export default function ProjectsComponents() {
  const [repo, setRepo] = useState<Repo[]>([]);
  const [more, setMore] = useState<number>(9);
  useEffect(() => {
    axios
      .get<RepoType>("https://api.github.com/users/emredevs/repos")
      .then((res) => setRepo(res.data.slice(0, more)));
  }, [more]);
  return (
    <div className={styles.userRepo}>
      {repo.map((repo) => (
        <div className={styles.repoCard} key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.full_name}</p>
          <div>
            <CodeIcon sx={{ fontSize: 15 }} />
            {repo.language}
            <CodeOffIcon sx={{ fontSize: 15 }} />
          </div>
          <div>Updated: {repo.updated_at.slice(0, 10)}</div>
          <div className={styles.repoRouter}>
            <Link href={repo.html_url} target="_blank">
              <GitHubIcon sx={{ fontSize: 15 }} />
              Source
            </Link>

            {repo.homepage ? (
              <Link href={repo.homepage} target="_blank">
                <RemoveRedEyeIcon sx={{ fontSize: 15 }} /> Preview
              </Link>
            ) : null}
          </div>
        </div>
      ))}
      <button
        className={styles.moreBtn}
        onClick={() => setMore((prev) => prev + 5)}
      >
        More
      </button>
    </div>
  );
}
