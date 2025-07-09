import { BsCardImage } from "react-icons/bs";
import { IoMdColorFilter } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaAlignLeft, FaLink  } from "react-icons/fa6";
import React from "react";
export const SendPost = () => {
    const postTools = [
        {name: 'Image', icon:BsCardImage},
        {name: 'Color', icon:IoMdColorFilter},
        {name: 'Text', icon: FaCode},
        {name: 'Align', icon: FaAlignLeft},
        {name: 'Link', icon: FaLink},
    ]
    return <div>
        <form className="flex flex-col">
            <div>
                <label htmlFor=""  className="text-h5">Title</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""  className="text-h5">Add Tags</label>
                <input type="text" />
                <button>+</button>
            </div>
            <div>
                <label htmlFor="" className="text-h5">Explanation</label>
                <div>
                    <div>
                        {postTools.map((tools, index) => (
                            <button key={index}>
                                <span>{React.createElement(tools.icon)}</span>
                                <span>{tools.name}</span>
                            </button>
                        ))}
                    </div>
                    <input type="text" />
                </div>
            </div>
        </form>
    </div>
}