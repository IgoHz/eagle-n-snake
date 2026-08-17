import React from "react";

interface BracketButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "subtle";
  asChild?: boolean;
  className?: string;
}

export function BracketButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: BracketButtonProps) {
  const variantStyles = {
    primary:
      "text-[#dcd6cd] hover:text-white border-transparent hover:border-[#333] hover:bg-[#111111]/80",
    secondary:
      "text-[#8e8a83] hover:text-[#e6e1da] border-transparent hover:bg-[#151515]",
    subtle:
      "text-[#66635e] hover:text-[#dcd6cd]",
  }[variant];

  return (
    <button
      className={`group relative inline-flex items-center gap-1 font-mono text-[13px] tracking-[0.2em] uppercase py-2 px-3 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e6e1da] ${variantStyles} ${className}`}
      {...props}
    >
      <span className="text-[#55524d] group-hover:text-[#99948d] transition-colors duration-200">
        [
      </span>
      <span className="px-1.5 transition-transform duration-200 group-hover:translate-x-0.5">
        {children}
      </span>
      <span className="text-[#55524d] group-hover:text-[#99948d] transition-colors duration-200">
        ]
      </span>
    </button>
  );
}
