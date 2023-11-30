import { cva } from "class-variance-authority";
const base = "flex gap-2";

const button = cva(base, {
  variants: {
    intent: {
      primary: ["bg-rouge", "text-blanc"],
      secondary: ["bg-blanc", "text-rouge"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-xl", "py-4", "px-8"],
    },
    rounded: {
      rd: ["rounded-full"],
      nrd: "",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function ButtonCVA({
  className,
  intent,
  size,
  rounded,
  ...props
}) {
  return (
    <button
      className={button({ intent, size, rounded, className })}
      {...props}
    />
  );
}