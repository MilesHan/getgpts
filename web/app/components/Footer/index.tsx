"use client";
const navigation = {
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-2 sm:pt-2 lg:px-8 lg:pt-2">
        <div className="ml-8 mt-4 border-t border-gray-900/10 pt-8 sm:mt-4 lg:mt-4 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-8 text-gray-900">
              Credit to
            </h3>
            <p>
              <a
                href="https://www.gptshunter.com/"
                className="inline-block mx-2 py-1.5 text-xs font-normal text-[#276EF1] transition hover:text-[#276EF1] sm:py-2 "
                target="_blank"
              >
                GPTsHunter
              </a>
            </p>
            <p>
              <a
                href="https://gpts.works"
                className="inline-block mx-2 py-1.5 text-xs font-normal text-[#276EF1] transition hover:text-[#276EF1] sm:py-2 "
                target="_blank"
              >
                GPTs.works
              </a>
            </p>
            <p>
              <a
                href="https://www.flaticon.com/free-stickers/study"
                className="inline-block mx-2 py-1.5 text-xs font-normal text-[#276EF1] transition hover:text-[#276EF1] sm:py-2 "
                title="study stickers"
              >
                Study stickers created by kerismaker - Flaticon
              </a>
            </p>
          </div>

          {/* <div className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <div className="flex space-x-6 md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div> */}

          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; 2023 GetGPTs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    // <footer className="block">
    //   <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
    //     <div className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
    //       <div className="max-[767px]: w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial">
    //         <h2 className="text-3xl font-bold md:text-5xl">
    //           Search Useful GPTs What You Want.
    //         </h2>
    //       </div>
    //       <div className="max-[767px]: max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:mt-8">
    //         <div className="mb-4 flex max-w-[272px] items-start justify-start">
    //           <p className="text-[#636262] max-[479px]:text-sm">Contact Us</p>
    //         </div>
    //         <div className="mb-4 flex max-w-[272px] items-start justify-start">
    //           <img
    //             src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f6e24e55dd49a541fd06_EnvelopeSimple-3.svg"
    //             alt="image"
    //             className="mr-3 inline-block"
    //           />
    //           <p className="text-[#636262] max-[479px]:text-sm">
    //             <a href="mailto:captain@getgpts.xyz">captain@getgpts.xyz</a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mb-14 mt-16 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]"></div>
    //     <div className="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
    //       <div className="max-[991px]: text-center font-semibold max-[991px]:py-1 max-[479px]:mb-4 sm:text-center">
    //         <a
    //           href="https://www.flaticon.com/free-stickers/study"
    //           title="study stickers"
    //         >
    //           Study stickers created by kerismaker - Flaticon
    //         </a>
    //         <a
    //           href="https://www.flaticon.com/free-stickers/graphic-design"
    //           title="graphic design stickers"
    //         >
    //           Graphic design stickers created by Stickers - Flaticon
    //         </a>
    //       </div>
    //       <div className="max-[991px]: text-center font-semibold max-[991px]:py-1 max-[479px]:mb-4 sm:text-center">
    //         Credit to
    //         <a
    //           href="https://www.gptshunter.com/"
    //           className="inline-block mx-2 py-1.5  font-normal text-[#276EF1] transition hover:text-[#276EF1] sm:py-2 "
    //           target="_blank"
    //         >
    //           GPTsHunter
    //         </a>
    //         <span>|</span>
    //         <a
    //           href="https://gpts.works"
    //           className="inline-block mx-2 py-1.5  font-normal text-[#276EF1] transition hover:text-[#276EF1] sm:py-2 "
    //           target="_blank"
    //         >
    //           GPTs.works
    //         </a>
    //       </div>
    //       <div className="max-[991px]:flex-none">
    //         <p className="text-[#636262] max-[479px]:text-sm">
    //           {" "}
    //           © Copyright 2023. All rights reserved.{" "}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};
