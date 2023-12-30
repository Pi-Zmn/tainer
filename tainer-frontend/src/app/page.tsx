import Image from 'next/image'
import styles from './page.module.css'
import TemporaryDrawer from "@/components/Header/Drawer";
import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer";

export default function Home() {

  return (
    <div>
      <YouTubePlayer />
    </div>
  )
}
