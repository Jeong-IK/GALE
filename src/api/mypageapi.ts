import axios from "./axiosInstance";
import {
    GeneralResponse,
    DeleteTrablelistProptype,
    Gettravlearrayresponsetype,
    Getprofileresponsetype,
    Editprofilerequesttype
} from "../types/type";

// 여행 계획 리스트 요청 API
export const GettravlearrayAction = async (): Promise<Gettravlearrayresponsetype> => {
    const axiosResult = await axios
            .get("/planner/list")
            .then(response => {
                console.log(response.data.data);
                return response.data.data});
        return axiosResult;
};

// 프로필 정보 가져오기
export const GetprofileAction = async (): Promise<Getprofileresponsetype> => {
    const axiosResult = await axios
            .get("/user/profile")
            .then(response => {
                console.log(response.data.data);
                return response.data.data});
        return axiosResult;
};

// 프로필 수정
export const EditprofileAction = async (props:Editprofilerequesttype): Promise<GeneralResponse> => {
    const axiosResult = await axios
            .patch("/user/profile", props)
            .then(response => response.data.data);
        return axiosResult;
}

// // 상세 여행 계획 요청 API
// export const GettravleplannerAction =
//     async (): Promise<GetTravlelistresponse> => {
//         const axiosResult = await axios
//             .get("/planner")
//             .then(response => (response.data));
//         return axiosResult;
//     };

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
