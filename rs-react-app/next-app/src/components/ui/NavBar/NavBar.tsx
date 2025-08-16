"use client";
import styles from "./NavBar.module.scss";
import { useTheme } from "../../../shared/hooks/useTheme";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "../../../i18n/navigation";
import { useSearchParams } from "next/navigation";

export const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("NavBar");
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const changeTheme = () => {
    toggleTheme();
  };

  const switchLanguage = () => {
    const queryParams = searchParams
      ? Object.fromEntries(searchParams.entries())
      : {};

    router.replace(
      { pathname, query: queryParams },
      { locale: locale === "en" ? "ru" : "en" },
    );
  };

  return (
    <nav className={`${styles.nav} ${styles[theme]}`}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link className={styles.link} href="/about">
            {" "}
            {t("AboutLink")}
          </Link>
        </li>
        <li className={styles.listItem} onClick={changeTheme}>
          {theme === "light" ? t("darkTheme") : t("lightTheme")}
        </li>
        <li className={styles.listItem} onClick={switchLanguage}>
          {t("switchLanguage")}
        </li>
      </ul>
    </nav>
  );
};
