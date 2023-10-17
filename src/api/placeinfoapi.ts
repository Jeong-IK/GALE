import { ReportreviewrequestType, GeneralResponse, GetdetailreviewresponseType } from "src/types/type";
import axios from "./axiosInstance";

// 여행 계획 리스트 요청 API
export const reportreviewrequestapi = async (
    inputData: ReportreviewrequestType
): Promise<GeneralResponse> => {
    const axiosResult = await axios
        .get("/board/review/report", { params: inputData })
        .then(response => response.data.data);
    return axiosResult;
};

export const moreshowreviewrequestapi = async (
    board_Review_number:number
) : Promise<GetdetailreviewresponseType> => {
    const axiosResult = await axios
    .get("/board/review", {params:board_Review_number})
    .then(response => response.data.data);
    return axiosResult;
}
 