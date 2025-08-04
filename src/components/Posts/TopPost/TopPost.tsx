import { postSliderStyles } from "@styles/postSlider";
import { ButtonSwitch } from "@components/buttonSwitch/ButtonSwitch";
import { PostSlider } from "@components/PostSlider/PostSlider"
import { useContext, useMemo } from "react";
import { PostContext } from "@page/Home/Home";

export const TopPost = () => {
    const  posts  = useContext(PostContext);
    const titleBlock = 'Top Post'
    const topPost = useMemo(() => posts.filter(post => post.favoriteCount >= 50), [posts]);
    return <div>
        <PostSlider 
            posts={topPost}  
            titleBlock={titleBlock}
            postCardStyle={postSliderStyles.card}
            postItemStyle={postSliderStyles.item}
            postImageStyle={postSliderStyles.image}
            postDetailsStyle=""
            rightControl={<ButtonSwitch/>}  
        />
    </div>
}