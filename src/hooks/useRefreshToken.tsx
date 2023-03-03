import { useMutation } from "@tanstack/react-query";
import { refreshTokenAction } from "../api/memberApi";
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
    >(refreshTokenAction, {
        onSuccess: data => {
            setStorageData(data);
        },
        onError: error => Promise.reject(error),
    });

    return { refreshMutate };
};
