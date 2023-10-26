import Image from "next/image";
// import { mypageStyle } from "src/styles/style";
import { useGetprofileinfo } from "src/hooks/useGetprofileinfo";
import { useMypageemodalstore } from "src/stores/store";
import example from "src/public/profileexample.png";
import {AiOutlineEdit} from "react-icons/ai";

export const Profile = () => {
    const {profileData} = useGetprofileinfo();
    const {isopen, setIsopen} = useMypageemodalstore();
    
    return (
    <>
        <div>
            <Image src={profileData?.profileImageUrl && profileData?.profileImageUrl !== "null" ? profileData?.profileImageUrl :example} alt=""/>
            <button type="button" onClick={()=>setIsopen(!isopen)}>
                <AiOutlineEdit/>
            </button>
        </div>
        <div>{profileData?.nickname}</div>
    </>
    );
}