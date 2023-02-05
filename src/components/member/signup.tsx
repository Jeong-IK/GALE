import { useForm } from "react-hook-form";
import { SignupProps } from "../../types/type";
// import { modalStyle } from "../../styles/style";
import {
    useExistNicknameMutation,
    useSignupMutation,
} from "../../hooks/useAuth";

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
            <p>환영합니다. </p>
            <p>여행지 기록 서비스 갈래와 함께 여행 기록을 작성해보세요. ✍🏻</p>
            <form onSubmit={handleSubmit(onSignup)}>
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
                                placeholder="영어 대소문자, 특수문자, 숫자 포함 8자리 이상"
                                {...register("passwd", {
                                    required: "비밀번호를 입력해주세요.",
                                    pattern: {
                                        value: /(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/,
                                        message:
                                            "영어 대소문자, 특수문자, 숫자 포함 8자리 이상 입력해주세요.",
                                    },
                                })}
                            />
                        </span>
                    </div>
                    <div>{errors.passwd?.message}</div>
                    <div>
                        비밀번호 확인
                        <span>
                            <input
                                type="password"
                                {...register("cfmPasswd", {
                                    required:
                                        "비밀번호를 한 번더 입력해주세요.",
                                    validate: (cfmPasswd?: string) => {
                                        const passwdValue = getValues("passwd");
                                        if (!cfmPasswd) return;
                                        if (passwdValue !== cfmPasswd)
                                            return "비밀번호가 서로 일치하지 않습니다.";
                                    },
                                })}
                            />
                        </span>
                    </div>
                    <div>{errors.cfmPasswd?.message}</div>
                    <div>
                        닉네임
                        <span>
                            <input
                                type="text"
                                {...register("nickname", {
                                    required: "닉네임을 입력해주세요.",
                                    minLength: {
                                        value: 3,
                                        message: "3글자 이상 입력해주세요.",
                                    },
                                })}
                            />
                            <button type="button" onClick={onExistNickname}>
                                중복확인
                            </button>
                        </span>
                    </div>
                    <div>{errors.nickname?.message}</div>
                    <div>
                        <button disabled={!isValid} type="submit">
                            동의하고 가입하기
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
