import React from 'react';
import { Cloud, Search, LineChart, Shield } from 'lucide-react';
import {cn} from "@/lib/utils";

const features = [
  {
    icon: Cloud,
    title: "Интеграция данных",
    description: "Подключаем корпоративные хранилища, базы данных, мониторинговые системы и документы. Все данные хранятся локально на серверах клиента или в облаке Celestial Cloud."
  },
  {
    icon: Search,
    title: "Поиск и обработка запросов",
    description: "Система анализирует смысл и контекст, а не просто ищет ключевые слова. Перед отправкой в ИИ данные обезличиваются и шифруются."
  },
  {
    icon: LineChart,
    title: "Генерация ответов и аналитики",
    description: "ИИ создает отчеты, анализирует тренды, отвечает на сложные вопросы. После обработки данные возвращаются в исходном виде, без утечек."
  },
  {
    icon: Shield,
    title: "Безопасность и контроль",
    description: "Ваши данные никогда не передаются в OpenAI или другие внешние системы. ИИ работает только с зашифрованной или маскированной информацией."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full relative pt-32 overflow-hidden">
      <div className="z-10 flex flex-col space-y-14">
        <div className="container relative mx-auto px-4">
          <h2 className="px-6 text-3xl font-semibold md:mb-4 md:text-5xl lg:mb-6 lg:px-10 text-pretty">
            Как работает Celestial Cloud?
          </h2>
        </div>

        <div className="relative mt-6 md:mt-10">
          <div
            className="absolute top-0 left-0 h-px w-screen bg-border 2xl:-mx-[calc((100vw-100%)/2)]"></div>
          <div className="container relative mx-auto px-4 grid divide-border md:grid-cols-4 md:divide-x">
            {features.map((feature, index) => (
              <div key={index} className="relative px-6 pb-20 md:pb-10 lg:px-10">
                <div
                  className="absolute top-0 -left-4 h-px w-screen bg-border md:hidden"></div>
                <div
                  className={cn(
                    "relative -mt-6 mb-10 flex size-16 items-center justify-center bg-accent rounded-full",
                    "md:-mt-10 md:mb-10"
                  )}
                >
                  <feature.icon className="size-5"/>
                </div>

                {/*<div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">*/}
                {/*  <capability.icon className="size-5"/>*/}
                {/*</div>*/}
                <div>
                  <h3 className="mb-3 md:max-w-[12rem] text-xl font-semibold md:mb-4 lg:mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="absolute bottom-0 h-px w-screen bg-border 2xl:-mx-[calc((100vw-100%)/2)]"></div>
        </div>
      </div>
      {/*<div className="container absolute inset-0 hidden h-full md:block">*/}
      {/*  <div className="relative h-full">*/}
      {/*    <div className="absolute inset-y-0 left-0 h-full w-px bg-border"></div>*/}
      {/*    <div className="absolute inset-y-0 right-0 h-full w-px bg-border"></div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
};

export default HowItWorks;