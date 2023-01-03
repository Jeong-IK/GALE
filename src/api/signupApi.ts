import axios from "axios";
import { useModal } from "../store/store";
import { SignupProps } from "../types/type";

export const useSignup = ({
    event,
    email,
    pwd,
    confirmpwd,
    nickname,
}: SignupProps) => {
    const { setModaloption } = useModal();
    event.preventDefault();
    if (!email || !pwd || !confirmpwd || !nickname) return;
    // next js error overlay이유
    axios
        .post("http://175.212.160.106:7777/auth/signup", [
            {
                Email: email,
                Password: pwd,
                ConfirmPassword: confirmpwd,
                Nickname: nickname,
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
            console.log(error.response.data);
            alert(error.response.data.message);
        });
};
