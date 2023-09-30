import Video from "./Video";

export default function Videos({ videos }: { videos: Video[] }) {
  return (
    <div className="videos">
      <ul className="videos-list grid grid-cols-5 gap-4">
        {videos.map((video: Video, index) => {
          return (
            <li key={index}>
              <Video video={video}></Video>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

