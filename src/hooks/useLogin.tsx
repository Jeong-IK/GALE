import { useMutation } from "@tanstack/react-query";
import { loginAction } from "../api/memberapi";
import { GeneralError, LoginProps, LoginResponse } from "../types/type";

const setStorageData = (responseData: LoginResponse) => {
    localStorage.setItem("accessToken", responseData.accessToken);
    localStorage.setItem("refreshToken", responseData.refreshToken);
};

export const useLoginMutation = () => {
    const {
        mutate: loginMutation,
        status: loginStatus,
        error: loginError,
    } = useMutation<LoginResponse, GeneralError, LoginProps>({
        mutationFn: (inputData: LoginProps) => loginAction(inputData),
        onSuccess: data => {
            setStorageData(data);
        },
    });
    return { loginMutation, loginStatus, loginError };
};
