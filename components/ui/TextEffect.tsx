"use client";
import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";

interface TextEffectProps {
  words: string; // or string[] if it's an array of strings
}

const TextEffect = ({ words }: TextEffectProps) => {
  return <TextGenerateEffect words={words} />;
};

export default TextEffect;
