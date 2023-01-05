import axios from "axios";
import { SignupProps, CheckNicknameProps } from "../types/type";

export const Signupaction = ({
    email,
    pwd,
    confirmpwd,
    nickname,
    setModaloption,
}: SignupProps) => {
    if (
        !email.current?.value ||
        !pwd.current?.value ||
        !confirmpwd.current?.value ||
        !nickname.current?.value
    )
        return;
    axios
        .post("http://175.212.160.106:7777/auth/signup", {
            Email: email.current.value,
            Password: pwd.current.value,
            ConfirmPassword: confirmpwd.current.value,
            Nickname: nickname.current.value,
        })
        .then(response => {
            alert(response.data.message);
            setModaloption("logIn");
        })
        .catch(error => {
            console.log(error.response.data);
            alert(error.response.data.message);
        });
};

export const checkNicknameExist = ({
    nickname,
    setNickNameErrorMsg,
}: CheckNicknameProps) => {
    if (!nickname.current?.value.length) return;
    axios
        .get("http://175.212.160.106:7777/auth/signup/exist-nickname", {
            params: { Nickname: nickname.current.value },
        })
        .then(response => {
            alert(response.data.message);
            setNickNameErrorMsg(null);
        })
        .catch(error => {
            if (error.response.status === 503)
                alert(error.response.data.message);
            setNickNameErrorMsg("이미 존재하는 닉네임입니다.");
        });
};
