import {UploadprofileimageAction} from "src/api/profileapi";
import { useMutation } from "@tanstack/react-query";
import {
    GeneralError,
    GeneralResponse,
    Uploadimagetype
} from "../types/type";

export const useUoloadprofileimage = () => {
    const { mutate: uploadimagemutate } = useMutation<
        GeneralResponse,
        GeneralError,
        Uploadimagetype
    >({
        mutationFn: (inputData: Uploadimagetype) =>
            UploadprofileimageAction(inputData),
        onSuccess: response => console.log(response),
        onError: error => console.log(error),
    });
    return {uploadimagemutate};
}