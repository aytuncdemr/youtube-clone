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
  
  videoData.id = fetchData?.items[0]?.id;
  videoData.channelId = fetchData?.items[0]?.snippet.channelId;
  videoData.channelName = fetchData?.items[0]?.snippet.channelTitle;
  videoData.publishedAt = convertDate(fetchData?.items[0]?.snippet.publishedAt);
  videoData.title = fetchData?.items[0]?.snippet.title;
  videoData.duration = fetchData?.items[0]?.contentDetails.duration;
  videoData.description = fetchData?.items[0]?.snippet.description;

  return (
    <main className="grid grid-cols-[70fr,20fr] max-xl:flex max-xl:flex-col min-h-screen bg-black py-8">
      
      <VideoPlayer videoData={videoData}></VideoPlayer>
      <RecommendedVideos id={videoData.id}></RecommendedVideos>
    </main>
  );
}
