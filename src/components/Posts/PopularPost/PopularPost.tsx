import { PostSlider } from "../../PostSlider/PostSlider"
import imgPost from '@img/Posts/05.png'


export const PopularPost = () => {
    const postPopular = {
        
        title: 'Popular Posts',
        titlePosts: 'My first day',
        imgPost: imgPost,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        name: 'Danila',
        date: 'July 14 , 2022',
    }
    return <div>
        <PostSlider post={postPopular} />
    </div>
}