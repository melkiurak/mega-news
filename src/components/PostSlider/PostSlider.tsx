import rectangle from '@icons/rectangle.png'
import { ButtonSwitch } from '../buttonSwitch/ButtonSwitch'
import type { Post } from '../../types'
import { CiBookmark } from "react-icons/ci";

interface PostSliderProps {
  posts: Post[];
  titleBlock: string,
  postCardStyle:string,
  postItemStyle:string,
  rightControl: React.ReactNode
}


export const  PostSlider = ({posts, titleBlock, postCardStyle, postItemStyle,rightControl}:PostSliderProps) => {
    return <div>
        <div className="flex flex-col gap-5">
            <div className='flex justify-between w-full relative'>
                <div className='flex items-center gap-2 flex-1'> 
                    <img src={rectangle} alt="" />
                    <h4 className='text-black text-h4'>{titleBlock}</h4>
                </div>
                <div className='w-[120px]'>
                    {rightControl}
                </div>
            </div>
            <div className={`${postCardStyle} gap-6`}>
                {posts.map((post, index) => (
                    <div className={`${postItemStyle} gap-3 w-full shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-xl p-2.5 h-full`} key={index}>
                        <div className=' rounded-xl h-[190px] bg-center bg-cover bg-no-repeat w-full' style={{backgroundImage: `url(${post?.imagePost})`}}></div>
                        <div className='flex flex-col gap-4  flex-1/1'>
                            <h5 className='text-h5  text-[#3E3232] px-1.5'>{post.title}</h5>
                            <p className='px-1.5 paragraph text-[#3E3232]/75'>{post.explanation}</p>
                            <div className='flex  items-center bg-[#F5F5F5] rounded-xl px-3.5 py-4'>
                                <div className='flex gap-2.5 items-center flex-1' >
                                    <div className='bg-purple-500 w-11 h-11 rounded-xl'></div>
                                    <div>
                                        <p>{post.user.username}</p>
                                        <p className='text-[#3E3232]/75 font-roboto text-xs'>{new Date(post.date).toLocaleDateString('en-US', {
                                            day: 'numeric',
                                            month: "long",
                                            year: 'numeric'
                                        })}</p>
                                    </div>
                                </div>
                                <button className='text-[#3E3232]/50 text-xl'>
                                    <CiBookmark/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
    </div> 
}