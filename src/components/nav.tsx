import Link from "next/link";
import { useTranslations } from "next-intl";

import { ThemeSwitch } from "./theme-switch";
import LocaleSwitcher from "./LocaleSwitcher";
import { metaData } from "@/src/config";

export function Navbar() {
  const t = useTranslations("Nav");

  const navItems = {
    "/blog": { name: t("blog") },
    "/projects": { name: t("project") },
    "/photos": { name: t("photo") },
  };

  return (
    <nav className="lg:mb-16 mb-12 py-5 relative z-10 nav-page">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link key={path} href={path} className="font-medium">
              {name}
            </Link>
          ))}
          <LocaleSwitcher />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
