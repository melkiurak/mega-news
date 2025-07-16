import {TagsView} from '@components/TagsView/TagsView'
import { PopularPost } from '@components/Posts/PopularPost/PopularPost'
import { NewPost } from '../../components/Posts/NewPost/NewPost'

export  const Home = () => {
    return <div className='w-full flex flex-col gap-10 phone:gap-[50px] lg:gap-[70px]'>
        <TagsView/>
        <PopularPost/>
        <NewPost/>
    </div>
}