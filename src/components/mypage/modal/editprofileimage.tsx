import { useRef } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useDeleteprofileimage } from "src/hooks/useDeleteprofileimage";
import { useUoloadprofileimage } from "src/hooks/useUploadprofileimage";
import { mypageStyle } from "src/styles/style";

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
    <div css={mypageStyle.Editprofileform.profileimageButton}> 
        <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={imagechangeRef}
             onChange={imageChangefunc}
        />
        <button type="button" aria-label="uploadimage" css={mypageStyle.Editprofileform.button} onClick={() => imagechangeRef.current?.click()}><AiOutlineCamera /></button>
        <div css={{color:"#D9D9D9", fontSize:"2.4rem"}}> | </div>
        <button type="button" css={mypageStyle.Editprofileform.button} onClick={()=> {deleteprofileimageMutation()}}> <MdOutlineClose/> </button>
    </div>
    );
}