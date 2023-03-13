import { useMutation } from "@tanstack/react-query";
import { existNicknameAction } from "../api/memberApi";
import {
    ExistNicknameProps,
    GeneralError,
    GeneralResponse,
} from "../types/type";

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
