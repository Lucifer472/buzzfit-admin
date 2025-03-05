import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: string) {
  // Convert the number to an integer (in case it's passed as a string)
  const number = parseInt(num, 10);

  // Check if the number is less than 1 million
  if (number >= 1000000) {
    // If the number is in the millions, format it with "M"
    return (number / 1000000).toFixed(1) + 'M';
  } else if (number >= 1000) {
    // If the number is in the thousands, format it with "k"
    return (number / 1000).toFixed(1) + 'k';
  } else {
    // Return the number as is if it's less than 1000
    return number;
  }
}
