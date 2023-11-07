import Image from "next/image";
// import { mypageStyle } from "src/styles/style";
import { useGetprofileinfo } from "src/hooks/useGetprofileinfo";
import { useMypageemodalstore } from "src/stores/store";
import example from "src/public/profileexample.png";
import { AiOutlineEdit } from "react-icons/ai";
import { mypageStyle } from "src/styles/style";

export const Profile = () => {
    const { profileData } = useGetprofileinfo();
    const {isopen, setIsopen} = useMypageemodalstore();
    
    return (
    <div style={{padding: "0 0 0 16rem", display:"flex", position:"absolute", top:"20%"}}>
        <div style={{}}>
            <Image src={profileData?.profileImageUrl && profileData?.profileImageUrl !== "null" ? profileData?.profileImageUrl :example} width={138} height={138} css={mypageStyle.profile.profileImg}  alt=""/>
            <button type="button" css={mypageStyle.profile.editbutton} onClick={()=>setIsopen(!isopen)}>
                <AiOutlineEdit/>
            </button>
        </div>
        <div css={mypageStyle.profile.nickname}>{profileData?.nickname}</div>
    </div>
    );
}