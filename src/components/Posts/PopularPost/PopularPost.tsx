import { usePost } from "../../../Hooks/usePost"
import { PostSlider } from "../../PostSlider/PostSlider"


export const PopularPost = () => {
    const { posts } = usePost();
    const titleBlock = "Популярные посты"
    return <div>
        <PostSlider posts={posts} titleBlock={titleBlock} />
    </div>
}