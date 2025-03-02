import {Button} from "@/components/ui/button";
import Link from "next/link";

export const Cta = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div
          className="flex items-center justify-center rounded-2xl border bg-cta bg-cover bg-center px-4 py-20 text-center md:p-20"
        >
          <div
            className="mx-auto max-w-screen-md"
          >
            <h1
              className="mb-4 text-balance text-3xl font-semibold md:text-5xl"
            >
              Используйте возможности ИИ, не раскрывая данные
            </h1>
            <p
              className="text-muted-foreground leading-relaxed tracking-tight text-lg"
            >
              Celestial Cloud позволяет компаниям интегрировать передовые ИИ-модели (ChatGPT, Claude, DeepSeek) в свою инфраструктуру, не рискуя конфиденциальностью.
            </p>

            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Link href="/#features">
                <Button>
                  Узнать Больше
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}