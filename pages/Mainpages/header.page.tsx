import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "./style";
import { useModal } from "../store";
import { Signup } from "./Member/signup.page";
import { Login } from "./Member/login.page";
import { Modal } from "../modal";

export const Header = (): JSX.Element => {
    const { modalOption, setModaloption } = useModal();
    const [logInState, setLoginState] = useState<boolean>(false);
    const logoutAction = () => {
        axios
            .post("http://175.212.160.106:7777/auth/logout", [
                {
                    Enail: "vkxld134@naver.com",
                    Token: "admin",
                },
                {
                    withCredentials: true,
                },
            ])
            .then(() => {
                setModaloption(null);
            })
            .catch(error => {
                console.log(error.response.data.message);
            });
    };
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (!localStorage.getItem("accessToken")) {
            setLoginState(false);
            return;
        }
        setLoginState(true);
    }, []);
    return (
        <>
            <div id="root">
                {!logInState ? (
                    <>
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
                    </>
                ) : (
                    <button
                        type="button"
                        css={Link}
                        onClick={() => {
                            logoutAction();
                        }}
                    >
                        로그아웃
                    </button>
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
