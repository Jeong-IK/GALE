import { useEffect, useState } from "react";
import Image from "next/image";
import { logoutAction } from "../api/memberapi";
import { headerStyle } from "../styles/style";
import { useModal } from "../stores/store";
import { Modal } from "./common/modal";
import headerImg from "../public/headerBgImage.png";
// import CI from "../public/CI.png";

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
                <Image src={headerImg} css={headerStyle.headerBgImg} alt="" />
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
                        <button type="button" css={headerStyle.memberLink}>
                            마이페이지
                        </button>
                    </div>
                )}
            </div>
            <Modal />
        </>
    );
};
