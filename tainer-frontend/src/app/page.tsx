'use client'

import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";

import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer";
import styles from './page.module.css'

export default function Home() {
    const videoID: string = '8TxSgMUMIP4';
    const [showVideo, setShowVideo] = useState<boolean>(true);

    const toggleShowVideo = () => {
        setShowVideo(!showVideo);
    }

  return (
      showVideo ?
          <div>
              <h1>Willkommen bei Kotzenplotz!</h1>
              <YouTubePlayer videoId={videoID} />
          </div> :
          <div className={styles.buttonContainer}>
              <Button variant="outlined" onClick={toggleShowVideo}>Klick mich</Button>
          </div>
  )
}
