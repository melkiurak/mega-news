import { useEffect, useState } from "react"
import { dataTags } from "../../server/getData"
import type { Tags } from "../../types";
import { ButtonSwitch } from "../buttonSwitch/ButtonSwitch";

export const TagsView = () => {
    const [dataTag, setDataTag] = useState<Tags[]>([]);
    const [slide, setSilde] = useState(0);
    const visibleCount = 7.6;
    const handleNexthBtn = () => {
        setSilde(s => Math.max(s - 1, 0))
    }; 
      const handlePrevBtn = () => {
        setSilde(s => Math.min(s + 1, dataTag.length - visibleCount))
    } 
    useEffect(() => {
        const fecthTags = async () => {
            const result = await dataTags();
            setDataTag(result);
        };
        fecthTags()
    }, []);
    return <div className="w-full h-[68px]">
        <div className="relative flex items-center justify-between  w-full h-full overflow-hidden bg-[#F5F5F5] p-2.5 rounded-xl">
            {dataTag.slice(slide,slide + visibleCount).map((tag, index) => (
            <div key={index} className="max-w-[170px] w-full h-12 rounded-xl relative overflow-hidden">
                <div className="blur-[2px] bg-no-repeat bg-cover bg-center w-full h-full absolute top-0 left-0 rounded-xl"  style={{backgroundImage: `url(${tag?.image})`, boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.8)',}}></div>
                <p className="text-h5 text-white absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">#{tag.name}</p>
            </div>
            ))}
            <ButtonSwitch prev={handlePrevBtn} next={handleNexthBtn} />
        </div>
    </div>
}