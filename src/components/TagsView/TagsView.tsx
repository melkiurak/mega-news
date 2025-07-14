import { useEffect, useState } from "react"
import { dataTags } from "../../server/getData"
import type { Tags } from "../../types";

export const TagsView = () => {
    const [dataTag, setDataTag] = useState<Tags[]>([]);
    useEffect(() => {
        const fecthTags = async () => {
            const result = await dataTags();
            setDataTag(result);
        };
        fecthTags()
    }, []);
    return <div className="w-full h-12">
        <div className="flex items-center justify-between gap-6 w-full h-full flex-wrap overflow-hidden">{dataTag.map((tag, index) => (
            <div key={index} className="max-w-[170px] w-full h-full rounded-xl relative overflow-hidden">
                <div className="blur-[2px] bg-no-repeat bg-cover bg-center w-full h-full absolute top-0 left-0 rounded-xl"  style={{backgroundImage: `url(${tag?.image})`, boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.8)',}}></div>
                <p className="text-h5 text-white absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">#{tag.name}</p>
            </div>
        ))}</div>
    </div>
}