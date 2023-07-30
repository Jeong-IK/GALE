import { useMutation } from "@tanstack/react-query";
import { GeneralError, GetTravlelistresponse } from "../types/type";
import { GettravleplannerAction } from "../api/mypageapi";

export const useGettravleMutation = () => {
    const { mutate: travlelistMutation, error: travlelistError } = useMutation<
        GetTravlelistresponse,
        GeneralError
    >({
        mutationFn: () => GettravleplannerAction(),
        onSuccess: response => {
            console.log(response);
        },
        onError: error => {
            alert(error.response.data.message);
        },
    });
    return { travlelistMutation, travlelistError };
};
