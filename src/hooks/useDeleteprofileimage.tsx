import { useMutation } from "@tanstack/react-query";
import {DeleteprofileimageAction} from "src/api/profileapi";
import { GeneralError, GeneralResponse } from "src/types/type";

export const useDeleteprofileimage = () => {
        const { mutate: deleteprofileimageMutation, error: deleteprofileimageError } =
            useMutation<GeneralResponse, GeneralError>({
                mutationFn: DeleteprofileimageAction,
                onSuccess: response => {
                    console.log(response);
                },
                onError: error => {
                    console.log(error);
                },
            });
        return { deleteprofileimageMutation, deleteprofileimageError };
    };
