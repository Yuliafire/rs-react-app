"use server";

import Link from "next/link";
import { getTranslations } from "next-intl/server";
import styles from "../../../assets/styles/About.module.scss";
import { cookies } from "next/headers";

export default async function AboutPage() {
  const t = await getTranslations("About");
  const cookieStore = cookies();
  const theme =
    ((await cookieStore).get("theme")?.value as "light" | "dark") || "dark";

  return (
    <div className={`${styles.about} ${styles[theme]}`}>
      <h2>{t("subtitle")}</h2>

      <section className={styles.authorInfo}>
        <h3>{t("heading")}</h3>
        <p>{t("author")}</p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Yuliafire"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Yuliafire
          </a>
        </p>
      </section>

      <section className={styles.courseInfo}>
        <h3>{t("courseInfo")}</h3>
        <p>
          {t("description")}{" "}
          <Link
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("courseName")}
          </Link>
        </p>
      </section>

      <Link href="/" className={styles.backLink} role="link">
        ← {t("back")}
      </Link>
    </div>
  );
}
