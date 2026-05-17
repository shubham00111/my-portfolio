"use client";

import { useEffect, useState } from "react";

function ordinalSuffix(n: number): string {
  const v = n % 100;
  if (v >= 11 && v <= 13) return "th";
  switch (n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/shubhamrawat-portfolio/visits/up")
      .then((r) => r.json())
      .then((data) => setCount(data.count))
      .catch(() => {});
  }, []);

  if (count === null) return null;

  const formatted = count.toLocaleString("en-US");
  const suffix = ordinalSuffix(count);

  return (
    <p className="text-sm text-muted-foreground">
      You&apos;re the{" "}
      <span className="font-bold text-foreground">{formatted}</span>
      <sup className="font-bold text-foreground text-[10px]">{suffix}</sup>
      {" "}visitor
    </p>
  );
}
