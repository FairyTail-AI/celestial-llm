"use client";

import { Button } from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {DEMO_SECTION} from "@/components/landing";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-background">
      <div
        className={cn(
          "container mx-auto px-4 min-h-20",
          "flex flex-row items-center justify-between",
          "gap-4",
        )}
      >
        <div className="flex items-center">
          <p className="font-semibold text-lg md:text-xl">
            Celestial Cloud
          </p>
        </div>

        <div className="flex gap-4">
          <Link href={`/#${DEMO_SECTION}`}>
            <Button>
              Запросить Демо
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
};