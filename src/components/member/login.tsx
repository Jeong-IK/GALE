import { useRef, useState } from "react";
import { useModal } from "../../stores/store";
import { LoginIdErrorMsgType, LoginPwdErrorMsgType } from "../../types/type";
import { modalStyle } from "../../styles/style";
import { loginAction } from "../../api/memberapi";
import { checkLoginIdValue, checkLoginPwdValue } from "../../utils/memberutils";

export const Login = (): JSX.Element => {
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPasswd = useRef<HTMLInputElement>(null);
    const [idErrorMsg, setIdErrorMsg] = useState<LoginIdErrorMsgType>();
    const [pwdErrorMsg, setPwdErrorMsg] = useState<LoginPwdErrorMsgType>();
    const { setModaloption } = useModal();

    const logInAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        loginAction({
            inputEmail,
            inputPasswd,
            setModaloption,
            setIdErrorMsg,
            setPwdErrorMsg,
        });
    };

    return (
        <div css={modalStyle.modalForm}>
            <p>이미 회원이신가요?</p>
            <p>갈래에 여행기록을 남겨보세요! ✍🏻</p>
            <form onSubmit={logInAction}>
                <div>
                    <div>
                        이메일
                        <span>
                            <input
                                type="text"
                                placeholder="example@gmail.com"
                                ref={inputEmail}
                                onChange={() => {
                                    checkLoginIdValue({
                                        inputEmail,
                                        setIdErrorMsg,
                                    });
                                }}
                            />
                        </span>
                    </div>
                    <div>{idErrorMsg}</div>
                    <div>
                        비밀번호 입력
                        <span>
                            <input
                                type="password"
                                ref={inputPasswd}
                                placeholder="영어 대소문자, 특수문자, 숫자 포함 8자리 이상"
                                onChange={() => {
                                    checkLoginPwdValue({
                                        inputPasswd,
                                        setPwdErrorMsg,
                                    });
                                }}
                            />
                        </span>
                    </div>
                    {pwdErrorMsg}
                    <div>
                        <button
                            type="submit"
                            disabled={
                                !(
                                    inputEmail.current?.value &&
                                    inputPasswd.current?.value
                                )
                            }
                        >
                            로그인 하기
                        </button>
                    </div>
                </div>
            </form>
            회원이 아니신가요?
            <strong
                onClick={() => {
                    setModaloption("signUp");
                }}
                role="presentation"
            >
                가입하기
            </strong>
        </div>
    );
};
