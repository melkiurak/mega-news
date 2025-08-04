import { ButtonSwitch } from "@components/buttonSwitch/ButtonSwitch";
import { PostSlider } from "@components/PostSlider/PostSlider"
import { postSliderStyles } from "@styles/postSlider";
import { useContext, useMemo } from "react";
import { PostContext } from "@page/Home/Home";


export const PopularPost = () => {
    const  posts  = useContext(PostContext);
    const titleBlock = "Popular posts";
    const popularPost = useMemo(() => posts.filter((post) => post.favoriteCount >= 5), [posts]);
    return <div>
        <PostSlider 
            posts={popularPost} 
            titleBlock={titleBlock} 
            postCardStyle={postSliderStyles.card}
            postItemStyle={postSliderStyles.item}
            postImageStyle={postSliderStyles.image}
            postDetailsStyle=""
            rightControl={<ButtonSwitch/>}  
         />
    </div>
}