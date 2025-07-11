import { BsCardImage } from "react-icons/bs";
import { IoMdColorFilter, IoMdPaperPlane } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaAlignLeft, FaLink, FaPlus, FaRegFloppyDisk, FaRegEye } from "react-icons/fa6";
import React, { useState } from "react";
import type { CreatePost } from "../../../types";
export const SendPost = () => {
    const [formPost, setFormPost] = useState<CreatePost>({
        title: '',
        tags: [],
        imagePost: null,
        explanation: '',
    });
    const postTools = [
        {name: 'Image', icon:BsCardImage},
        {name: 'Color', icon:IoMdColorFilter},
        {name: 'Text', icon: FaCode},
        {name: 'Align', icon: FaAlignLeft},
        {name: 'Link', icon: FaLink},
    ];
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
                            <input type="text" className="h-full pl-4" value={formPost.tags} />
                            <button type="button" className="bg-[#0000000C] text-[#3E3232] p-2 rounded-xl absolute right-1 top-1/2 -translate-y-1/2"><FaPlus className="text-2xl"/></button>
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