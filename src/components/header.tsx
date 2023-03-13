import { useEffect, useState } from "react";
import Image from "next/image";
import { logoutAction } from "../api/memberApi";
import { headerStyle } from "../styles/style";
import { useModal } from "../stores/store";
import { Modal } from "./member/modal";
import headerImg from "../public/headerBgImage.png";
import smallLogo from "../public/CI.png";
import bigLogo from "../public/LOGO.png";

export const Header = (): JSX.Element => {
    const { setModaloption } = useModal();
    const [logInState, setLoginState] = useState<boolean>(false);
    // 로그아웃 액션 -> accessToken만으로 로그아웃 되도록 수정 예정

    // 로그인 여부 확인
    useEffect(() => {
        // localStorage가 생성되기 전에 실행되어 발생하는 오류 방지
        if (typeof window === "undefined") return;
        if (!localStorage.getItem("accessToken")) {
            setLoginState(false);
            return;
        }
        setLoginState(true);
    }, []);

    return (
        <>
            <div css={headerStyle.mainHeader}>
                <Image
                    src={headerImg}
                    css={headerStyle.headerBgImg}
                    alt=""
                    priority
                />
                <div css={headerStyle.linkFamily}>
                    <span css={headerStyle.smallLogoDiv}>
                        <button type="button" css={headerStyle.smallLogo}>
                            <Image src={smallLogo} alt="" />
                        </button>
                    </span>
                    {/* <button type="button">
                        <Image src="/CI.png" alt="CI" />
                    </button> */}
                    {!logInState ? (
                        <div css={headerStyle.memberLink}>
                            <button
                                type="button"
                                css={headerStyle.link}
                                onClick={() => {
                                    setModaloption("logIn");
                                }}
                            >
                                로그인
                            </button>
                            <button
                                type="button"
                                css={headerStyle.link}
                                onClick={() => {
                                    setModaloption("signUp");
                                }}
                            >
                                회원가입
                            </button>
                        </div>
                    ) : (
                        <div css={headerStyle.memberLink}>
                            <button
                                type="button"
                                css={headerStyle.link}
                                onClick={() => {
                                    logoutAction();
                                }}
                            >
                                로그아웃
                            </button>
                            <button type="button" css={headerStyle.link}>
                                마이페이지
                            </button>
                        </div>
                    )}
                    <div css={headerStyle.bigLogoDiv}>
                        <Image src={bigLogo} alt="" />
                        <div css={headerStyle.service}>
                            <button type="button" css={headerStyle.link}>
                                서비스 셜명란
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal />
        </>
    );
};
