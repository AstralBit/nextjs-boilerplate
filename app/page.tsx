import Image from "next/image";

export default function Page() {
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
      <div className="prose prose-neutral dark:prose-invert">
        <p>代码再多，也要留点时间给诗和远方。</p>
        <p>希望在这片小小的博客空间里，能找到同样热爱自由、享受浪漫的你们。</p>
      </div>
    </section>
  );
}
