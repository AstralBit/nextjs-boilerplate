import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "@/src/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      {/* <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Roman columns",
            href: "https://unsplash.com/photos/people-walking-near-building-during-daytime-dFLBDQQeffU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
        ]}
      /> */}

      <ImageGrid
        columns={3}
        images={[
          { src: "/photos/p1.jpeg", alt: "error" },
          { src: "/photos/p2.jpeg", alt: "error" },
          { src: "/photos/p3.jpeg", alt: "error" },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/p4.jpeg", alt: "error" },
          { src: "/photos/p5.jpeg", alt: "error" },
          { src: "/photos/p6.jpeg", alt: "error" },
          { src: "/photos/p7.jpeg", alt: "error" },
        ]}
      />

      <ImageGrid
        columns={3}
        images={[
          { src: "/photos/p8.jpeg", alt: "error" },
          { src: "/photos/p9.jpeg", alt: "error" },
          { src: "/photos/p10.jpeg", alt: "error" },
          { src: "/photos/p11.jpeg", alt: "error" },
          { src: "/photos/p12.jpeg", alt: "error" },
          { src: "/photos/p13.jpeg", alt: "error" },
          { src: "/photos/p14.jpeg", alt: "error" },
          { src: "/photos/p15.jpeg", alt: "error" },
        ]}
      />
    </section>
  );
}
