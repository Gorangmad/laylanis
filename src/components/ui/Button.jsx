"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  // Primary button with gold gradient (used in Hero section)
  primary:
    "bg-gradient-to-b from-[#F4C430] to-[#DAA520] text-white hover:from-[#DAA520] hover:to-[#F4C430]",

  // Outline button with hover effect (used in About section)
  outline:
    "border-2 border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-white",

  // Secondary button (gold background with black border)
  secondary:
    "bg-[#DAA520] text-[#000000] border-2 border-[#000000] hover:text-white",

  // Circular navigation button (used in Product Card)
  circular:
    "rounded-full w-12 h-12 border-2 border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-white flex items-center justify-center",
};

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const padding = {
  sm: "px-4 py-2",
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button",
  ...props
}) => {
  // Base styles that won't override custom classes
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 rounded-sm";

  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = variant === "circular" ? "" : sizes[size] || sizes.md;
  const paddingStyle =
    variant === "circular" ? "" : padding[size] || padding.md;

  // Merge styles in order of specificity, with custom classes last
  const buttonStyles = twMerge(
    baseStyles,
    variantStyle,
    sizeStyle,
    paddingStyle,
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed" : "",
    className // Custom classes will override previous styles
  );

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
