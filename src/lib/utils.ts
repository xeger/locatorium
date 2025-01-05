import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toTitleCase (str: string) {
  return str.split(/\s+/).map(w => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ')
}
