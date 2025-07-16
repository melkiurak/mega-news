import { usePost } from "../../../Hooks/usePost"
import { ButtonShowAll } from "../../buttonShowAll/buttonShowAll";
import { PostSlider } from "../../PostSlider/PostSlider"


export const NewPost = () => {
    const { posts } = usePost();
    const titleBlock = "New Posts";

    const nowDate = new Date();
    const weekendDate = new Date();
    weekendDate.setDate(nowDate.getDate() - 7)

    const newPost = posts.filter(post => {
        const postDate = new Date(post.date)
        return postDate >= weekendDate && postDate <= nowDate;
    });
    return <div>
        <PostSlider posts={newPost} titleBlock={titleBlock} postCardStyle="grid grid-cols-2" postItemStyle="flex" rightControl={<ButtonShowAll/>} />
    </div>
}