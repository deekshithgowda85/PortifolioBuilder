import { Client } from "../[...puckPath]/client";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPage } from "../../lib/get-page";

export async function generateMetadata(): Promise<Metadata> {
  const data = getPage("/landing");
  return {
    title: data?.root.props?.title || "Deekshith Gowda - Portfolio",
  };
}

export default async function LandingPage() {
  const data = getPage("/landing");

  if (!data) {
    return notFound();
  }

  return <Client data={data} />;
}

export const dynamic = "force-static";
