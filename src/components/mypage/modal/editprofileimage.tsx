import { useRef } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useDeleteprofileimage } from "src/hooks/useDeleteprofileimage";
import { useUoloadprofileimage } from "src/hooks/useUploadprofileimage";
// import { mypageStyle } from "src/styles/style";

export const Editprofileimage = () => {
    const imagechangeRef = useRef<HTMLInputElement>(null);
    const { deleteprofileimageMutation } = useDeleteprofileimage();
    const { uploadimagemutate } = useUoloadprofileimage();
    
    const imageChangefunc = (chfile: React.ChangeEvent<HTMLInputElement>) => {
        const file = chfile.target.files ? chfile.target.files[0] : null;
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                uploadimagemutate({
                        fileData: reader.result as string,
                        saveFileData: file,
                }) 
            };
            reader.readAsDataURL(file);
        }
    };

    return (
    <div style={{display:"flex", position:"absolute"}}> 
        <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={imagechangeRef}
             onChange={imageChangefunc}
        />
        <button type="button" aria-label="uploadimage" onClick={() => imagechangeRef.current?.click()}><AiOutlineCamera /></button>
        <button type="button" onClick={()=> {deleteprofileimageMutation()}}> <MdOutlineClose/> </button>
    </div>
            );
}