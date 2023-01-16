import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>
      <div>Side bar</div>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>

      <div>{children}</div>
    </div>
  );
}
