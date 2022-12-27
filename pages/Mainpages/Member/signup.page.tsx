import React, { useRef, useState } from "react";
import axios from "axios";
import { useModal } from "../../store";
import {
    EmailErrorMsgType,
    PwdErrorMsgType,
    CfmPwdErrorMsgType,
    NickNameErrorMsgType,
} from "../type";
import { Modalform } from "../style";

export const Signup = () => {
    // Input 입력 값
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPasswd = useRef<HTMLInputElement>(null);
    const confirmPwd = useRef<HTMLInputElement>(null);
    const inputNickname = useRef<HTMLInputElement>(null);
    // Error State
    const [emailErrorMsg, setEmailErrorMsg] = useState<EmailErrorMsgType>(null);
    const [pwdErrorMsg, setPwdErrorMsg] = useState<PwdErrorMsgType>(null);
    const [cfmPwdErrorMsg, setCfmPwdErrorMsg] =
        useState<CfmPwdErrorMsgType>(null);
    const [nickNameErrorMsg, setNickNameErrorMsg] =
        useState<NickNameErrorMsgType>(null);
    // 모달창 타입 store
    const { setModaloption } = useModal();
    // 닉네임 중복체크 로직
    const checkNicknameExist = () => {
        if (!inputNickname.current?.value.length) return;
        axios
            .get("http://175.212.160.106:7777/auth/signup/exist-nickname")
            .then(() => {
                alert("사용 가능한 닉네임 입니다.");
            })
            .catch(() => {
                setNickNameErrorMsg("이미 존재하는 닉네임입니다.");
            });
    };

    // 함수명, 변수명 줄여쓰지 말자 e -> formEvent
    const signUpAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            !inputEmail.current?.value ||
            !inputPasswd.current?.value ||
            !confirmPwd.current?.value ||
            !inputNickname.current?.value
        ) {
            return;
        }
        if (
            emailErrorMsg ||
            pwdErrorMsg ||
            cfmPwdErrorMsg ||
            nickNameErrorMsg
        ) {
            return;
        }
        // catch 다른 상태코드
        // next js error overlay이유
        axios
            .post("http://175.212.160.106:7777/auth/signup", [
                {
                    Email: inputEmail.current.value,
                    Password: inputPasswd.current.value,
                    ConfirmPassword: confirmPwd.current.value,
                    Nickname: inputNickname.current.value,
                },
                {
                    withCredentials: true,
                },
            ])
            .then(response => {
                alert(response.data.message);
                setModaloption("logIn");
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    };

    return (
        <div css={Modalform}>
            <p>환영합니다. </p>
            <p>여행지 기록 서비스 갈래와 함께 여행 기록을 작성해보세요. ✍🏻</p>
            <form onSubmit={signUpAction}>
                <table>
                    <tbody>
                        <tr>
                            <td>이메일</td>
                            <td>
                                <input
                                    type="text"
                                    ref={inputEmail}
                                    onChange={() => {
                                        if (!inputEmail.current?.value?.length)
                                            return;
                                        if (
                                            inputEmail.current?.value?.length <
                                            8
                                        ) {
                                            setEmailErrorMsg(
                                                "8자이상으로 입력해주세요"
                                            );
                                            return;
                                        }
                                        if (
                                            inputEmail.current?.value?.length >
                                            20
                                        ) {
                                            setEmailErrorMsg(
                                                "이메일 길이가 너무 깁니다."
                                            );
                                            return;
                                        }
                                        if (
                                            inputEmail.current?.value.match(
                                                /[a-z0-9]([-_₩.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_₩.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
                                            ) == null
                                        ) {
                                            setEmailErrorMsg(
                                                "이메일 형식으로 입력해주시기 바랍니다."
                                            );
                                            return;
                                        }
                                        setEmailErrorMsg(null);
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
                                        if (!inputPasswd?.current?.value.length)
                                            return;
                                        if (
                                            inputPasswd?.current?.value
                                                .length === 0
                                        ) {
                                            setPwdErrorMsg(
                                                "비밀번호를 입력해주세요"
                                            );
                                            return;
                                        }
                                        if (
                                            inputPasswd.current.value.match(
                                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[a-zA-Z\d$@$!%*?&]{8,}/i
                                            ) === null
                                        ) {
                                            setPwdErrorMsg(
                                                "영어 대소문자, 특수문자, 숫자 포함 8자리 이상 입력해주세요"
                                            );
                                            return;
                                        }
                                        if (
                                            inputPasswd?.current?.value.length >
                                            16
                                        ) {
                                            setPwdErrorMsg(
                                                "비밀번호길이가 너무 깁니다."
                                            );
                                            return;
                                        }
                                        if (
                                            confirmPwd.current?.value !==
                                            inputPasswd.current.value
                                        ) {
                                            setCfmPwdErrorMsg(
                                                "비밀번호가 서로 일치하지 않습니다."
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
                            <td>비밀번호 확인</td>
                            <td>
                                <input
                                    type="password"
                                    id="confirmpwd"
                                    ref={confirmPwd}
                                    onChange={() => {
                                        if (!confirmPwd?.current?.value.length)
                                            return;
                                        if (
                                            confirmPwd?.current?.value
                                                .length === 0
                                        ) {
                                            setCfmPwdErrorMsg(
                                                "비밀번호를 한번 더 입력해주세요"
                                            );
                                            return;
                                        }
                                        if (
                                            confirmPwd.current.value !==
                                            inputPasswd.current?.value
                                        ) {
                                            setCfmPwdErrorMsg(
                                                "비밀번호가 서로 일치하지 않습니다."
                                            );
                                            return;
                                        }
                                        setCfmPwdErrorMsg(null);
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
                                        if (
                                            !inputNickname?.current?.value
                                                .length
                                        )
                                            return;
                                        if (
                                            inputNickname?.current?.value
                                                .length === 0
                                        ) {
                                            setNickNameErrorMsg(
                                                "닉네임을 입력해주세요"
                                            );
                                            return;
                                        }
                                        if (
                                            inputNickname.current.value.match(
                                                /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]){3,10}$/
                                            ) == null
                                        ) {
                                            setNickNameErrorMsg(
                                                "올바른 닉네임 형식으로 입력해주세요"
                                            );
                                            return;
                                        }
                                        setNickNameErrorMsg(null);
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={checkNicknameExist}
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
                                        정확히 입력해주세요.
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
