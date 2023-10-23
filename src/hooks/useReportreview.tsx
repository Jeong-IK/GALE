import { useMutation } from "@tanstack/react-query";
import { reportreviewrequestapi } from "src/api/placeinfoapi";
import { GeneralResponse, ReportreviewrequestType } from "../types/type";

export const useReportmutation = () => {
    const { mutate: reportMutation } = useMutation<GeneralResponse, Error, ReportreviewrequestType>({
        mutationFn: reportreviewrequestapi,
        onSuccess: () => {
            alert("신고가 완료됬습니다.");
        },
        onError: error => {
            alert(error.message);
        },
    });
    return reportMutation;
};
