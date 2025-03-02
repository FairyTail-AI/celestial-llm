import Script from "next/script";

export const DEMO_SECTION = "demo";

export const Demo = () => {

  return (
    <section id={DEMO_SECTION} className="py-32">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <span className=" font-semibold">
            Свяжитесь с нами
          </span>
          <h1 className="mb-3 mt-1 text-3xl font-semibold md:text-4xl">
            Мы ускорим ваши процессы
          </h1>
          <p className="text-lg text-muted-foreground">
            ИИ должен работать для вашего бизнеса – без компромиссов в безопасности.
          </p>
        </div>

        <div className="mx-auto flex max-w-[464px] flex-col gap-6">
          <div className="grid gap-4">
            <div>
              <iframe
                data-tally-src="https://tally.so/embed/nGqoZp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="420"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Свяжитесь с нами"
              />
              <Script id="">
                {`
                  var
                  d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined" != typeof Tally ? Tally.loadEmbeds() : d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function (e) {
                    e.src = e.dataset.tallySrc
                  }))};if("undefined"!=typeof Tally)v();else
                  if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
                `}
              </Script>
            </div>

          </div>
        </div>
      </div>
    </section>
);
};

// export const ContactUs = () => {
//
//   return (
//     <section id={CONTACT_US_SECTION} className="w-full py-20 lg:py-40">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between lg:grid-cols-2 gap-10">
//           <div className="flex flex-col gap-6">
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-col gap-4">
//                 <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
//                   Контакты
//                 </h4>
//                 <p className="text-xl leading-relaxed tracking-tight text-left text-balance">
//                   ИИ должен работать для вашего бизнеса – без компромиссов в безопасности.
//                 </p>
//               </div>
//             </div>
//           {/*  <div className="flex flex-row gap-6 items-start text-left">*/}
//           {/*    <Check className="w-4 h-4 mt-2 text-primary" />*/}
//           {/*    <div className="flex flex-col gap-1">*/}
//           {/*      <p>Простота внедрения</p>*/}
//           {/*      <p className="text-muted-foreground text-sm">*/}
//           {/*        Интуитивно понятная система, не требующая длительного обучения.*/}
//           {/*      </p>*/}
//           {/*    </div>*/}
//           {/*  </div>*/}
//           {/*  <div className="flex flex-row gap-6 items-start text-left">*/}
//           {/*    <Check className="w-4 h-4 mt-2 text-primary" />*/}
//           {/*    <div className="flex flex-col gap-1">*/}
//           {/*      <p>Надежность и скорость</p>*/}
//           {/*      <p className="text-muted-foreground text-sm">*/}
//           {/*        Мгновенная обработка данных с гарантией безопасности.*/}
//           {/*      </p>*/}
//           {/*    </div>*/}
//           {/*  </div>*/}
//           {/*  <div className="flex flex-row gap-6 items-start text-left">*/}
//           {/*    <Check className="w-4 h-4 mt-2 text-primary" />*/}
//           {/*    <div className="flex flex-col gap-1">*/}
//           {/*      <p>Современные технологии</p>*/}
//           {/*      <p className="text-muted-foreground text-sm">*/}
//           {/*        Передовые решения в области AI и защиты данных.*/}
//           {/*      </p>*/}
//           {/*    </div>*/}
//           {/*  </div>*/}
//           </div>
//
//           <div className="justify-center flex items-center">
//             <div className="relative rounded-md max-w-sm flex flex-col border p-8 gap-4">
//               <p className="text-lg font-semibold">
//                 Запросить Демо
//               </p>
//
//               <iframe
//                 data-tally-src="https://tally.so/embed/nGqoZp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
//                 loading="lazy"
//                 width="100%"
//                 height="420"
//                 frameBorder="0"
//                 marginHeight={0}
//                 marginWidth={0}
//                 title="Свяжитесь с нами"
//               />
//               <Script id="">
//                 {`
//                   var
//                   d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined" != typeof Tally ? Tally.loadEmbeds() : d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function (e) {
//                     e.src = e.dataset.tallySrc
//                   }))};if("undefined"!=typeof Tally)v();else
//                   if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
//                 `}
//               </Script>
//
//               {/*<div className="absolute bottom-10 right-10 left-10 w-auto h-14 bg-white" />*/}
//             </div>
//           </div>
//
//         </div>
//       </div>
//     </section>
//   );
// };