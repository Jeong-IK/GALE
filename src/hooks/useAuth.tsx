import { useQuery } from "@tanstack/react-query";
import { loginAction } from "../api/memberapi";
import { LoginProps, LoginResponse } from "../types/type";

const getStorageData = () => {
    const storageData = localStorage.getItem("accessToken");
    return storageData ? JSON.parse(storageData) : null;
};

const clearStorageData = () => {
    localStorage.clear();
};

const setStorageData = (responseData: LoginResponse) => {
    localStorage.setItem("accessToken", responseData.accessToken);
    localStorage.setItem("refreshToken", responseData.refreshToken);
};

export const useAuth = (inputData: LoginProps) => {
    const { data } = useQuery({
        queryKey: ["loginQuery", inputData],
        queryFn: () => loginAction(inputData),
        initialData: getStorageData,
        onSuccess: (responseData: LoginResponse) => {
            if (!responseData) clearStorageData();
            setStorageData(responseData);
        },
    });
};
