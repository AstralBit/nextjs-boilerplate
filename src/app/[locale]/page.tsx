"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Home");

  return (
    <>
      <section className="ani-1 relative  overflow-hidden">
        <div className="x-line top-[10%]"></div>
        <div className="x-line top-[30%]"></div>
        <div className="x-line top-[60%]"></div>
        {/* <!-- 减去line-width是因为 overflow-hidden 会遮住100%偏移的元素 --> */}
        <div className="x-line top-[calc(100%-var(--line-width))]"></div>

        <div className="y-line  left-0"></div>
        <div className="y-line  left-[30%]"></div>
        <div className="y-line  left-[70%]"></div>
        <div className="y-line  left-[calc(100%-var(--line-width))]"></div>

        <Image
          src="/IMG_6096.webp"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
        <h1 className="mb-8 text-2xl font-medium tracking-tight">
          {t("welcome")}
        </h1>
        <div className="prose prose-neutral dark:prose-invert">
          <p> {t("p2")}</p>
          <p> {t("p3")}</p>
          <p> {t("p4")}</p>
        </div>
      </section>
    </>
  );
}
