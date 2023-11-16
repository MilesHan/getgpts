"use client";

interface Props {
  count: number;
}

export default ({ count }: Props) => {
  return (
    <section className="relatve">
      <div className="mx-auto w-full max-w-7xl px-5 py-2 md:px-10 pt-8 md:pt-24 lg:pt-32">
        <div className="mx-auto mb-0 w-full max-w-6xl text-center">
          <h3 className=" mb-4 text-3xl font-bold md:text-7xl">
            Collection of Useful GPTs
            {/* <p className="my-8 text:md md:text-4xl">
              <span className="text-[#2752f4]">{count}</span> fantastic GPTs
              stored
            </p> */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              For ChatGPT Users and GPTs Developers
            </p>
          </h3>
        </div>
      </div>
      {/* <img
        width="120"
        src="/brand-search-idea.png"
        alt=""
        className="absolute bottom-[auto] left-[auto] right-0 top-16 -z-10 inline-block max-[767px]:hidden"
      /> */}
      <img
        width="200"
        src="/brand-concept.png"
        alt=""
        className="absolute bottom-[auto] right-[auto] -left-4 top-40 -z-10 inline-block max-[767px]:hidden"
      />
    </section>
  );
};
