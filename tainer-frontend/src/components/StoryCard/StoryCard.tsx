'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function StoryCard ({title, textContent, imgSrc}: {title: string, textContent: string, imgSrc: string}) {

    return (
        <Card sx={{ maxWidth: 345, minHeight: 350 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={imgSrc}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {textContent}
                </Typography>
            </CardContent>
        </Card>
    );
}