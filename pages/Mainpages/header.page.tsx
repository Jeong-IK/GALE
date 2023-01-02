import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Link, Headerbgimg, Mainheader, Memberlink } from "./style";
import { useModal } from "../store";
import { Signup } from "./Member/signup.page";
import { Login } from "./Member/login.page";
import { Modal } from "../modal";

export const Header = (): JSX.Element => {
    const { modalOption, setModaloption } = useModal();
    const [logInState, setLoginState] = useState<boolean>(false);
    // 로그아웃 액션 -> accessToken만으로 로그아웃 되도록 수정 예정
    const logoutAction = () => {
        if (!localStorage.getItem("accessToken")) return;

        axios
            .post("http://175.212.160.106:7777/auth/logout", [
                {
                    Email: "vkxld134@naver.com",
                    Token: localStorage.getItem("accessToken"),
                },
                {
                    withCredentials: true,
                },
            ])
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error.response.data.message);
            });
    };

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
            <div css={Mainheader}>
                <Image
                    src="/headerBgImage.png"
                    alt="headerbgimg"
                    layout="fill"
                    css={Headerbgimg}
                />
                {!logInState ? (
                    <div css={Memberlink}>
                        <button
                            type="button"
                            css={Link}
                            onClick={() => {
                                setModaloption("logIn");
                            }}
                        >
                            로그인
                        </button>
                        <button
                            type="button"
                            css={Link}
                            onClick={() => {
                                setModaloption("signUp");
                            }}
                        >
                            회원가입
                        </button>
                    </div>
                ) : (
                    <div css={Memberlink}>
                        <button
                            type="button"
                            css={Link}
                            onClick={() => {
                                logoutAction();
                            }}
                        >
                            로그아웃
                        </button>
                        <button type="button" css={Link}>
                            마이페이지
                        </button>
                    </div>
                )}
            </div>
            {modalOption && (
                <Modal>
                    {modalOption === "logIn" ? <Login /> : <Signup />}
                </Modal>
            )}
        </>
    );
};
