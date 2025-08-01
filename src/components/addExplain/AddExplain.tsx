import { BsCardImage } from "react-icons/bs";
import { IoMdColorFilter} from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaAlignLeft, FaLink } from "react-icons/fa6";
import React, { useEffect, useRef, useState, type ChangeEvent } from "react";
import type { CreatePost } from "src/types";

interface AddImageProps {
    setForm:  React.Dispatch<React.SetStateAction<any>>,
    stylesHeight: string,
}

const postTools = [
    {name: 'Image', icon: BsCardImage, id: 'image'},
    {name: 'Color', icon: IoMdColorFilter, id: 'color'},
    {name: 'Text', icon: FaCode, id: 'text'},
    {name: 'Align', icon: FaAlignLeft, id: 'align'},
    {name: 'Link', icon: FaLink, id: 'link'},
];

export const AddExplain = ({setForm, stylesHeight}:AddImageProps) => {
    const [explainColor, setExplainColor ] = useState('#000000');

    const explainImgRef = useRef<HTMLInputElement>(null);
    const explainColorRef = useRef<HTMLInputElement>(null);
    const explainRef = useRef<HTMLDivElement>(null);
    
    
    const handleImageChange = (e:ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file && explainRef.current){
            const imgExplanation = document.createElement('img');
            imgExplanation.className = "editor-img";
            imgExplanation.src = URL.createObjectURL(file);
            explainRef?.current.appendChild(imgExplanation);
        }
    };
    const handleTools = (toolName?:string,) => {
        if(toolName === 'Image'){
            explainImgRef.current?.click();
        } else if(toolName === 'Color'){
            explainColorRef.current?.click();
        } else if(toolName === 'Text' && explainRef.current){
            const title = document.createElement('h4');
            title.className = 'text-h4';
            explainRef?.current.appendChild(title);
        }
        else{console.log('Это не выбор фота')}
    };
    const handleColorChange = () => {
       const color =  explainColorRef.current
       if(!color) return;
       setExplainColor(color.value);
       console.log(color.value)
    };
    useEffect(() => {
        if (explainRef.current) {
            const text = explainRef.current.innerText;
            const [title, ...rest] = text.split(/\n+/);
            const html = `<h4>${title.trim()}</h4><p>${rest.join('\n').trim()}</p>`;
            explainRef.current.innerHTML = html;
        }
    }, [])
    return <div className={`flex flex-col gap-[15px] h-full`}>
        <h5 className="">Explanation</h5>
        <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] px-3 py-5 h-full flex flex-col"  >
            <div className="flex justify-between items-center lg:max-w-[500px] gap-5">
                {postTools.map((tools) => (
                    <button key={tools.id} className="bg-[#F5F5F5] rounded-xl py-2.5 flex items-center justify-center gap-2 flex-1" type="button" onClick={() => handleTools(tools.name)}>
                        <span className="text-[#3E323280] text-base">{React.createElement(tools.icon)}</span>
                        <span className="hidden md:block text-btn text-[#3E32324B]">{tools.name}</span>
                    </button>
                ))}
                <input type="file" ref={explainImgRef} className="hidden" onChange={(e) => handleImageChange(e)} />
                <input type="color" ref={explainColorRef} className="hidden" onChange={handleColorChange}/>
            </div>
            <div
                id="Explanation"
                dir="auto"
                ref={explainRef}
                className={`flex-1 border-none bg-[#F5F5F5] p-5 rounded-xl w-full break-all resize-none outline-none mt-6 whitespace-pre-wrap overflow-auto wrap-break-word`}
                style={{ color: explainColor }}
                contentEditable={true}
                onInput={() => {
                if (explainRef.current) {
                    setForm((prev:CreatePost) => ({...prev, explanation: explainRef.current!.innerHTML}));
                }
                }}
            >
            </div> 
            
        </div>
    </div>
}