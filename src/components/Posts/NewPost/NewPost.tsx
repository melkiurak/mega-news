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
        <PostSlider 
            posts={newPost} 
            titleBlock={titleBlock} 
            postCardStyle="flex phone:flex-col lg:grid lg:grid-cols-2 overflow-x-auto no-scrollbar" 
            postItemStyle="flex flex-col phone:flex-row" 
            rightControl={<ButtonShowAll/>} 
        />
    </div>
}