import {Grid} from "@mui/material";
import StoryCard from "@/components/StoryCard/StoryCard";
import {stories} from "../../../public/staticFiles/stories";

export default function StoryTime () {
    return (
        <div>
            <h1>Krasse Storys aus Robos Leben</h1>
            <Grid container spacing={2}>
                {stories.map((story, index) => {
                    return (
                        <Grid item xs={12} sm={6} key={`story-${index}`}>
                            <StoryCard title={story.title} textContent={story.textContent} imgSrc={story.imgSrc}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
