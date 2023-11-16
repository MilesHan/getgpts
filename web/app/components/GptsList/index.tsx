"use client";

import { Gpts } from "@/app/types/gpts";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

interface Props {
  gpts: Gpts[];
  loading: boolean;
}

export default ({ gpts, loading }: Props) => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-10 md:py-4 lg:py-4">
        {!loading ? (
          <div>
            <div className="mb-8 gap-5 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
              {gpts.map((item: Gpts, idx: number) => {
                return (
                  <Link href={`${item.visit_url}`} target="_blank" key={idx}>
                    <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-slate-400 border-[#7e7e7e] bg-white p-8">
                      <div className="mb-4 flex flex-row">
                        <LazyLoadImage
                          src={item.avatar_url}
                          alt={item.name}
                          className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
                        />
                        <div className="flex flex-col">
                          <h6 className="text-base font-semibold">
                            {item.name}
                          </h6>
                          <p className="text-sm text-[#636262]">
                            {item.author_name}
                          </p>
                        </div>
                      </div>
                      <p className="mb-4 text-sm text-[#636262]">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* <div className="mx-auto text-center">
              <button
                type="button"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Loading More
              </button>
            </div> */}
          </div>
        ) : (
          <div className="mx-auto text-center">Loading...</div>
        )}
      </div>
    </section>
  );
};
