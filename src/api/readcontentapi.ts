import axios from "./axiosInstance";
import {
    GetplacereivewrequestType,
    GetplacereviewresponseType,
    ReadplacecontentresponseType,
    ReadreviewresponseType,
} from "../types/type";

export const getContentinfo = async (
    board_Number: number
): Promise<ReadplacecontentresponseType> => {
    const axiosResult = await axios
        .get("/board", { params: { board_Number } })
        .then(response => response.data.data);
    return axiosResult;
};

export const getReviewlist = async (
    props: GetplacereivewrequestType
): Promise<GetplacereviewresponseType[]> => {
    const axiosResult = await axios
        .get("/board/review/list", { params: props })
        .then(response => response.data.data.list);
    return axiosResult;
};

export const getDetailreview = async (
    board_Review_Number: number
): Promise<ReadreviewresponseType> => {
    const axiosResult = await axios
        .get("/board/review", { params: { board_Review_Number } })
        .then(response => response.data.data);
    return axiosResult;
};
