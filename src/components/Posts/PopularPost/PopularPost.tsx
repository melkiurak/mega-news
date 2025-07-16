import { usePost } from "../../../Hooks/usePost"
import { PostSlider } from "../../PostSlider/PostSlider"


export const PopularPost = () => {
    const { posts } = usePost();
    const titleBlock = "Popular posts";
    const popularPost = posts.filter(post => post.favoriteCount >= 5);
    return <div>
        <PostSlider posts={popularPost} titleBlock={titleBlock} postCardStyle="flex justify-between" postItemStyle="flex flex-col"  />
    </div>
}