import { useForm } from "react-hook-form";
import { useModal } from "../../stores/store";
import { LoginProps } from "../../types/type";
// import { modalStyle } from "../../styles/style";
import { useLoginMutation } from "../../hooks/useLogin";
import { modalStyle } from "../../styles/style";

export const Login = (): JSX.Element => {
    const { setModaloption } = useModal();
    const { loginMutation, loginStatus, loginError } = useLoginMutation();

    const {
        register,
        formState: { errors, isSubmitting, isValid },
        handleSubmit,
    } = useForm<LoginProps>({ mode: "onChange" });

    const onLogin = (inputData: LoginProps) => {
        loginMutation(inputData);
        if (loginStatus === "error" && loginError?.response.status !== 401)
            alert(loginError?.response.data.message);
    };

    return (
        <div>
            <div css={modalStyle.modalTitle}>이미 회원이신가요?</div>
            <div css={modalStyle.modalSubject}>
                갈래에 여행기록을 남겨보세요! ✍🏻
            </div>
            <form onSubmit={handleSubmit(onLogin)}>
                <>
                    <div css={modalStyle.modalInputForm}>
                        <div css={modalStyle.modalInputIndex}>이메일</div>
                        <div>
                            <input
                                css={modalStyle.modalInput}
                                type="text"
                                placeholder="example@gmail.com"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "이메일을 입력해주세요.",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]([-_₩.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_₩.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                                        message:
                                            "이메일 형식으로 입력해주시기 바랍니다.",
                                    },
                                })}
                            />
                            <div css={modalStyle.modalError}>
                                {errors.email
                                    ? errors.email?.message
                                    : loginError?.response.status === 401 &&
                                      loginError.response.data.message}
                            </div>
                        </div>
                    </div>

                    <div css={modalStyle.modalInputForm}>
                        <div css={modalStyle.modalInputIndex}>
                            비밀번호 입력
                        </div>
                        <div>
                            <input
                                css={modalStyle.modalInput}
                                type="password"
                                placeholder="영어 대소문자, 특수문자, 숫자 포함 8자리 이상"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "비밀번호를 입력해주세요.",
                                    },
                                })}
                            />
                            <div css={modalStyle.modalError}>
                                {errors.password
                                    ? errors.password?.message
                                    : loginError?.response.status === 401 &&
                                      loginError.response.data.message}
                            </div>
                        </div>
                    </div>

                    <div css={modalStyle.modalSubmitForm}>
                        <button
                            css={modalStyle.modalSubmitButton(isValid)}
                            type="submit"
                            disabled={isSubmitting || !isValid}
                        >
                            로그인 하기
                        </button>
                    </div>
                </>
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
