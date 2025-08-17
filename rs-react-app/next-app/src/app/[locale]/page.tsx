"use server";

import { getTranslations } from "next-intl/server";
import Home from "@/pages/home/Home";
import { CharacterDetails } from "@/types/types";

interface ServiceResponse<T> {
  status: "success" | "error";
  data: T;
  message?: string;
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

export default async function Page({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { page?: string };
}) {
  const t = await getTranslations("Home");
  const page = searchParams.page || "1";

  let characters: ServiceResponse<CharacterDetails[]> = {
    status: "success",
    data: [],
  };

  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
      {
        next: {
          revalidate: 60 * 60,
          tags: ["characters"],
        },
      },
    );

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const apiData = await res.json();
    characters = {
      status: "success",
      data: apiData.results,
      info: apiData.info,
    };
  } catch (error) {
    characters = {
      status: "error",
      data: [],
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }

  return (
    <Home
      initialData={characters}
      initialPage={parseInt(page)}
      translations={{
        title: t("title"),
        loading: t("loading"),
        error: t("error"),
      }}
    />
  );
}
