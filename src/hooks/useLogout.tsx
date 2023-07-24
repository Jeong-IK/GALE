import { useMutation } from "@tanstack/react-query";
import { logoutAction } from "../api/memberapi";
import { GeneralResponse } from "../types/type";

const deleteAcountdata = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email");
};

export const useLogoutMutation = () => {
    const { mutate: logoutMutation } = useMutation<GeneralResponse, Error>({
        mutationFn: logoutAction,
        onSuccess: data => {
            deleteAcountdata();
            alert(data.message);
        },
        onError: error => {
            alert(error.message);
        },
    });
    return logoutMutation;
};
