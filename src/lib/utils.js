import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function parseISO8601Duration(duration) {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = duration.match(regex);

  const hours = matches[1] ? parseInt(matches[1]) : 0;
  const minutes = matches[2] ? parseInt(matches[2]) : 0;
  const seconds = matches[3] ? parseInt(matches[3]) : 0;

  const formatTwoDigits = (num) => (num < 10 ? `0${num}` : `${num}`);

  return {
    totalSeconds: hours * 3600 + minutes * 60 + seconds,
    hours: hours,
    minutes: formatTwoDigits(minutes),
    seconds: formatTwoDigits(seconds),
  };
}
