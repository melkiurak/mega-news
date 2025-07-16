import rectangle from '@icons/rectangle.png'
import { ButtonSwitch } from '../buttonSwitch/ButtonSwitch'
import type { Post } from '../../types'
import { CiBookmark } from "react-icons/ci";

interface PostSliderProps {
  posts: Post[];
  titleBlock: string,
}


export const  PostSlider = ({posts, titleBlock}:PostSliderProps) => {
    return <div>
        <div className="flex flex-col gap-5">
            <div className='flex  justify-between w-full relative'>
                <div className='flex items-center gap-2 flex-1'> 
                    <img src={rectangle} alt="" />
                    <h4 className='text-black text-h4'>{titleBlock}</h4>
                </div>
                <div className='w-[100px]'>
                    <ButtonSwitch/>
                </div>
            </div>
            {posts.map((post, index) => (
                <div className='flex flex-col gap-4 max-w-[338px] phone:max-w-[350px] lg:max-w-[340px] w-full' key={index}>
                    <div className='bg-purple-700 w-full rounded-xl h-[186px]'></div>
                    <h5 className='text-h5  text-[#3E3232] px-1.5'>{post.title}</h5>
                    <p className='px-1.5 paragraph text-[#3E3232]/75'>{post.explanation}</p>
                    <div className='flex  items-center bg-[#F5F5F5] rounded-xl px-3.5 py-4'>
                        <div className='flex gap-2.5 items-center flex-1' >
                            <div className='bg-purple-500 w-11 h-11 rounded-xl'></div>
                            <div>
                                <p className='text-[#3E3232]/75 font-roboto text-xs'>{new Date(post.date).toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: '2-digit',
                                    year: 'numeric'
                                })}</p>
                            </div>
                        </div>
                        <button className='text-[#3E3232]/50 text-xl'>
                            <CiBookmark/>
                        </button>
                    </div>
                </div>
            ))}
         </div>
    </div> 
}