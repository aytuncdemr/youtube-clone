import Videos from "./Videos";

export default function SearchVideos({
  searchQuery,
  videos,
}: {
  searchQuery: string;
  videos: Video[];
}) {
  return (
    <section className="search-videos px-4">
      <header className="text-3xl font-semibold flex items-center gap-2 mb-12 text-white">
        <h2>
          Search results for{" "}
          <span className="text-red-600 font-semibold">{searchQuery}</span>
        </h2>
      </header>
      {videos && <Videos videos={videos}></Videos>}
    </section>
  );
}
