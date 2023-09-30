"use client";

import Link from "next/link";
import ReactPlayer from "react-player";
import Comments from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";


export default function VideoPlayer({ videoData }: { videoData: Video }) {
  return (
    <div className="video-player-container  flex flex-col gap-6 px-16">
      <div className="video-player relative">
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${videoData.id}`}
          width={"100%"}
          height={"480px"}
          style={{ position: "relative" }}
        />
      </div>

      <div className="video-information text-white">
        <h3 className="text-white font-semibold text-2xl">{videoData.title}</h3>

        <div className="video-detail flex justify-between py-4 text-lg">
          <div
            className="channel-info"
          >
            <p className="text">{videoData.channelName}</p>
          </div>
          <p>{videoData.publishedAt}</p>
        </div>
        <div className="video-description mt-4 h-[4.2rem] overflow-hidden">
          <p>{videoData.description}</p>
        </div>
      </div>

      <Comments></Comments>
    </div>
  );
}
