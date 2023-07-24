import Image from "next/image";
import { useEffect } from "react";
import { headerStyle } from "../../styles/style";
import smallLogo from "../../public/CI.png";
import { useModal, useLoginState } from "../../stores/store";
import { useLogoutMutation } from "../../hooks/useLogout";

export const Headerlink = ({ isIndex }: { isIndex: boolean }) => {
    const { setModaloption } = useModal();
    const { loginState, setLoginState } = useLoginState();
    const logoutAction = useLogoutMutation();

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
        <div css={headerStyle.linkFamily}>
            <span css={headerStyle.smallLogoDiv}>
                <button type="button" css={headerStyle.smallLogo}>
                    <Image src={smallLogo} alt="" />
                </button>
            </span>
            {/* <button type="button">
                        <Image src="/CI.png" alt="CI" />
                    </button> */}
            {!loginState ? (
                <div css={headerStyle.memberLink}>
                    <button
                        type="button"
                        css={headerStyle.link(isIndex)}
                        onClick={() => {
                            setModaloption("logIn");
                        }}
                    >
                        로그인
                    </button>
                    <button
                        type="button"
                        css={headerStyle.link(isIndex)}
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
                        css={headerStyle.link(isIndex)}
                        onClick={() => {
                            logoutAction();
                            setLoginState(false);
                        }}
                    >
                        로그아웃
                    </button>
                    <button type="button" css={headerStyle.link(isIndex)}>
                        마이페이지
                    </button>
                </div>
            )}
        </div>
    );
};
