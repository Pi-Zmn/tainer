'use client'

import React, { useEffect, Component, RefObject } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface YouTubePlayerProps {
    videoId: string;
}

export default class YouTubePlayer extends Component<YouTubePlayerProps, any> {
    private playerRef: RefObject<YouTube> = React.createRef();

    // Event handler for when the video player is ready
    onReady(event: { target: any }) {
        // You can do additional actions when the video is ready
        event.target.playVideo();
    }


    render() {
        const { videoId } = this.props;

        return (
            <YouTube
                videoId={videoId}
                onReady={this.onReady}
                ref={this.playerRef}
            />
        );
    }
}
