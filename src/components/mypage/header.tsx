import Image from "next/image";
import headerImg from "src/public/headerBgImage.png";
import example from "src/public/profileexample.png";
import {AiOutlineEdit} from "react-icons/ai";
import { mypageStyle } from "src/styles/style";
import { useMypageemodalstore } from "src/stores/store";
import { Headerlink } from "../common/headerlink";


export const Mypageheader = () => {
    const {isopen, setIsopen} = useMypageemodalstore();
    return (
    <div css={mypageStyle.headerDiv}>
        <Image src={headerImg} css={mypageStyle.headerBgImg} alt="" priority />
        <Headerlink isIndex />
        <div>
            <Image src={example} alt=""/>
            <button type="button" onClick={()=>setIsopen(!isopen)}>
                <AiOutlineEdit/>
            </button>
        </div>
        <div>닉네임</div>
    </div>
);}
