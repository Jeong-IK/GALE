import { ReportreviewrequestType, GeneralResponse, GetdetailreviewresponseType } from "src/types/type";
import axios from "./axiosInstance";

// 여행 계획 리스트 요청 API
export const reportreviewrequestapi = async (
    inputData: ReportreviewrequestType
): Promise<GeneralResponse> => {
    const dataToSend =  {...inputData} ;
    const axiosResult = await axios
        .post("/board/review/report", dataToSend)
        .then(response => response.data.data);
    return axiosResult;
};

export const moreshowreviewrequestapi = async (
    board_Review_Number:number
) : Promise<GetdetailreviewresponseType> => {
    const axiosResult = await axios
    .get("/board/review", {
        params: {
             board_Review_Number,
        },
    })
    .then(response =>  {console.log(response.data.data);
        return response.data.data});
    return axiosResult;
}
 