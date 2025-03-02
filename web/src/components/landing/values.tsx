import {
  FileCheck, FileClock, Shield, Sparkles, TextSearch
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Безопасность",
    description: "Данные остаются внутри компании, исключая риски утечек.\n"
  },
  {
    icon: TextSearch,
    title: "Интеллектуальный поиск",
    description: "Анализируем смысл запроса, а не только ключевые слова.\n"
  },
  {
    icon: FileClock,
    title: "Экономия времени и ресурсов",
    description: "Сотрудники получают быстрые ответы, вместо ручного поиска.\n"
  },
  {
    icon: Sparkles,
    title: "Гибкость",
    description: "Поддержка различных ИИ-моделей (ChatGPT, Claude, DeepSeek) в одном решении.\n"
  },
  {
    icon: FileCheck,
    title: "Соответствие требованиям",
    description: "Соответствует стандартам безопасности крупных корпораций и регулируемых отраслей.\n"
  },
];

export const Values = () => {
  return (
    <section id="values" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            В чем ценность Celestial Cloud?
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {values.map((capability, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                <capability.icon className="size-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{capability.title}</h3>
              <p className="text-muted-foreground leading-6">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};