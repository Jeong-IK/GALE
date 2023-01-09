import { useRef, useState } from "react";
import { useModal } from "../../stores/store";
import { LoginIdErrorMsgType, LoginPwdErrorMsgType } from "../../types/type";
import { modalStyle } from "../../styles/style";
import { loginAction } from "../../api/memberapi";

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
                <table>
                    <tbody>
                        <tr>
                            <td>이메일</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="example@gmail.com"
                                    ref={inputEmail}
                                    onChange={() => {
                                        if (!inputEmail.current?.value.length) {
                                            setIdErrorMsg(
                                                "이메일을 입력해주세요."
                                            );
                                            return;
                                        }
                                        setIdErrorMsg(null);
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>{idErrorMsg}</td>
                        </tr>
                        <tr>
                            <td>비밀번호 입력</td>
                            <td>
                                <input
                                    type="password"
                                    ref={inputPasswd}
                                    placeholder="영어 대소문자, 특수문자, 숫자 포함 8자리 이상"
                                    onChange={() => {
                                        if (
                                            !inputPasswd.current?.value.length
                                        ) {
                                            setPwdErrorMsg(
                                                "비밀번호를 입력해주세요."
                                            );
                                            return;
                                        }
                                        setPwdErrorMsg(null);
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>{pwdErrorMsg}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                {inputEmail.current?.value &&
                                inputPasswd.current?.value ? (
                                    <button type="submit">로그인 하기</button>
                                ) : (
                                    <button type="submit" disabled>
                                        로그인 하기
                                    </button>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <p>
                회원이 아니신가요?
                <strong
                    onClick={() => {
                        setModaloption("signUp");
                    }}
                    role="presentation"
                >
                    가입하기
                </strong>
            </p>
        </div>
    );
};
