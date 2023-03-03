import { useMutation } from "@tanstack/react-query";
import { existNicknameAction } from "../api/memberApi";
import { ErrorMsg } from "../components/common/errormsg";
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
            ErrorMsg(data.message);
        },
        onError: error => {
            alert(error.response.data.message);
        },
    });
    return existNicknameMutation;
};
