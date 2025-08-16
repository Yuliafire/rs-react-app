// // // src/components/Flyout/DownloadButton.tsx
// // "use client";

// // import { useTranslations } from "next-intl";
// // import { useFormStatus } from "react-dom";
// // import { generateCsvAction } from "../../../lib/actions";
// // import styles from "./DownlodButton.module.scss";
// // import { SelectedCharacter } from "../../../store/charactersSlice";

// // interface DownloadButtonProps {
// //   selectedCharacters: SelectedCharacter[];
// // }

// // const DownloadButton = ({ selectedCharacters }: DownloadButtonProps) => {
// //   const t = useTranslations("Flyout");
// //   const { pending } = useFormStatus();

// //   return (
// //     <form action={generateCsvAction}>
// //       <input
// //         type="hidden"
// //         name="characters"
// //         value={JSON.stringify(selectedCharacters)}
// //       />
// //       <button
// //         type="submit"
// //         className={styles.button}
// //         aria-label={t("download")}
// //         disabled={pending}
// //       >
// //         {pending ? t("downloading") : t("download")}
// //       </button>
// //     </form>
// //   );
// // };

// // export default DownloadButton;

// // src/components/Flyout/DownloadButton.tsx
// "use client";

// import { useTranslations } from "next-intl";
// import { useFormStatus } from "react-dom";
// import { generateCsvAction } from "../../../lib/actions"; // Direct import
// import styles from "./DownlodButton.module.scss";

// export interface SelectedCharacter {
//   id: number;
//   name: string;
//   species: string;
//   status: string;
//   detailsUrl: string;
// }

// interface DownloadButtonProps {
//   selectedCharacters: SelectedCharacter[];
// }

// // Debug: Log the type of generateCsvAction
// console.log("generateCsvAction type:", typeof generateCsvAction);

// const DownloadButton = ({ selectedCharacters }: DownloadButtonProps) => {
//   const t = useTranslations("Flyout");
//   const { pending } = useFormStatus();

//   // Debug: Log whether selectedCharacters is serializable
//   console.log(
//     "Is selectedCharacters serializable?",
//     selectedCharacters.every(
//       (char) => Object.getPrototypeOf(char) === Object.prototype,
//     ),
//   );

//   return (
//     <form action={generateCsvAction}>
//       <input
//         type="hidden"
//         name="characters"
//         value={JSON.stringify(selectedCharacters)}
//       />
//       <button
//         type="submit"
//         className={styles.button}
//         aria-label={t("download")}
//         disabled={pending}
//       >
//         {pending ? t("downloading") : t("download")}
//       </button>
//     </form>
//   );
// };

// export default DownloadButton;

// src/components/Flyout/DownloadButton.tsx
// "use client";

// import { useTranslations } from "next-intl";
// import { useState } from "react";
// import { generateCsvAction } from "../../../lib/actions"; // Direct import
// import styles from "./DownlodButton.module.scss";

// export interface SelectedCharacter {
//   id: number;
//   name: string;
//   species: string;
//   status: string;
//   detailsUrl: string;
// }

// interface DownloadButtonProps {
//   selectedCharacters: SelectedCharacter[];
// }

// const DownloadButton = ({ selectedCharacters }: DownloadButtonProps) => {
//   const t = useTranslations("Flyout");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleDownload = async () => {
//     setIsLoading(true);
//     try {
//       const formData = new FormData();
//       formData.append("characters", JSON.stringify(selectedCharacters));
//       const response = await generateCsvAction(formData);

//       if (response.ok) {
//         const blob = await response.blob();
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement("a");
//         a.href = url;
//         a.download = `${selectedCharacters.length}_items.csv`;
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//         window.URL.revokeObjectURL(url);
//       } else {
//         console.error("Failed to generate CSV:", await response.text());
//       }
//     } catch (error) {
//       console.error("Error downloading CSV:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <button
//       className={styles.button}
//       onClick={handleDownload}
//       aria-label={t("download")}
//       disabled={isLoading}
//     >
//       {isLoading ? t("downloading") : t("download")}
//     </button>
//   );
// };

// export default DownloadButton;

// src/components/Flyout/DownloadButton.tsx
"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { generateCsvAction } from "../../../lib/actions"; // Direct import
import styles from "./DownlodButton.module.scss"; // Note: Fix typo in import path if needed

export interface SelectedCharacter {
  id: number;
  name: string;
  species: string;
  status: string;
  detailsUrl: string;
}

interface DownloadButtonProps {
  selectedCharacters: SelectedCharacter[];
}

const DownloadButton = ({ selectedCharacters }: DownloadButtonProps) => {
  const t = useTranslations("Flyout");
  const [isLoading, setIsLoading] = useState(false);

  // Transform selectedCharacters to ensure plain objects
  const serializableCharacters = selectedCharacters.map((char) => ({
    id: char.id,
    name: char.name,
    species: char.species,
    status: char.status,
    detailsUrl: char.detailsUrl,
  }));

  // Debug: Verify serializability
  console.log(
    "Is serializableCharacters plain?",
    serializableCharacters.every(
      (char) => Object.getPrototypeOf(char) === Object.prototype,
    ),
  );

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("characters", JSON.stringify(serializableCharacters));
      const response = await generateCsvAction(formData);

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${serializableCharacters.length}_items.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Failed to generate CSV:", await response.text());
      }
    } catch (error) {
      console.error("Error downloading CSV:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={styles.button}
      onClick={handleDownload}
      aria-label={t("download")}
      disabled={isLoading}
    >
      {isLoading ? t("downloading") : t("download")}
    </button>
  );
};

export default DownloadButton;
