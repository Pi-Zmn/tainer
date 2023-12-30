'use client'

import React, { Component, RefObject } from 'react';
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

        const opts: YouTubeProps['opts'] = {
            maxHeight: '1000',
            width: '100%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return (
            <YouTube
                opts={opts}
                videoId={videoId}
                onReady={this.onReady}
                ref={this.playerRef}
            />
        );
    }
}
