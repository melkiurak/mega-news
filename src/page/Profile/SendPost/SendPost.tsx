import { BsCardImage } from "react-icons/bs";
import { IoMdColorFilter, IoMdPaperPlane, IoIosClose } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaAlignLeft, FaLink, FaPlus, FaRegFloppyDisk, FaRegEye } from "react-icons/fa6";
import React, {  useState, type ChangeEvent } from "react";
import type { CreatePost } from "../../../types";
import useTags from "../../../Hooks/useTags";
import { availableTags } from "../../../constants/tags";


export const SendPost = () => {
    const [formPost, setFormPost] = useState<CreatePost>({
        title: '',
        tags: [],
        imagePost: null,
        explanation: '',
    });
    const [tagValue, setTagValue] = useState<string>("");
    const [showClueTag, setShowClueTag] = useState(false);
    const postTools = [
        {name: 'Image', icon:BsCardImage},
        {name: 'Color', icon:IoMdColorFilter},
        {name: 'Text', icon: FaCode},
        {name: 'Align', icon: FaAlignLeft},
        {name: 'Link', icon: FaLink},
    ];
    const maxTags = 5
    const { tags, handleAddTag, handleRemoveTag, } = useTags(maxTags);
    
    const AddTag = (tag?:string) => {
        if(tagValue.trim() !== "" && tags.length < maxTags ){
            handleAddTag(tag ?? tagValue);
            setTagValue("");
            setShowClueTag(false);
        }
    }
    const handleTagChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTagValue(e.target.value);
        setShowClueTag(e.target.value.length > 0);
    };
    const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement>)  => {
        if(e.key === 'Enter'){
            e.preventDefault();
            AddTag();
        };
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
                                className="h-full p-4" 
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
                            <button type="button" className="bg-[#0000000C] text-[#3E3232] p-2 rounded-xl absolute right-1 top-1/2 -translate-y-1/2" onClick={() => AddTag()}><FaPlus className="text-2xl"/></button>
                        </div>
                        <div className={`flex-wrap gap-2 ${tags.length == 0 ? 'hidden' : 'flex'}`}>
                            {tags.map((tag, index) => (
                                <div className="rounded-xl px-3 py-1 bg-white border-2 border-[#E6E6E6] text-[#3E3232] flex items-center gap-2">
                                    <span key={index} className=" text-btn">{tag}</span>
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
                                <button key={index} className="bg-[#F5F5F5] rounded-xl px-4 py-2.5 flex items-center gap-2 flex-1">
                                    <span className="text-[#3E323280] text-base">{React.createElement(tools.icon)}</span>
                                    <span className="hidden md:block text-btn text-[#3E32324B]">{tools.name}</span>
                                </button>
                            ))}
                        </div>
                        <textarea
                            id="Explanation"
                            name="Explanation"
                            placeholder="Type..."
                            className="border-none bg-[#F5F5F5] p-5 rounded-xl w-full h-[377px] resize-none outline-none mt-6"
                            value={formPost.explanation}
                            onChange={(e) => setFormPost({...formPost, explanation:e.target.value})}
                        />                 
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[25px] lg:max-w-[360px] w-full">
                <div className="flex flex-col gap-[15px]">
                    <label htmlFor="">Add Image</label>
                    <div className="bg-[#F5F5F5] p-2.5 rounded-xl">
                        <div className="flex flex-col items-center gap-8 justify-center border-2 border-dashed border-[#E1E1E1] rounded-xl h-[360px] md:h-[394px]">
                            <BsCardImage className="w-[120px] h-[96px] text-[#3E323240] "/>
                            <p className="text-Input text-[#3E3232BF]">Drop image here, paste or</p>
                            <button className="flex items-center justify-center py-1 px-4 gap-2 text-[#3E323280] border-2 border-[#E6E6E6] rounded-xl">
                                <FaPlus/>
                                <span className="text-btn">Select</span>
                            </button>
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
                        <button type="submit" className="flex-1 bg-[#F81539BF] rounded-xl flex items-center justify-center py-2 gap-2 text-white">
                            <IoMdPaperPlane/>
                            <span className="text-btn">Public</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
}