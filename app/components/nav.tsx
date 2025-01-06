"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/blog": { name: "博客" },
  "/projects": { name: "项目" },
  "/photos": { name: "照片" },
};

export function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathName.includes(path); // 判断是否是当前路径

            return (
              <Link
                key={path}
                href={path}
                className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative font-black text-xl ${
                  isActive && "text-blue-500 dark:text-blue-300"
                }`}
              >
                {name}
              </Link>
            );
          })}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
