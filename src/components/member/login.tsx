import { useForm } from "react-hook-form";
import { useModal } from "../../stores/store";
import { LoginData } from "../../types/type";
import { modalStyle } from "../../styles/style";

export const Login = (): JSX.Element => {
    const { setModaloption } = useModal();

    const {
        register,
        formState: { errors, isSubmitting, isValid },
        handleSubmit,
        reset,
    } = useForm<LoginData>();

    // const logInAction = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     loginAction({
    //         inputEmail,
    //         inputPasswd,
    //         setModaloption,
    //         setIdErrorMsg,
    //         setPwdErrorMsg,
    //     });
    // };

    const onSubmit = (data: LoginData) => {
        console.log(data);
        reset();
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
                                    required: "이메일을 입력해주세요.",
                                    pattern: {
                                        value: /[a-z0-9]([-_₩.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_₩.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
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
                                placeholder="*******"
                                {...register("passwd", {
                                    required: "비밀번호를 입력해주세요.",
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
