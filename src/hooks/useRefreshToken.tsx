import { useMutation } from "@tanstack/react-query";
import { refreshTokenAction } from "../api/memberapi";
import {
    GeneralError,
    RefreshTokenResponse,
    RefreshTokenProps,
} from "../types/type";

const setStorageData = (responseData: RefreshTokenResponse) => {
    localStorage.setItem("accessToken", responseData.message);
};

export const useRefreshToken = () => {
    const { mutate: refreshMutate } = useMutation<
        RefreshTokenResponse,
        GeneralError,
        RefreshTokenProps
    >({
        mutationFn: refreshTokenAction,
        onSuccess: data => {
            setStorageData(data);
        },
        onError: error => Promise.reject(error),
    });

    return refreshMutate;
};