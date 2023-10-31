import { useMutation } from "@tanstack/react-query";
import { loginAction } from "../api/memberapi";
import { GeneralError, LoginProps, LoginResponse } from "../types/type";
import { useLoginState } from "../stores/store";

const setStorageData = (responseData: LoginResponse) => {
    console.log(responseData);
    localStorage.setItem("accessToken", responseData.data.accessToken);
    localStorage.setItem("refreshToken", responseData.data.refreshToken);
    localStorage.setItem("email", responseData.data.email);
};

export const useLoginMutation = () => {
    const { setLoginState } = useLoginState();
    const {
        mutate: loginMutation,
        status: loginStatus,
        error: loginError,
    } = useMutation<LoginResponse, GeneralError, LoginProps>({
        mutationFn: (inputData: LoginProps) => loginAction(inputData),
        onSuccess: response => {
            setStorageData(response);
            setLoginState(true);
        },
        onError: error => {
            alert(error.response.data.message);
        },
    });
    return { loginMutation, loginStatus, loginError };
};
