import { useMutation } from "@tanstack/react-query";
import { logoutAction } from "../api/memberapi";
import { GeneralResponse } from "../types/type";

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
