import { useMutation } from "@tanstack/react-query";
import {
    GeneralError,
    GeneralResponse,
    DeleteTrablelistProptype,
} from "../types/type";
import { DeleteTravlelistAction } from "../api/mypageapi";

export const useDeletetravleMutation = () => {
    const { mutate: deletetravlelistMutation, error: deletetravlelistError } =
        useMutation<GeneralResponse, GeneralError, DeleteTrablelistProptype>({
            mutationFn: (props: DeleteTrablelistProptype) =>
                DeleteTravlelistAction(props),
            onSuccess: response => {
                console.log(response);
            },
            onError: error => {
                console.log(error);
            },
        });
    return { deletetravlelistMutation, deletetravlelistError };
};
