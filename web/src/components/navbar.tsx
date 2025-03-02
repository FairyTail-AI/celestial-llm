"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="p-2 flex flex-row gap-2 justify-between border-b">
      <Link href="/" className="font-semibold">
        Celestial Cloud
      </Link>
    </div>
  );
};
