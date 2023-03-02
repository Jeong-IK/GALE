import { useForm } from "react-hook-form";
import { useModal } from "../../stores/store";
import { LoginProps } from "../../types/type";
// import { modalStyle } from "../../styles/style";
import { useLoginMutation } from "../../hooks/useLogin";

export const Login = (): JSX.Element => {
    const { setModaloption } = useModal();

    const {
        register,
        formState: { errors, isSubmitting, isValid },
        handleSubmit,
    } = useForm<LoginProps>({ mode: "onChange" });

    const { loginMutation, loginStatus, loginError } = useLoginMutation();

    const onLogin = (inputData: LoginProps) => {
        loginMutation(inputData);
        if (loginStatus === "error" && loginError?.response.status !== 401)
            alert(loginError?.response.data.message);
    };

    return (
        <div>
            <p>이미 회원이신가요?</p>
            <p>갈래에 여행기록을 남겨보세요! ✍🏻</p>
            <form onSubmit={handleSubmit(onLogin)}>
                <div>
                    <div>
                        이메일
                        <span>
                            <input
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
                        </span>
                    </div>
                    <div>
                        {errors.email
                            ? errors.email?.message
                            : loginError?.response.status === 401 &&
                              loginError.response.data.message}
                    </div>
                    <div>
                        비밀번호 입력
                        <span>
                            <input
                                type="password"
                                placeholder="영어 대소문자, 특수문자, 숫자 포함 8자리 이상"
                                {...register("passwd", {
                                    required: {
                                        value: true,
                                        message: "비밀번호를 입력해주세요.",
                                    },
                                })}
                            />
                        </span>
                    </div>
                    {errors.passwd
                        ? errors.passwd?.message
                        : loginError?.response.status === 401 &&
                          loginError.response.data.message}
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting || !isValid}
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
