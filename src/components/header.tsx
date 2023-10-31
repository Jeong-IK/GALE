import Image from "next/image";
import { headerStyle } from "../styles/style";
import headerImg from "../public/headerBgImage.png";
import bigLogo from "../public/LOGO.png";
import { Headerlink } from "./common/headerlink";

export const Header = (): JSX.Element => (

    <>
        <div css={headerStyle.mainHeader}>
            <Image
                src={headerImg}
                css={headerStyle.headerBgImg}
                alt=""
                priority
            />
            <div css={headerStyle.totallinkDiv}>
                <Headerlink isIndex />
                <div css={headerStyle.bigLogoDiv}>
                    <Image src={bigLogo} alt="" />
                    <div css={headerStyle.service}>
                        <button type="button" css={headerStyle.link(true)}>
                            서비스 셜명란
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
);
