import { useMutation } from "@tanstack/react-query";
import { reviewUploadAction } from "../api/uploadapi";
import {
    GeneralError,
    GeneralResponse,
    ReviewuploadProps,
} from "../types/type";

export const useReviewupload = () => {
    const { mutate: reviewmutate } = useMutation<
        GeneralResponse,
        GeneralError,
        ReviewuploadProps
    >({
        mutationFn: (inputData: ReviewuploadProps) =>
            reviewUploadAction(inputData),
        onSuccess: response => console.log(response),
        onError: error => console.log(error),
    });
    return reviewmutate;
};
