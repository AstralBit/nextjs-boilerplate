import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Home");

  return (
    <section>
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
  );
}
