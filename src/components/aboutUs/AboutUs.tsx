import { BreadCrumb } from "@components/breadcrumb/breadCrumb"

export const AboutUs = () => {
    return <div className="flex flex-col gap-10"> 
        <BreadCrumb/>
        <div className="bg-[#F5F5F5] rounded-xl p-[15px] flex flex-wrap gap-5">
            <h4 className="text-black">We pay attention to your needs and do the best design.</h4>
            <p className="paragraph text-Black ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat.</p>
            <video controls>
                <source />
            </video>
        </div>
    </div>
}