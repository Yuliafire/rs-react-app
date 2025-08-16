"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import styles from "./Card.module.scss";
import type { CharacterDetails } from "../../../types/types";
import { useSelector, useDispatch } from "react-redux";
import { addCharacter, removeCharacter } from "../../../store/charactersSlice";
import type { RootState, AppDispatch } from "../../../store/store";
import { useTheme } from "../../../shared/hooks/useTheme";

interface CardProps {
  character: CharacterDetails;
  onCardClick: () => void;
}

const Card = ({ character, onCardClick }: CardProps) => {
  const t = useTranslations("Card");
  const { theme } = useTheme();
  const params = useParams<{ page: string }>();
  const page = params?.page ?? "1";
  const dispatch = useDispatch<AppDispatch>();
  const selectedCharacters = useSelector(
    (state: RootState) => state.characters.selectedCharacters,
  );

  if (!character) {
    return null;
  }

  const isSelected = selectedCharacters?.some(
    (item) => item?.id === character.id,
  );

  const handleCheckboxChange = () => {
    if (isSelected) {
      dispatch(removeCharacter(character.id));
    } else {
      const payload = {
        id: character.id,
        name: character.name,
        species: character.species,
        status: character.status,
        detailsUrl: `/characters/${character.id}/${page}`,
      };
      dispatch(addCharacter(payload));
    }
  };

  const handleCardClick = () => {
    onCardClick();
  };

  return (
    <div
      className={`${styles.card} ${styles[theme]}`}
      onClick={handleCardClick}
      data-testid="card"
      role="button"
      tabIndex={0}
      aria-label={t("viewDetailsAria", {
        name: character.name || t("unknown"),
      })}
    >
      <div className={styles.cardImage}>
        {character.image ? (
          <Image
            src={character.image}
            alt={character.name || t("unknown")}
            width={200}
            height={200}
          />
        ) : (
          <span>{t("noImage")}</span>
        )}
        <span
          className={`${styles.statusBadge} ${styles[character.status?.toLowerCase()]}`}
          data-testid="status-badge"
        >
          {character.status
            ? t(`status.${character.status.toLowerCase()}`)
            : t("unknown")}
        </span>
      </div>
      <div className={styles.cardContent}>
        <h3>{character.name || t("unknown")}</h3>
        <div className={styles.details}>
          <p>
            <strong>{t("species")}:</strong> {character.species || t("unknown")}
          </p>
          <p>
            <strong>{t("gender")}:</strong> {character.gender || t("unknown")}
          </p>
          <p>
            <strong>{t("origin")}:</strong>{" "}
            {character.origin?.name || t("unknown")}
          </p>
          <p>
            <strong>{t("location")}:</strong>{" "}
            {character.location?.name || t("unknown")}
          </p>
        </div>
        <div className={styles.episodes}>
          {t("episodes")}: {character.episode?.length || t("unknown")}
        </div>
      </div>
      <input
        className={styles.flag}
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        onClick={(e) => e.stopPropagation()}
        aria-label={t(isSelected ? "deselectAria" : "selectAria", {
          name: character.name || t("unknown"),
        })}
      />
    </div>
  );
};

export default Card;
