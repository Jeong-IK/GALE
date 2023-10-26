import { EditprofileAction } from "src/api/mypageapi";
import { useMutation } from "@tanstack/react-query";
import { Editprofilerequesttype, GeneralError, GeneralResponse } from "src/types/type";

export const useprofileeditMutation = () => {
    const { mutate: editprofileMutation, error: editprofileError } =
        useMutation<GeneralResponse, GeneralError, Editprofilerequesttype>({
            mutationFn: (props: Editprofilerequesttype) =>
            EditprofileAction(props),
            onSuccess: response => {
                console.log(response);
            },
            onError: error => {
                console.log(error);
            },
        });
    return { editprofileMutation, editprofileError };
};
