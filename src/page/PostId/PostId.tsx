import { useParams } from "react-router"
import { usePost } from "@hooks/usePost";
import { FaRegCalendar } from "react-icons/fa";
import { CiFolderOn, CiBookmark} from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoMdPaperPlane } from "react-icons/io";
import { LuPlus } from "react-icons/lu"
import rectangle from '@icons/rectangle.png'
export const PostId = () => {
    const { posts } = usePost();
    const { postId } = useParams();
    return <div>
       <div>{posts.filter((post) => post.objectId == postId).map((post,index) => post && (
            <div key={index} className="flex flex-col lg:flex-row gap-8 md:gap-5 md:items-start">
                <div className="flex flex-col gap-8 md:flex-1">
                    <div>
                        <h1 className="font-roboto text-xl font-medium text-black md:text-4xl md:font-normal pb-5">{post.title}</h1>
                        <div className="rounded-xl h-[198px] phone:h-[336px] w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${post.imagePost})`}}></div>
                    </div>
                    <div className="flex justify-between phone:justify-evenly items-center self-center max-w-[516px] w-full">
                        <div className="post-meta-item">
                            <FaRegCalendar className="text-[#3E3232]/50"/>
                            <span className="text-[#3E3232]/75">{new Date(post.date).toLocaleDateString('en-US',{
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </span>
                        </div>
                        <div className="post-meta-item">
                            <FaRegCommentDots className="text-[#3E3232]/50"/>
                            <span className="text-[#3E3232]/75">30
                            </span>
                        </div>
                        <div className="post-meta-item">
                            <CiFolderOn className="text-[#3E3232]/50 text-base"/>
                            <span className="text-[#3E3232]/75">{post.tags[0].name}</span>
                        </div>
                    </div>
                    <div>
                        <p className="paragraph text-[#3E3232]">{post.explanation}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 sm:flex-row lg:flex-col justify-between lg:justify-self-auto">
                    <div className="px-[0.9375rem] py-5 bg-[#F5F5F5] rounded-xl phone:order-2 flex-1/2 md:flex-auto">
                        <div className="flex items-center gap-1.5">
                            <img className="w-1 h-2.5" src={rectangle} alt="" />
                            <h4 className="text-h4">Tags</h4>
                        </div>
                        <nav className="pt-5"> 
                            <ul className="flex flex-wrap gap-3.5">
                                {post.tags.map((tag, index) => (
                                    <li key={index} className="text-h6 text-[#3E3232]/75">{tag.name}</li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-col justify-center md:justify-start gap-5 phone:order-1 flex-1/1 md:flex-auto">
                        <div className="h-10 flex justify-between gap-2 phone:max-w-[370px] w-full">
                            <button className="button-light text-base">
                                <IoMdPaperPlane className="text-[#3E3232]/50"/>
                                <span className="text-btn text-[#3E3232]/75">Share</span>
                            </button>
                            <button className="button-light text-base">
                                <CiBookmark className="text-[#3E3232]/50"/>
                                <span className="text-btn text-[#3E3232]/75">Marking</span>
                            </button>
                            <button className="button-light text-base ">
                                <FaRegCommentDots className="text-[#3E3232]/50"/>
                                <span className="text-btn text-[#3E3232]/75">Comment</span>
                            </button>
                        </div>
                        <div className="bg-Gray rounded-xl p-[15px] flex items-center gap-2.5 relative">
                            <div className="bg-pink-600 rounded-xl max-w-[87px] w-full aspect-square"></div>
                            <div className="flex flex-col gap-2">
                                <h5 className="text-h5 text-Black">{post.user.username}</h5>
                                <button className="button-primary text-btn h-10">
                                    <LuPlus/>
                                    <span>Follow</span>
                                </button>
                            </div>
                            <p className="text-Input text-Black/75 absolute right-2 top-6">27 post</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
       </div>
    </div>
}