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
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        你好，欢迎来到我的博客！
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>始终相信，代码可以理性，但生活需要感性。</p>
        <p>
          在这里，我会分享一些技术心得，也会聊聊生活中那些编程之外的时刻。希望在这片小小的博客空间里，能找到同样热爱自由、享受浪漫的你们。
          人生旅途漫长，代码之外，愿我们都能拥有属于自己的诗和远方。
        </p>
        <p>
          骑上车，或者翻几页喜欢的书，看一部经典老电影。人生苦短，代码再多，也要留点时间给诗和远方。
          希望在未来的旅程中，能遇见有趣的伙伴，一起探索，分享美好。
        </p>
      </div>
    </section>
  );
}
