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
    const { mutate: loginMutation } = useMutation<
        LoginResponse,
        GeneralError,
        LoginProps
    >({
        mutationFn: (inputData: LoginProps) => loginAction(inputData),
        onSuccess: data => {
            setStorageData(data);
        },
        onError: error => error.response?.data.message,
    });
    return loginMutation;
};

export const useSignupMutation = () => {
    const { setModaloption } = useModal();
    const { mutate: signupMutation } = useMutation<
        GeneralResponse,
        Error,
        SignupProps
    >({
        mutationFn: signupAction,
        onSuccess: data => {
            alert(data.message);
            setModaloption("logIn");
        },
        onError: error => {
            alert(error);
            // reset();
        },
    });
    return signupMutation;
};

export const useExistNicknameMutation = () => {
    const { mutate: existNicknameMutation } = useMutation<
        GeneralResponse,
        Error,
        ExistNicknameProps
    >({
        mutationFn: existNicknameAction,
        onSuccess: data => {
            console.log(data.message);
        },
        onError: error => {
            console.log(error.message);
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
