import Script from "next/script";

export default function Discuss() {
  return (
    <div className="max-w-[720px] w-full">
      <Script
        src="https://giscus.app/client.js"
        data-repo="fsyud/nextjs-boilerplate"
        data-repo-id="R_kgDONLmbxQ"
        data-category="Announcements"
        data-category-id="DIC_kwDONLmbxc4Ckfr9"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="noborder_light"
        data-lang="en"
        data-loading="lazy"
        crossOrigin="anonymous"
        async
      ></Script>
    </div>
  );
}
