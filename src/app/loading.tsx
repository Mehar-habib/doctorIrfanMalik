"use client";
import "./custom.css";
import { useTheme } from "next-themes";

export default function Loading() {
  const { theme } = useTheme();
  return (
    <div className="loader">
      <div className="cercle"></div>
      <div className="cercle"></div>
      <div className="cercle"></div>
      <div className="cercle"></div>
    </div>
  );
}
