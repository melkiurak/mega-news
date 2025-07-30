import { usePost } from "@hooks/usePost";
import { ButtonSwitch } from "@components/buttonSwitch/ButtonSwitch";
import { PostSlider } from "@components/PostSlider/PostSlider"
import { postSliderStyles } from "@styles/postSlider";


export const PopularPost = () => {
    const { posts } = usePost();
    const titleBlock = "Popular posts";
    const popularPost = posts.filter((post) => post.favoriteCount >= 5);
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