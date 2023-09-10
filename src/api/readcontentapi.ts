import axios from "./axiosInstance";
import { ReadplacecontentresponseType } from "../types/type";

export const getContentinfo = async (
    board_Number: string
): Promise<ReadplacecontentresponseType> => {
    const axiosResult = await axios
        .get("/board", { params: { board_Number } })
        .then(response => {
            console.log(response.data.data);
            return response.data.data;
        });
    return axiosResult;
};

export const getContentreview = async (
    board_Review_Number: string
): Promise<ReadplacecontentresponseType> => {
    const axiosResult = await axios
        .get("/board/review", { params: { board_Review_Number } })
        .then(response => response.data.data);
    return axiosResult;
};
