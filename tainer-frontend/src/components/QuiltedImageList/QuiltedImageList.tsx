import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList() {
    return (
        <ImageList
            sx={{ width: '100%', height: 'auto' }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: '/images/robo/robo-jana.png',
        title: 'robo-jana',
        rows: 2,
        cols: 2,
    },
    {
        img: '/images/robo/robo-pimple.jpeg',
        title: 'robo-pimple',
    },
    {
        img: '/images/robo/robo-cap.jpeg',
        title: 'Camera',
    },
    {
        img: '/images/robo/robo-closed-eyes.jpeg',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: '/images/robo/robo-domi.jpeg',
        title: 'Hats',
        cols: 2,
    },
    {
        img: '/images/robo/robo-guez-jash.jpeg',
        title: 'Honey',
        rows: 2,
        cols: 2,
    },
    {
        img: '/images/robo/robo-idea.jpeg',
        title: 'Basketball',
    },
    {
        img: '/images/robo/robo-jana2.jpeg',
        title: 'Fern',
    },
    {
        img: '/images/robo/robo-lele.jpeg',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: '/images/robo/robo-lele2.jpeg',
        title: 'Tomato basil',
    },
    {
        img: '/images/robo/robo-lele3.jpeg',
        title: 'Sea star',
    },
    {
        img: '/images/robo/robo-marko.jpeg',
        title: 'Bike',
        cols: 2,
    },
    {
        img: '/images/robo/robo-nerd.jpeg',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: '/images/robo/robo-shot.jpeg',
        title: 'Tomato basil',
    },
    {
        img: '/images/robo/robo-sindy.jpeg',
        title: 'Sea star',
    },
    {
        img: '/images/robo/robo-smoky.jpeg',
        title: 'Bike',
        cols: 2,
    },
    {
        img: '/images/robo/robo-streleon.jpeg',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: '/images/robo/robo-suit.jpeg',
        title: 'Tomato basil',
    },
    {
        img: '/images/robo/robo-tainer.jpeg',
        title: 'Sea star',
    },
    {
        img: '/images/robo/robo-teeth.jpeg',
        title: 'Bike',
        cols: 2,
    },
    {
        img: '/images/robo/robo-tung.jpeg',
        title: 'Sea star',
    },
    {
        img: '/images/robo/robo-what.jpeg',
        title: 'Bike',
        cols: 2,
    },
];