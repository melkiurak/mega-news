import { useParams } from "react-router"
import { usePost } from "@hooks/usePost";
import { FaRegCalendar } from "react-icons/fa";
import { CiFolderOn, CiBookmark} from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoMdPaperPlane } from "react-icons/io";
import { LuPlus } from "react-icons/lu"
export const PostId = () => {
    const { posts } = usePost();
    const { postId } = useParams();
    return <div>
       <div>{posts.filter((post) => post.objectId == postId).map((post,index) => post && (
            <div key={index}>
                <div>
                    <h1>{post.title}</h1>
                    <div style={{backgroundImage:`url(${post.imagePost})`}}></div>
                </div>
                <div>
                    <div>
                        <FaRegCalendar/>
                        <span>{new Date(post.date).toLocaleDateString('',{
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </span>
                    </div>
                    <div>
                        <FaRegCommentDots/>
                        <span>30
                        </span>
                    </div>
                    <div>
                        <CiFolderOn/>
                        <span>{post.tags.map(tag => tag.name)}</span>
                    </div>
                </div>
                <div>
                    <p>{post.explanation}</p>
                </div>
                <div>
                    <div>
                        <div>
                            <h4 className="text-h4">Tags</h4>
                        </div>
                        <nav>
                            <ul>{post.tags.map((tag, index) => (
                                <li key={index}>{tag.name}</li>
                            ))}</ul>
                        </nav>

                    </div>
                    <div>
                        <button>
                            <IoMdPaperPlane/>
                            <span>Share</span>
                        </button>
                        <button>
                            <CiBookmark/>
                            <span>Marking</span>
                        </button>
                        <button>
                            <FaRegCommentDots/>
                            <span>Comment</span>
                        </button>
                    </div>
                    <div>
                        <div className="bg-pink-600 rounded-xl"></div>
                        <div>
                            <h5>{post.user.username}</h5>
                            <button>
                                <LuPlus/>
                                <span>Follow</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
       </div>
    </div>
}