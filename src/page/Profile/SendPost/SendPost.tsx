import React, { useEffect, useRef, useState, type ChangeEvent } from "react";
import { BsCardImage } from "react-icons/bs";
import { IoMdColorFilter, IoMdPaperPlane, IoIosClose } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaAlignLeft, FaLink, FaPlus, FaRegFloppyDisk, FaRegEye } from "react-icons/fa6";
import type { CreatePost } from "../../../types";
import useTags from "../../../hooks/useTags";
import { availableTags } from "../../../constants/tags";
import Parse from "@lib/parseClient";
import { useSelector } from "react-redux";
import type { storeType } from "../../../redux/store";

const postTools = [
    {name: 'Image', icon:BsCardImage},
    {name: 'Color', icon:IoMdColorFilter},
    {name: 'Text', icon: FaCode},
    {name: 'Align', icon: FaAlignLeft},
    {name: 'Link', icon: FaLink},
];

const maxTags = 5

export const SendPost = () => {
    const [formPost, setFormPost] = useState<CreatePost>({
        date: '',
        user: [],
        title: '',
        tags: [],
        imagePost: null,
        explanation: '',
        favoriteCount: 0,
    });
    const [tagValue, setTagValue] = useState<string>("");
    const [imageValue, setImageValue] = useState<string | null>(null);
    const [showClueTag, setShowClueTag] = useState(false);
    const [errorValue, setErrorValue] = useState(false);
    const [explainColor, setExplainColor ] = useState('#000000');
    const [alignText, setAlignText] = useState('auto');
    const { tags, handleAddTag, handleRemoveTag, } = useTags(maxTags);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const explainImgRef = useRef<HTMLInputElement>(null);
    const explainColorRef = useRef<HTMLInputElement>(null);
    const explainRef = useRef<HTMLDivElement>(null);
    const { user } = useSelector((state:storeType) => state.user);

    const Explanation = document.getElementById('Explanation');
    
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
    const handleImageChange = (e:ChangeEvent<HTMLInputElement>, inputType?:string) => {
        const file = e.target.files?.[0];
        if(file && inputType === 'explain'){
            const imgExplanation = document.createElement('img');
            imgExplanation.className = "editor-img";
            imgExplanation.src = URL.createObjectURL(file);
            Explanation?.appendChild(imgExplanation);
        } else if (file  && inputType === 'main') {
            setFormPost(prev => ({...prev, imagePost: file}));
            setImageValue(URL.createObjectURL(file));
        }
    };
    const handleColorChange = () => {
       const color =  explainColorRef.current
       if(!color) return;
       setExplainColor(color.value);
       console.log(color.value)

    };
    const handleAlighText = () => {

    };
    const handlePublickPost = async(e: React.FormEvent) => {
        e.preventDefault();

        const Post = Parse.Object.extend("Posts");
        const post = new Post();
        const parseFile  = new Parse.File(formPost.imagePost?.name, formPost.imagePost);
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
    const handleTools = (toolName?:string,) => {
        if(toolName === 'Image'){
            explainImgRef.current?.click();
        } else if(toolName === 'Color'){
            explainColorRef.current?.click();
        } else if(toolName === 'Text'){
            const title = document.createElement('h4');
            title.className = 'text-h4';
            Explanation?.appendChild(title);
        }
        else{console.log('Это не выбор фота')}
    };

    useEffect(() => {
        if(explainRef.current)
        explainRef.current.innerHTML = formPost.explanation || '';
    },[]);
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
                <div className="flex flex-col gap-[15px]">
                    <label htmlFor="" className="text-h5">Explanation</label>
                    <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] px-3 py-5">
                        <div className="flex justify-between items-center lg:max-w-[500px] gap-5">
                            {postTools.map((tools, index) => (
                                <button key={index} className="bg-[#F5F5F5] rounded-xl py-2.5 flex items-center justify-center gap-2 flex-1" type="button" onClick={() => handleTools(tools.name)}>
                                    <span className="text-[#3E323280] text-base">{React.createElement(tools.icon)}</span>
                                    <span className="hidden md:block text-btn text-[#3E32324B]">{tools.name}</span>
                                </button>
                            ))}
                           <input type="file" ref={explainImgRef} className="hidden" onChange={(e) => handleImageChange(e, 'explain')} />
                           <input type="color" ref={explainColorRef} className="hidden" onChange={handleColorChange}/>
                        </div>
                        <div
                            id="Explanation"
                            dir="auto"
                            ref={explainRef}
                            className={`border-none bg-[#F5F5F5] p-5 rounded-xl w-full break-all h-[377px] resize-none outline-none mt-6 whitespace-pre-wrap overflow-auto wrap-break-word`}
                            style={{ color: explainColor }}
                            contentEditable={true}
                            onInput={() => {
                            if (explainRef.current) {
                                setFormPost((prev) => ({...prev,explanation: explainRef.current!.innerHTML,}));
                                }
                            }}
                        >
                        </div> 
                        
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[25px] lg:max-w-[360px] w-full">
                <div className="flex flex-col gap-[15px]">
                    <label htmlFor="">Add Image</label>
                    <div className="bg-[#F5F5F5] p-2.5 rounded-xl">
                        <div className={` border-dashed border-[#E1E1E1] ${imageValue ? 'border-none' : 'border-2'} rounded-xl h-[360px] md:h-[394px]`}>
                            {imageValue ? (
                                <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${imageValue})` }}></div>
                            ) : (
                                <div className="flex flex-col items-center gap-8 justify-center h-full">
                                    <BsCardImage className="w-[120px] h-[96px] text-[#3E323240] "/>
                                    <p className="text-Input text-[#3E3232BF]">Drop image here, paste or</p>
                                    <button type="button" className="flex items-center justify-center py-1 px-4 gap-2 text-[#3E323280] border-2 border-[#E6E6E6] rounded-xl" onClick={() => fileInputRef.current?.click()}>
                                        <FaPlus/>
                                        <span className="text-btn">Select</span>
                                    </button>
                                    <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => handleImageChange(e, 'main')} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
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