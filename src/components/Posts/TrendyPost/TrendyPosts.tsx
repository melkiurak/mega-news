import { usePost } from "../../../Hooks/usePost";
import { ButtonSwitch } from "../../buttonSwitch/ButtonSwitch";
import { PostSlider } from "../../PostSlider/PostSlider"
export const TrendyPosts = () => {
    const { posts } = usePost();
    const titleBlock = 'Trendy Post';
    const nowDate = new Date();
    const twoDayDate = new Date();
    twoDayDate.setDate(nowDate.getDate() - 2);

    const trendyPosts = posts.filter(post => {
        const postData = new Date(post.date)
        return postData >= twoDayDate && post.favoriteCount == 10; 
    })

    console.log( twoDayDate)
    return <div>
        <PostSlider 
            posts={trendyPosts} 
            titleBlock={titleBlock}
            postCardStyle=""
            postItemStyle=""
            postImageStyle=""
            rightControl={<ButtonSwitch/>}
         />
    </div>
}