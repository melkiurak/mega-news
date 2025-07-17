import { useEffect, useState } from "react";
import { usePost } from "@hooks/usePost";
import { ButtonSwitch } from "@components/buttonSwitch/ButtonSwitch";
import { PostSlider } from "@components/PostSlider/PostSlider"
import { ButtonShowAll } from "@components/buttonShowAll/buttonShowAll"


export const NewPost = () => {
    const { posts } = usePost();
    const [isMobile, setIsMobile] = useState(false);
    const titleBlock = "New Posts";

    const nowDate = new Date();
    const weekendDate = new Date();
    weekendDate.setDate(nowDate.getDate() - 7)

    const newPost = posts.filter(post => {
        const postDate = new Date(post.date)
        return postDate >= weekendDate && postDate <= nowDate;
    });
    useEffect(() => {
        setIsMobile(window.innerWidth  <= 425)
    },[])

    return <div>
        <PostSlider 
            posts={newPost} 
            titleBlock={titleBlock} 
            postCardStyle="flex phone:flex-col lg:grid lg:grid-cols-2 overflow-auto no-scrollbar gap-6" 
            postItemStyle="flex flex-col phone:flex-row w-full"
            postImageStyle="lg:w-full phone:w-[190px]" 
            postDetailsStyle="pt-3"
            rightControl={isMobile ? <ButtonSwitch/> :  <ButtonShowAll/>} 
        />
    </div>
}