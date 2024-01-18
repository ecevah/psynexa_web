"use client";
import React from "react";

//Constants
import {
  ARRAY_HEADER_PURPLE_BUTTON,
  ARRAY_HEADER_ITEM_BUTTON,
} from "@/constant/constant";

import Header from "@/components/templates/landing/header";
import Hero from "@/components/templates/landing/hero";
import PhotoCard from "@/components/templates/landing/photo_card";
import IconCardSection from "@/components/templates/landing/icon_card";
import TextButtonSection from "@/components/templates/landing/text_button_section";
import Comment from "@/components/templates/landing/comment";
import Price from "@/components/templates/landing/price";
import Footer from "@/components/templates/landing/footer";

export default function Home() {
  return (
    <>
      <Header
        itemButtonArray={ARRAY_HEADER_ITEM_BUTTON}
        purpleButtonArray={ARRAY_HEADER_PURPLE_BUTTON}
      />
      <Hero />
      <PhotoCard />
      <IconCardSection />
      <TextButtonSection />
      <Comment />
      <Price />
      <Footer />
    </>
  );
}
