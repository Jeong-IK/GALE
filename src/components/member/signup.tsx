import { useForm } from "react-hook-form";
import { SignupProps } from "../../types/type";
import { useExistNicknameMutation } from "../../hooks/useExistNickname";
import { useSignupMutation } from "../../hooks/useSignup";
import { ErrorMsg } from "../common/errormsg";
import { modalStyle } from "../../styles/style";

export const Signup = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        getValues,
    } = useForm<SignupProps>({ mode: "onChange" });

    const existNicknameMutation = useExistNicknameMutation();
    const signupMutation = useSignupMutation();

    const onExistNickname = () => {
        const nickname = getValues("nickname");
        existNicknameMutation({ nickname });
    };
    const onSignup = (inputdata: SignupProps) => {
        signupMutation(inputdata);
    };

    return (
        <div>
            <div css={modalStyle.modalTitle}>환영합니다. </div>
            <div css={modalStyle.modalSubject}>
                여행지 기록 서비스 갈래와 함께 여행 기록을 작성해보세요. ✍🏻
            </div>
            <form onSubmit={handleSubmit(onSignup)}>
                <div>
                    <div css={modalStyle.modalInputForm}>
                        <div css={modalStyle.modalInputIndex}>이메일</div>
                        <div>
                            <input
                                css={modalStyle.modalInput(!errors.email)}
                                type="text"
                                placeholder="example@gmail.com"
                                {...register("email", {
                                    required: "이메일을 입력해주세요.",
                                    pattern: {
                                        value: /[a-z0-9]([-_₩.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_₩.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                                        message:
                                            "이메일 형식으로 입력해주시기 바랍니다.",
                                    },
                                })}
                            />
                            <div css={modalStyle.modalError}>
                                {errors.email?.message}
                            </div>
                        </div>
                    </div>
                    <div css={modalStyle.modalInputForm}>
                        <div css={modalStyle.modalInputIndex}>
                            비밀번호 입력
                        </div>
                        <div>
                            <input
                                css={modalStyle.modalInput(!errors.password)}
                                type="password"
                                placeholder="영어 대소문자, 특수문자, 숫자 포함 8자리 이상"
                                {...register("password", {
                                    required: "비밀번호를 입력해주세요.",
                                    pattern: {
                                        value: /(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/,
                                        message:
                                            "영어 대소문자, 특수문자, 숫자 포함 8자리 이상 입력해주세요.",
                                    },
                                })}
                            />
                            <div css={modalStyle.modalError}>
                                {errors.password?.message}
                            </div>
                        </div>
                    </div>
                    <div css={modalStyle.modalInputForm}>
                        <div css={modalStyle.modalInputIndex}>
                            비밀번호 확인
                        </div>
                        <div>
                            <input
                                css={modalStyle.modalInput(
                                    !errors.confirmpassword
                                )}
                                type="password"
                                {...register("confirmpassword", {
                                    required:
                                        "비밀번호를 한 번더 입력해주세요.",
                                    validate: (cfmPasswd?: string) => {
                                        const passwdValue =
                                            getValues("password");
                                        if (!cfmPasswd) return;
                                        if (passwdValue !== cfmPasswd)
                                            return "비밀번호가 서로 일치하지 않습니다.";
                                    },
                                })}
                            />
                            <div css={modalStyle.modalError}>
                                {errors.confirmpassword?.message}
                            </div>
                        </div>
                    </div>
                    <div css={modalStyle.modalInputForm}>
                        <div css={modalStyle.modalInputIndex}>닉네임</div>
                        <div>
                            <input
                                css={modalStyle.modalNicknameInput}
                                type="text"
                                {...register("nickname", {
                                    required: "닉네임을 입력해주세요.",
                                    minLength: {
                                        value: 3,
                                        message: "3글자 이상 입력해주세요.",
                                    },
                                })}
                            />
                            <button
                                css={modalStyle.modalExistButton(
                                    getValues("nickname")
                                )}
                                type="button"
                                onClick={onExistNickname}
                            >
                                중복확인
                            </button>

                            <div css={modalStyle.modalError}>
                                {errors.nickname?.message}
                            </div>
                        </div>
                    </div>
                    <div css={modalStyle.modalSubmitForm}>
                        <button
                            css={modalStyle.modalSubmitButton(isValid)}
                            disabled={!isValid}
                            type="submit"
                        >
                            동의하고 가입하기
                        </button>
                    </div>
                </div>
            </form>
            <ErrorMsg />
        </div>
    );
};
