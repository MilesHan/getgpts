"use client";

import { Gpts } from "@/app/types/gpts";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

interface Props {
  gpts: Gpts[];
  loading: boolean;
}

export default ({ gpts, loading }: Props) => {
  const user = {
    name: "Rebecca Nicholas",
    role: "Product Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const stats = [
    { label: "Vacation days left", value: 12 },
    { label: "Sick days left", value: 4 },
    { label: "Personal days left", value: 2 },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-10 md:py-4 lg:py-4">
      {gpts.map((item: Gpts, idx: number) => {
        return (
          <div className="mx-auto max-w-6xl px-5 py-4 md:px-10 md:py-4 lg:py-4 overflow-hidden rounded-lg bg-white shadow">
        {/* <h2 className="sr-only" id="profile-overview-title">
          Profile Overview
        </h2> */}
        <div className="bg-white p-6 border-2 border-slate-400 border-indigo-600 rounded-md">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src={item.avatar_url}
                  alt={item.description}
                />
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
    
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {item.name}
                </p>
                <p className="text-sm font-medium text-gray-600">
                {item.author_name}
                </p>
                <p className="text-sm font-medium text-gray-600">
                {item.description}
                </p>
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0">
              <a
                href={item.visit_url}
                className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Try
              </a>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-5 text-center text-sm font-medium"
            >
              <span className="text-gray-900">{stat.value}</span>{" "}
              <span className="text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div> */}
      </div>
        );
      })}
      </div>


    </section>
  );
};
