import React, {useState, type ChangeEvent } from "react";
import { AddImage } from "@components/addImage/AddImage";

import { IoMdPaperPlane, IoIosClose } from "react-icons/io";
import { FaPlus, FaRegFloppyDisk, FaRegEye } from "react-icons/fa6";

import useTags from "../../../hooks/useTags";
import { availableTags } from "../../../constants/tags";
import Parse  from "@lib/parseClient";
import { useSelector } from "react-redux";
import type { CreatePost } from "../../../types";
import type { storeType } from "../../../redux/store";
import { AddExplain } from "@components/addExplain/AddExplain";


const maxTags = 5

export const SendPost = () => {
    const [formPost, setFormPost] = useState<CreatePost>({
        date: '',
        user: [],
        title: '',
        tags: [],
        imagePost: null,
        explanation: [],
        favoriteCount: 0,
    });
    const [tagValue, setTagValue] = useState<string>("");
    const [imageValue, setImageValue] = useState<string | null>(null);
    const [showClueTag, setShowClueTag] = useState(false);
    const [errorValue, setErrorValue] = useState(false);
    const { tags, handleAddTag, handleRemoveTag, } = useTags(maxTags);

    const { user } = useSelector((state:storeType) => state.user);

    
    const AddTag = (tag?:string) => {
        const finalyTag = (tag ?? tagValue).trim() 
        if(tagValue.trim() !== "" && tags.length < maxTags && availableTags.includes(finalyTag) ){
            handleAddTag(finalyTag);
            setFormPost(prev => ({
                ...prev, tags:[...prev.tags, {name: finalyTag, image: null}]
            }))
            setTagValue("");
            setShowClueTag(false);
            setErrorValue(false);
        } else{
            setErrorValue(true);
        }
    };
    const handleTagChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTagValue(e.target.value);
        setShowClueTag(e.target.value.length > 0);
        setErrorValue(false);
    };
    const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement>)  => {
        if(e.key === 'Enter'){
            e.preventDefault();
            AddTag();
        };
    };
    const handlePublickPost = async(e: React.FormEvent) => {
        e.preventDefault();

        const Post = Parse.Object.extend("Posts");
        const post = new Post();
        let parseFile;
        if(formPost.imagePost && formPost.imagePost.name ){
            parseFile  = new Parse.File(formPost.imagePost?.name, formPost.imagePost);
        } else {
            console.log('File not')
        }
        const date = new Date();

        post.set('title', formPost.title );
        post.set('explanation', formPost.explanation );
        post.set('imagePost', parseFile );
        post.set('tags', formPost.tags );
        post.set('user', user);
        post.set('date', date);
        post.set('favoriteCount', formPost.favoriteCount)
        try{
            const result = await post.save();
            console.log("Пост сохранён, id:", result.id);
        } catch(error){
            console.error("Error",  error)
        }
        console.log(formPost)
    };

    const suggestionsTags = availableTags.filter(tag => tag.toLowerCase().includes(tagValue.toLowerCase()) && !tags.includes(tag)).slice(0, 5);
    return <div>
        <form className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-6 flex-1">
                <div className="flex gap-6 flex-col lg:flex-row justify-between">
                    <div className="flex flex-col gap-[15px] flex-1">
                        <label htmlFor=""  className="text-h5">Title</label>
                        <div className="h-12">
                            <input type="text" value={formPost.title} onChange={(e) => setFormPost({...formPost, title:e.target.value})} className="h-full pl-4" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px] flex-1">
                        <label htmlFor=""  className="text-h5">Add Tags</label>
                        <div className="h-12 relative">
                            <input type="text" 
                                className={`h-full p-4 ${errorValue ? 'border-2 border-red-500' : 'border-none'}`} 
                                value={tagValue}
                                onKeyDown={handleKeyPress} 
                                onChange={handleTagChange} />
                                <div className="mt-2.5">
                                    {showClueTag && suggestionsTags.length > 0  && (
                                        <ul className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] p-3 flex flex-col gap-2 ">{suggestionsTags.map((suggest, index) => (
                                            <li key={index} onClick={() => {
                                                AddTag(suggest);
                                            }}>{suggest}</li>
                                        ))}</ul>
                                    )}
                                </div>
                                <span className={`text-red-500 text-input ${errorValue ? 'block' : 'hidden'}`}>Такого тегу немає</span>
                            <button type="button" className="bg-[#0000000C] text-[#3E3232] p-2 rounded-xl absolute right-1 top-1/2 -translate-y-1/2" onClick={() => AddTag()}><FaPlus className="text-2xl"/></button>
                        </div>
                        <div className={`flex-wrap gap-2 ${tags.length == 0 ? 'hidden' : 'flex'}`}>
                            {tags.map((tag, index) => (
                                <div key={index} className="rounded-xl px-3 py-1 bg-white border-2 border-[#E6E6E6] text-[#3E3232] flex items-center gap-2">
                                    <span className=" text-btn">{tag}</span>
                                    <button onClick={() => handleRemoveTag(tag)} type="button">
                                        <IoIosClose className="text-2xl"/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <AddExplain setForm={setFormPost} />
            </div>
            <div className="flex flex-col gap-[25px] lg:max-w-[360px] w-full">
                <AddImage title="Add Image" image={imageValue}  onImageChange={(file) => {setFormPost((prev) => ({ ...prev, imagePost: file })); setImageValue(URL.createObjectURL(file));}}/>
                <div className="flex justify-end">
                    <div className="flex justify-between gap-3 max-w-[280px] md:max-w-[360px] w-full">
                        <button className="flex-1 bg-[#F5F5F5] rounded-xl  flex items-center justify-center py-2 gap-2 text-[#3E3232BF]">
                            <FaRegFloppyDisk/>
                            <span className="text-btn">Draft</span>
                        </button>
                        <button className="flex-1 bg-[#F5F5F5] rounded-xl  flex items-center justify-center py-2 gap-2 text-[#3E3232BF]">
                            <FaRegEye/>
                            <span className="text-btn">Preview</span>
                        </button>
                        <button type="submit" onClick={handlePublickPost} className="flex-1 bg-[#F81539BF] rounded-xl flex items-center justify-center py-2 gap-2 text-white">
                            <IoMdPaperPlane/>
                            <span className="text-btn">Public</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
}