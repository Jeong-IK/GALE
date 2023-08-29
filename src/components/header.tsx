import Image from "next/image";
import { headerStyle } from "../styles/style";
import { Modal } from "./member/modal";
import headerImg from "../public/headerBgImage.png";
import bigLogo from "../public/LOGO.png";
import { Headerlink } from "./common/headerlink";

export const Header = (): JSX.Element => (
    // 로그아웃 액션 -> accessToken만으로 로그아웃 되도록 수정 예정

    <>
        <div css={headerStyle.mainHeader}>
            <Image
                src={headerImg}
                css={headerStyle.headerBgImg}
                alt=""
                priority

            />
            <div>
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
        <Modal />
    </>);

