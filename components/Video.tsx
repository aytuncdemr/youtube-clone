"use client";

import Image from "next/image";
import Link from "next/link";

export default function Video({ video }: { video: Video }) {
  const decodedTitle = { __html: video.title };

  return (
    <div>
      <Link
        className="video relative  h-[18rem] group cursor-pointer overflow-hidden"
        href={`/video/${video.id}`}
      >
        <Image
          src={video.thumbnail}
          alt={`${video.title}`}
          width={320}
          height={180}
          className="w-full h-[12rem] rounded-lg group-hover:brightness-75 duration-300"
        />

        <p
          className="py-4 text-lg px-2 text-gray-200 group-hover:text-red-500 duration-150"
          dangerouslySetInnerHTML={decodedTitle}
        ></p>
      </Link>
    </div>
  );
}
