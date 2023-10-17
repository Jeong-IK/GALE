import { useMutation } from "@tanstack/react-query";
import { reportreviewrequestapi } from "src/api/placeinfoapi";
import { GeneralResponse, ReportreviewrequestType } from "../types/type";

export const useLogoutMutation = () => {
    const { mutate: logoutMutation } = useMutation<GeneralResponse, Error, ReportreviewrequestType>({
        mutationFn: reportreviewrequestapi,
        onSuccess: () => {
            console.log("success");
        },
        onError: error => {
            alert(error.message);
        },
    });
    return logoutMutation;
};
