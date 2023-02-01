import { useMutation } from "@tanstack/react-query";
import { loginAction } from "../api/memberapi";
import { LoginProps, LoginResponse } from "../types/type";

// const getStorageData = () => {
//     const storageData = localStorage.getItem("accessToken");
//     return storageData ? JSON.parse(storageData) : null;
// };

// const clearStorageData = () => {
//     localStorage.clear();
// };

// const setStorageData = (responseData: LoginResponse) => {
//     localStorage.setItem("accessToken", responseData.accessToken);
//     localStorage.setItem("refreshToken", responseData.refreshToken);
// };

export const useLoginMutation = () => {
    const { mutate: loginMutation } = useMutation<
        LoginResponse,
        Error,
        LoginProps
    >({
        mutationFn: (inputData: LoginProps) => loginAction(inputData),
        onSuccess: data => {
            console.log(data);
        },
        onError: error => {
            console.log(error);
        },
    });
    return { loginMutation };
};
