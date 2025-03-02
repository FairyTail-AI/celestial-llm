import Link from "next/link";
import {cn} from "@/lib/utils";
import {DEMO_SECTION} from "@/components/landing";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Продукт",
      description: "",
      items: [
        {
          title: "Возможности",
          href: "/#features",
        },
        {
          title: "Как работает",
          href: "/#how-it-works",
        },
        {
          title: "Ценности",
          href: "/#values",
        },
        {
          title: "Демонстрация",
          href: `/#${DEMO_SECTION}`,
        },
      ],
    },
    // {
    //   title: "Компания",
    //   description: "",
    //   items: [
    //     {
    //       title: "О нас",
    //       href: "/about",
    //     },
    //     {
    //       title: "Инвесторы",
    //       href: "/investors",
    //     },
    //     {
    //       title: "Контакты",
    //       href: "/contact",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Celestial Cloud
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Безопасный AI в корпоративный сектор
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>
                  With love from Kazakhstan
                  {" "}
                  <span className="text-lg">
                    🇰🇿
                  </span>
                </p>
              </div>
              {/*<div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">*/}
              {/*  <Link href="/">Terms of service</Link>*/}
              {/*  <Link href="/">Privacy Policy</Link>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  // index === 0 && "col-start-2",
                  index === 0 && "col-start-3",
                  "flex text-base gap-1 flex-col items-start"
                )}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xl">{item.title}</p>

                  {item.items && item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-background/75">
                        {subItem.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};