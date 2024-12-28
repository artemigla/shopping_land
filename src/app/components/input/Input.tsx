import React from "react";

type InputType = {
  type: string;
  value: string;
  className: string;
  placeholder: string;
  onInput: () => void;
};

export default function Input({
  type,
  value,
  className,
  onInput,
  placeholder,
}: InputType) {
  return (
    <input
      type={type}
      value={value}
      className={className}
      placeholder={placeholder}
      onInput={onInput}
    />
  );
}
