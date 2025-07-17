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
        return postData >= twoDayDate && post.favoriteCount >= 5; 
    })

    console.log( twoDayDate)
    return <div>
        <PostSlider 
            posts={trendyPosts} 
            titleBlock={titleBlock}
            postCardStyle="flex overflow-x-auto no-scrollbar 2xl:gap-0 phone:gap-5"
            postItemStyle="flex flex-col flex-shrink-0 w-full phone:w-[358px] "
            postImageStyle="w-full"
            rightControl={<ButtonSwitch/>}
         />
    </div>
}