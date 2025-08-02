import { usePost } from "@hooks/usePost";
import { postSliderStyles } from "@styles/postSlider";
import { ButtonSwitch } from "@components/buttonSwitch/ButtonSwitch";
import { PostSlider } from "@components/PostSlider/PostSlider"
import { useMemo } from "react";

export const TopPost = () => {
    const {posts} = usePost();
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