import { usePost } from "../../../Hooks/usePost"
import { ButtonSwitch } from "../../buttonSwitch/ButtonSwitch";
import { PostSlider } from "../../PostSlider/PostSlider"

export const TopPost = () => {
    const {posts} = usePost();
    const titleBlock = 'Top Post'
    const topPost = posts.filter(post => post.favoriteCount >= 50);
    return <div>
        <PostSlider 
            posts={topPost}  
            titleBlock={titleBlock}
            postCardStyle="flex overflow-x-auto no-scrollbar 2xl:gap-0 phone:gap-5 h-[385px] phone:h-[400px] lg:h-[429px]"
            postItemStyle="flex flex-col flex-shrink-0 w-full phone:w-[370px]"
            postImageStyle="w-full" 
            postDetailsStyle=""
            rightControl={<ButtonSwitch/>}  
        />
    </div>
}