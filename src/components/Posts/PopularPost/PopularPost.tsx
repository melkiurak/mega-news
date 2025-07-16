import { usePost } from "../../../Hooks/usePost"
import { ButtonSwitch } from "@components/buttonSwitch/ButtonSwitch";
import { PostSlider } from "../../PostSlider/PostSlider"


export const PopularPost = () => {
    const { posts } = usePost();
    const titleBlock = "Popular posts";
    const popularPost = posts.filter(post => post.favoriteCount >= 5);
    return <div>
        <PostSlider 
            posts={popularPost} 
            titleBlock={titleBlock} 
            postCardStyle="flex overflow-x-auto no-scrollbar"
            postItemStyle="flex flex-col flex-shrink-0 w-full phone:w-[370px]"
            rightControl={<ButtonSwitch/>}  
         />
    </div>
}