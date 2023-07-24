import Image from "next/image";
import { Headerlink } from "../common/headerlink";
import headerImg from "../../public/headerBgImage.png";
import { mypageStyle } from "../../styles/style";

export const Mypageheader = () => (
    <div css={mypageStyle.headerDiv}>
        <Image src={headerImg} css={mypageStyle.headerBgImg} alt="" priority />
        <Headerlink isIndex />
    </div>
);
