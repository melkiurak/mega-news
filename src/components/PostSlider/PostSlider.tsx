import rectangle from '@icons/rectangle.png'
import type { Post } from '../../types'
import { CiBookmark } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

interface PostSliderProps {
  posts: Post[];
  titleBlock: string,
  postCardStyle:string,
  postItemStyle:string,
  postImageStyle: string,
  postDetailsStyle:string,
  rightControl: React.ReactNode
}


export const  PostSlider = ({posts, titleBlock, postCardStyle, postItemStyle, rightControl, postImageStyle, postDetailsStyle}:PostSliderProps) => {
    const [slider, setSlider] = useState(0)
    const [visibleSlides, setVisibleSlides] = useState(4);

    const navigate = useNavigate();

    const handlePage = (objectId: string) => {
        navigate(`/Post/${objectId}`)
    }

    useEffect(() => {
        const updateSlise = () => {
            if(window.outerWidth <= 425){
                setVisibleSlides(1)
            } else{
                setVisibleSlides(4);
            }
        }
        updateSlise();
        window.addEventListener('resize', updateSlise)
    }, []);
    return <div>
        <div className="flex flex-col gap-5" >
            <div className='flex justify-between w-full relative'>
                <div className='flex items-center gap-2 flex-1'> 
                    <img src={rectangle} alt="" />
                    <h4 className='text-black text-h4'>{titleBlock}</h4>
                </div>
                <div className='w-[120px]'>
                    {rightControl}
                </div>
            </div>
            <div className={`${postCardStyle} items-stretch justify-center phone:justify-between overflow-hidden rounded-xl p-5 -m-5 cursor-pointer`}>
                {posts.slice(slider, slider + visibleSlides).map((post, index) => (
                    <div className={`${postItemStyle} gap-3 rounded-xl h-full p-2.5 shadow-[5px_0_20px_rgba(0,0,0,0.1),-5px_0_20px_rgba(0,0,0,0.1)] `} onClick={() => handlePage(post.objectId)} key={index}>
                        <div className={`rounded-xl min-h-[190px] bg-center  bg-cover bg-no-repeat ${postImageStyle}`} style={{backgroundImage: `url(${post?.imagePost})`}}></div>
                        <div className={`flex justify-between flex-col gap-4 phone:flex-1/2 md:flex-1/1 ${postDetailsStyle}`}>
                            <h5 className='text-h5  text-[#3E3232] px-1.5 line-clamp-1'>{post.title}</h5>
                            <p className='px-1.5 paragraph text-[#3E3232]/75 line-clamp-2'>{post.explanation}</p>
                            <div className='flex items-center bg-[#F5F5F5] rounded-xl px-3.5 py-3.5'>
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