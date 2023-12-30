import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer";

export default function Home() {
    const videoID: string = '8TxSgMUMIP4';
  return (
    <div>
        <h1>Willkommen bei Kotzenplotz!</h1>
      <YouTubePlayer videoId={videoID} />
    </div>
  )
}
