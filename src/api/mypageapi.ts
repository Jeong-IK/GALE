import axios from "./axiosInstance";
import {
    GeneralResponse,
    DeleteTrablelistProptype,
    GetTravlelistresponse,
} from "../types/type";

export const GettravleplannerAction =
    async (): Promise<GetTravlelistresponse> => {
        const accessToken = localStorage.getItem("accessToken");
        const axiosResult = await axios
            .get("/planner", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then(response => response.data);
        return axiosResult;
    };

export const DeleteTravlelistAction = async (
    props: DeleteTrablelistProptype
): Promise<GeneralResponse> => {
    const accessToken = localStorage.getItem("accessToken");
    const axiosResult = await axios
        .delete(`/planner/${props.planner_idx}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        .then(response => response.data);
    return axiosResult;
};
