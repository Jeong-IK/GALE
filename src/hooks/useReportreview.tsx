import { useMutation } from "@tanstack/react-query";
import { GettravleplannerAction } from "src/api/placeinfo";
import { GeneralResponse } from "../types/type";

export const useLogoutMutation = () => {
    const { mutate: logoutMutation } = useMutation<GeneralResponse, Error>({
        mutationFn: GettravleplannerAction,
        onSuccess: () => {
            console.log("success");
        },
        onError: error => {
            alert(error.message);
        },
    });
    return logoutMutation;
};
