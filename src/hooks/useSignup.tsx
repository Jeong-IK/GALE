import { useMutation } from "@tanstack/react-query";
import { signupAction } from "../api/memberapi";
import { useModal } from "../stores/store";
import { GeneralError, GeneralResponse, SignupProps } from "../types/type";

export const useSignupMutation = () => {
    const { setModaloption } = useModal();
    const { mutate: signupMutation } = useMutation<
        GeneralResponse,
        GeneralError,
        SignupProps
    >({
        mutationFn: signupAction,
        onSuccess: data => {
            alert(data.message);
            setModaloption("logIn");
        },
        onError: error => {
            alert(error.response.data.message);
        },
    });
    return signupMutation;
};
