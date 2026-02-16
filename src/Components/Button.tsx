import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  icon?: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  icon,
  onClick,
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center px-6 py-3 rounded-lg transition duration-300 cursor-pointer";

  const primaryStyle = "bg-cyan-600 text-white hover:bg-cyan-700";
  const outlineStyle =
    "border border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-500 hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${
        variant === "primary" ? primaryStyle : outlineStyle
      }`}
    >
      {children}
      {icon && <span className="ml-3">{icon}</span>}
    </button>
  );
}
