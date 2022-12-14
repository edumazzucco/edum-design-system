import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-teal-500 rounded font-semibold text-light-bg text-sm w-full transition-colors duration-300 hover:bg-teal-400 focus:ring-2 ring-light-bg"
      )}
    >
      {children}
    </Comp>
  );
}
