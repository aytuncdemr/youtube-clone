import FeedBar from "@/components/FeedBar";
import RecommendedVideos from "@/components/RecommendedVideos";
import VideoPlayer from "@/components/VideoPlayer";
import fetchFromAPI from "@/utils/fetchFromAPI";
import convertDate from "@/utils/convertDate";

export default async function VideoPage({
  params,
}: {
  params: { id: string };
}) {

  const videoData:Video = {id:"null",channelId:"null",channelName:"null",thumbnail:"null",publishedAt:"null",title:"null",duration:"null",description:"null"}; 
  
  const fetchData = await fetchFromAPI(`videos?id=${params.id}`);
  
  videoData.id = fetchData.items[0].id;
  videoData.channelId = fetchData.items[0].snippet.channelId;
  videoData.channelName = fetchData.items[0].snippet.channelTitle;
  videoData.publishedAt = convertDate(fetchData.items[0].snippet.publishedAt);
  videoData.title = fetchData.items[0].snippet.title;
  videoData.duration = fetchData.items[0].contentDetails.duration;
  videoData.description = fetchData.items[0].snippet.description;

  return (
    <main className="grid grid-cols-[10fr,70fr,20fr] min-h-screen bg-black py-8">
      <FeedBar></FeedBar>
      <VideoPlayer videoData={videoData}></VideoPlayer>
      <RecommendedVideos id={videoData.id}></RecommendedVideos>
    </main>
  );
}
