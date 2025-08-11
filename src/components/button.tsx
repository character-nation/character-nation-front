// components/Button.tsx
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-[14px] py-3",
  lg: "px-4 py-4",
};

const variantClasses = {
  primary:
    "bg-green-300 hover:bg-green-400 active:bg-green-500 text-gray-900 border border-gray-500",
  ghost:
    "bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-900 border border-gray-100",
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center rounded-md text-base font-medium transition-all ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${fullWidth && "w-full"} ${
        disabled && "cursor-not-allowed bg-[#e0e0e0] text-[#a0a0a0]"
      } ${loading && "cursor-wait bg-green-200"} `}
    >
      {loading ? (
        <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </button>
  );
}
