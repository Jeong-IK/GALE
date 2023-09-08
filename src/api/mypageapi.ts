import axios from "./axiosInstance";
import {
    GeneralResponse,
    DeleteTrablelistProptype,
    GetTravlelistresponse,
} from "../types/type";

// 여행 계획 리스트 요청 API
export const GettravleplannerAction =
    async (): Promise<GetTravlelistresponse> => {
        const axiosResult = await axios
            .get("/planner")
            .then(response => (response.data));
        return axiosResult;
    };

// 여행 기록 삭제 API
export const DeleteTravlelistAction = async (
    props: DeleteTrablelistProptype
): Promise<GeneralResponse> => {
    const axiosResult = await axios
        .delete(`/planner/${props.planner_idx}`
        )
        .then(response => response.data);
    return axiosResult;
};
