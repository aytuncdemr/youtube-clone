import FeedBar from "./FeedBar";
import FeedVideos from "./FeedVideos";

import SelectedCategoryContextProvider from "@/contexts/SelectedCategoryContextProvider";

export default function Feed() {
  return (
    <main className="grid grid-cols-[10fr,90fr] min-h-screen bg-black py-8">
      <SelectedCategoryContextProvider>
        <FeedBar></FeedBar>
        <FeedVideos></FeedVideos>
      </SelectedCategoryContextProvider>
    </main>
  );
}
