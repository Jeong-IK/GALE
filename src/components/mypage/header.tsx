import Image from "next/image";
import headerImg from "src/public/mypageBgImage.png";
import { mypageStyle } from "src/styles/style";
import { Headerlink } from "../common/headerlink";
import { Modal } from "./modal/modal";
import { Profile } from "./profile";


    export const Mypageheader = () => (
        <>
            <div css={mypageStyle.headerDiv}>
                <Image src={headerImg} css={mypageStyle.headerBgImg} alt="" priority />
                <Headerlink isIndex />
                <Profile />
            </div>
            <Modal/>
        </>
    );
