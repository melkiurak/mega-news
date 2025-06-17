import rectangle from '@icons/rectangle.png'
import { ButtonSwitch } from '../buttonSwitch/ButtonSwitch'
import type { Post } from '../../types'

interface PostSliderProps {
  post: Post;
}


export const PostSlider = ({post}:PostSliderProps) => {
    return <div className="flex flex-col gap-5">
        <div className='flex justify-between w-full'>
            <div className='flex items-center gap-2'> 
                <img src={rectangle} alt="" />
                <h4>{post.title}</h4>
            </div>
            <ButtonSwitch/>
        </div>
        <div className='flex flex-col'>
            <div></div>
            <h5>{post.titlePosts}</h5>
            <p>{post.description}</p>
            <div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <button></button>
            </div>
        </div>
    </div>
}