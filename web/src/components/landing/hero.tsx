import {ShimmerButton} from "@/components/ui/shimmer-button";
import {cn} from "@/lib/utils";
import {DEMO_SECTION} from "@/components/landing";
import Link from "next/link";

export const Hero = () => (
  <section className="w-full">
    <div className="container mx-auto px-4">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div className="flex gap-4 flex-col">
          <h1
            className={cn(
              "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
              "py-6 font-medium leading-none tracking-tighter text-transparent text-balance text-center",
              "bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]"
            )}
          >
            Безопасное внедрение AI
            <br className="hidden md:block"/>
            {" "}
            в корпоративный сектор
          </h1>

          <p
            className={cn(
              "text-lg md:text-xl text-center font-normal leading-none tracking-tighter",
              "mb-12 text-balance translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]"
            )}
          >
            Интеграция корпоративных данных с передовыми LLM
            <br className="hidden md:block"/>
            {" "}
            (
            <b className="font-semibold">
              ChatGPT
            </b>
            {", "}
            <b className="font-semibold">
              Claude
            </b>
            {", "}
            <b className="font-semibold">
              DeepSeek
            </b>
            ) при полной защите от утечек.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Link href={`/#${DEMO_SECTION}`}>
            <ShimmerButton>
              Получить защищенный доступ к AI
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  </section>
);