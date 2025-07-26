import { useRef } from "react";
import { BsCardImage } from "react-icons/bs"
import { FaPlus } from "react-icons/fa6"

interface AddImageProps {
    title: string,
    image: string | null,
    onImageChange: (file: File) => void,
    ImageStyle: string,
}

export const AddImage = ({title, image, onImageChange, ImageStyle}:AddImageProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onImageChange(file);
        }
    };
    return <div className="flex flex-col gap-[15px]">
        <label htmlFor="">
            <h5>{title}</h5>
            <div className="bg-[#F5F5F5] p-2.5 rounded-xl">
                <div className={` border-dashed border-[#E1E1E1] ${image ? 'border-none' : 'border-2'} rounded-xl h-[360px] md:h-[394px] ${ImageStyle}`}>
                    {image ? (
                        <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }}></div>
                    ) : (
                        <div className="flex flex-col flex-wrap items-center gap-8 justify-center h-full">
                            <BsCardImage className="w-[120px] h-[96px] text-[#3E323240] "/>
                            <div className="flex items-center flex-col">
                                <p className="text-Input text-[#3E3232BF]">Drop image here, paste or</p>
                                <button type="button" className="flex items-center justify-center py-1 px-4 gap-2 text-[#3E323280] border-2 border-[#E6E6E6] rounded-xl" onClick={() => fileInputRef.current?.click()}>
                                    <FaPlus/>
                                    <span className="text-btn">Select</span>
                                </button>
                                <input type="file" ref={fileInputRef} className="hidden" onChange={handleChange} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </label>
    </div>
}