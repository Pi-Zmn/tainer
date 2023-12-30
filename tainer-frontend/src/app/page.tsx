import Image from 'next/image'
import styles from './page.module.css'
import TemporaryDrawer from "@/components/Header/Drawer";
import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer";

export default function Home() {
    const videoID: string = 'voKKXysVIlQ';
  return (
    <div>
      <YouTubePlayer videoId={videoID} />
    </div>
  )
}
