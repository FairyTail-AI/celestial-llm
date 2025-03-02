import { Check } from "lucide-react";
import {AnimatedBeamMultipleOutput} from "@/components/landing/components/animated-beam-multiple-output";

const ITEMS = [
  <>
    <span className="text-foreground">Поиск и анализ внутренних данных</span> без утечки информации.
  </>,
  <>
    <span className="text-foreground">Автоматизация отчетов и аналитики</span> с учетом корпоративных стандартов.
  </>,
  <>
    <span className="text-foreground">Выбор развертывания:</span> внутри компании (On-Prem) или в нашем облаке Celestial Cloud.
  </>,
]

export const KeyFeatures = () => (
  <section id="features" className="w-full py-20">
    <div className="container mx-auto px-4">
      <div className="grid border rounded-lg p-4 md:p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter md:max-w-xl text-left ">
                AI-поиск в периметре компании
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Используйте мощь искусственного интеллекта, сохраняя полный контроль над данными
              </p>
            </div>
          </div>
          <ul className="space-y-6 font-medium sm:text-base text-lg md:text-xl">
            {ITEMS.map((text, index) => (
              <li
                key={index}
                className="flex items-center"
              >
                <Check className="mr-4 max-w-5 w-full"/>
                <p className="text-muted-foreground leading-none tracking-tighter">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <AnimatedBeamMultipleOutput/>
      </div>
    </div>
  </section>
);