import { useMutation } from "@tanstack/react-query";
import {
    existNicknameAction,
    loginAction,
    logoutAction,
    signupAction,
} from "../api/memberapi";
import { useModal } from "../stores/store";
import {
    ExistNicknameProps,
    GeneralError,
    GeneralResponse,
    LoginProps,
    LoginResponse,
    SignupProps,
} from "../types/type";

// const getStorageData = () => {
//     const storageData = localStorage.getItem("accessToken");
//     return storageData ? JSON.parse(storageData) : null;
// };

// const clearStorageData = () => {
//     localStorage.clear();
// };

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

export const useSignupMutation = () => {
    const { setModaloption } = useModal();
    const { mutate: signupMutation } = useMutation<
        GeneralResponse,
        GeneralError,
        SignupProps
    >({
        mutationFn: signupAction,
        onSuccess: data => {
            alert(data.message);
            setModaloption("logIn");
        },
        onError: error => {
            alert(error.response.data.message);
        },
    });
    return signupMutation;
};

export const useExistNicknameMutation = () => {
    const { mutate: existNicknameMutation } = useMutation<
        GeneralResponse,
        GeneralError,
        ExistNicknameProps
    >({
        mutationFn: existNicknameAction,
        onSuccess: data => {
            alert(data.message);
        },
        onError: error => {
            alert(error.response.data.message);
        },
    });
    return existNicknameMutation;
};

export const useLogoutMitation = () => {
    const { mutate: logoutMutation } = useMutation<GeneralResponse, Error>({
        mutationFn: logoutAction,
        onSuccess: data => {
            alert(data.message);
        },
        onError: error => {
            alert(error.message);
        },
    });
    return logoutMutation;
};
