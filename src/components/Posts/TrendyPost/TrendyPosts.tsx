import { usePost } from "@hooks/usePost";
import { postSliderStyles } from "@styles/postSlider";
import { ButtonSwitch } from "@components/buttonSwitch/ButtonSwitch";
import { PostSlider } from "@components/PostSlider/PostSlider"
export const TrendyPosts = () => {
    const { posts } = usePost();
    const titleBlock = 'Trendy Post';
    const nowDate = new Date();
    const twoDayDate = new Date();
    twoDayDate.setDate(nowDate.getDate() - 2);

    const trendyPosts = posts.filter(post => {
        const postData = new Date(post.date)
        return postData >= twoDayDate && post.favoriteCount >= 5; 
    })

    console.log( twoDayDate)
    return <div>
        <PostSlider 
            posts={trendyPosts} 
            titleBlock={titleBlock}
            postCardStyle={postSliderStyles.card}
            postItemStyle={postSliderStyles.item}
            postImageStyle={postSliderStyles.image}
            rightControl={<ButtonSwitch/>}
         />
    </div>
}