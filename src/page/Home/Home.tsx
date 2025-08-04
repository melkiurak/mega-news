import {TagsView} from '@components/TagsView/TagsView'
import { PopularPost } from '@components/Posts/PopularPost/PopularPost'
import { NewPost } from '@components/Posts/NewPost/NewPost'
import { TrendyPosts } from '@components/Posts/TrendyPost/TrendyPosts'
import { TopPost } from '@components/Posts/TopPost/TopPost'
import { createContext, useEffect, useState } from 'react'
import { Loading } from '@components/loading/loading'
import { usePost } from '@hooks/usePost'
import type { Post } from 'src/types'

export const PostContext = createContext<Post[]>([]);

export  const Home = () => {
    const [loading, setLoading] = useState(true);

    const {posts} = usePost();
    useEffect(() => {
        const timer = setTimeout(() => {
           setLoading(false) 
        }, 100);
        return () => clearTimeout(timer);
    }, [])

  if (loading) {
    return <Loading />;
  }
    return <PostContext.Provider value={posts}>
      <div className='w-full flex flex-col gap-10 phone:gap-[50px] lg:gap-[70px]'>
        {loading && <Loading/>}
        <TagsView/>
        <PopularPost />
        <NewPost/>
        <TrendyPosts/>
        <TopPost/>
      </div>
    </PostContext.Provider>
}