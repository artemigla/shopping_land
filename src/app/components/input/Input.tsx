"use client"
import React from "react";

type InputType = {
  type: string;
  value: string;
  className: string;
  placeholder: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
};

export default function Input({
  type,
  value,
  className,
  onInput,
  placeholder,
  onKeyDown
}: InputType) {
  return (
    <input
      type={type}
      value={value}
      className={className}
      placeholder={placeholder}
      onInput={onInput}
      onKeyDown={onKeyDown}
    />
  );
}
