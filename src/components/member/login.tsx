import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useModal } from "../../stores/store";
import { LoginProps, LoginResponse } from "../../types/type";
import { modalStyle } from "../../styles/style";
import { loginAction } from "../../api/memberapi";
// import { useLoginMutation } from "../../hooks/useAuth";

export const Login = (): JSX.Element => {
    const { setModaloption } = useModal();

    const {
        register,
        formState: { errors, isSubmitting, isValid },
        handleSubmit,
    } = useForm<LoginProps>({ mode: "onChange" });

    const loginMutation = useMutation<LoginResponse, Error, LoginProps>({
        mutationFn: (inputData: LoginProps) => loginAction(inputData),
        onSuccess: data => {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
        },
        onError: error => {
            console.log(error);
        },
    });
    const onSubmit = (inputData: LoginProps) => {
        loginMutation.mutate(inputData);
    };

    return (
        <div css={modalStyle.modalForm}>
            <p>이미 회원이신가요?</p>
            <p>갈래에 여행기록을 남겨보세요! ✍🏻</p>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <div>{errors.email?.message}</div>
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
                    {errors.passwd?.message}
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
