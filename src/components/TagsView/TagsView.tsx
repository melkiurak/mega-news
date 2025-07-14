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
            <div key={index} className="blur-sm bg-no-repeat bg-cover bg-center max-w-[170px] w-full h-full rounded-xl" style={{backgroundImage: `url(${tag?.image})`}}>
                <p className="text-h5 text-white">#{tag.name}</p>
            </div>
        ))}</div>
    </div>
}