import { cva } from "class-variance-authority";
const base = "flex gap-2 duration-500";

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
    hover: {
      primary: ["hover:bg-blanc", "hover:text-rouge"],
      secondary: ["hover:bg-rouge", "hover:text-blanc"],
    },
    fill: {
      primary: ["hover:fill-blanc"],
      secondary: ["hover:fill-rouge"],
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
  hover,
  fill,
  ...props
}) {
  return (
    <button
      className={button({ intent, size, hover, fill, className })}
      {...props}
    />
  );
}