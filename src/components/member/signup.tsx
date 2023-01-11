import React, { useRef, useState } from "react";
import {
    SignupEmailErrorMsgType,
    SignupPwdErrorMsgType,
    SignupCfmPwdErrorMsgType,
    SignupNickNameErrorMsgType,
} from "../../types/type";
import { modalStyle } from "../../styles/style";
import { signupAction, checkNicknameExist } from "../../api/memberapi";
import { useModal } from "../../stores/store";
import {
    checkCfmPwdValue,
    checkEmailValue,
    checkNicknameValue,
    checkPwdValue,
} from "../../utils/memberutils";

export const Signup = () => {
    // Input 입력 값 Ref 변수
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPasswd = useRef<HTMLInputElement>(null);
    const confirmPwd = useRef<HTMLInputElement>(null);
    const inputNickname = useRef<HTMLInputElement>(null);
    // ErrorMsgType 상태
    const [emailErrorMsg, setEmailErrorMsg] =
        useState<SignupEmailErrorMsgType>(null);
    const [pwdErrorMsg, setPwdErrorMsg] = useState<SignupPwdErrorMsgType>(null);
    const [cfmPwdErrorMsg, setCfmPwdErrorMsg] =
        useState<SignupCfmPwdErrorMsgType>(null);
    const [nickNameErrorMsg, setNickNameErrorMsg] =
        useState<SignupNickNameErrorMsgType>(null);
    // 모달창 타입 전역 상태
    const { setModaloption } = useModal();
    // 회원가입
    const useSignupAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (emailErrorMsg || pwdErrorMsg || cfmPwdErrorMsg || nickNameErrorMsg)
            return;
        signupAction({
            inputEmail,
            inputPasswd,
            confirmPwd,
            inputNickname,
            setModaloption,
        });
    };

    return (
        <div css={modalStyle.modalForm}>
            <p>환영합니다. </p>
            <p>여행지 기록 서비스 갈래와 함께 여행 기록을 작성해보세요. ✍🏻</p>
            <form onSubmit={useSignupAction}>
                <table>
                    <tbody>
                        <tr>
                            <td>이메일</td>
                            <td>
                                <input
                                    type="text"
                                    ref={inputEmail}
                                    onChange={() => {
                                        checkEmailValue({
                                            inputEmail,
                                            setEmailErrorMsg,
                                        });
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>{emailErrorMsg}</td>
                        </tr>
                        <tr>
                            <td>비밀번호 입력</td>
                            <td>
                                <input
                                    type="password"
                                    ref={inputPasswd}
                                    onChange={() => {
                                        checkPwdValue({
                                            inputPasswd,
                                            setPwdErrorMsg,
                                        });
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>{pwdErrorMsg}</td>
                        </tr>
                        <tr>
                            <td>비밀번호 확인</td>
                            <td>
                                <input
                                    type="password"
                                    ref={confirmPwd}
                                    onChange={() => {
                                        checkCfmPwdValue({
                                            confirmPwd,
                                            inputPasswd,
                                            setCfmPwdErrorMsg,
                                        });
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>{cfmPwdErrorMsg}</td>
                        </tr>
                        <tr>
                            <td>닉네임</td>
                            <td>
                                <input
                                    type="text"
                                    ref={inputNickname}
                                    onChange={() => {
                                        checkNicknameValue({
                                            inputNickname,
                                            setNickNameErrorMsg,
                                        });
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        checkNicknameExist({
                                            inputNickname,
                                            setNickNameErrorMsg,
                                        })
                                    }
                                >
                                    중복확인
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>{nickNameErrorMsg}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                {inputEmail.current?.value &&
                                inputPasswd.current?.value &&
                                confirmPwd.current?.value &&
                                inputNickname.current?.value &&
                                !emailErrorMsg &&
                                !pwdErrorMsg &&
                                !cfmPwdErrorMsg &&
                                !nickNameErrorMsg ? (
                                    <button type="submit">
                                        동의하고 가입하기
                                    </button>
                                ) : (
                                    <button disabled type="button">
                                        동의하고 가입하기
                                    </button>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};
