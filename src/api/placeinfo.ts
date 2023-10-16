import { ReportreviewrequestType, GeneralResponse } from "src/types/type";
import axios from "./axiosInstance";

// 여행 계획 리스트 요청 API
export const GettravleplannerAction = async (
    inputData: ReportreviewrequestType
): Promise<GeneralResponse> => {
    const axiosResult = await axios
        .get("/board/review/report", { params: inputData })
        .then(response => response.data.data);
    return axiosResult;
};
