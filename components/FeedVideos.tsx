"use client";

import SelectedCategoryContext from "@/contexts/SelectedCategoryContext";
import { useContext, useEffect, useState } from "react";
import Videos from "./Videos";
import fetchFromAPI from "../utils/fetchFromAPI";

export default function FeedVideos() {
  const selectedCategoryContext = useContext(SelectedCategoryContext);
  const selectedCategory = selectedCategoryContext?.category;

  const [videos, setVideos] = useState<Video[] | null>(null);

  useEffect(() => {
    (async function () {
      const videosData: any[] = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory?.name}`
      );
      setVideos(
        // @ts-ignore
        videosData.items.map((video: any) => {
          return {
            id: video.id.videoId,
            publishedAt: video.snippet.publishedAt,
            channelId: video.snippet.channelId,
            channelName: video.channelTitle,
            title: video.snippet.title,
            thumbnail: video.snippet.thumbnails.medium.url,
            duration:"null",
          };
        })
      );
    })();
  }, [selectedCategory?.name]);

  return (
    <section className="feed-videos-section text-white px-6">
      {selectedCategory && (
        <>
          <header className="feed-videos-top-text">
            <h2 className="text-3xl font-semibold flex items-center gap-2 mb-12">
              <span> {selectedCategory.name} videos</span>
              <span className="text-red-600">{selectedCategory.icon}</span>
            </h2>
          </header>
          {videos && <Videos videos={videos}></Videos>}
        </>
      )}
    </section>
  );
}
