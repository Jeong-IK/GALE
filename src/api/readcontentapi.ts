import axios from "./axiosInstance";
import {ReadplacecontentresponseType } from "../types/type";

export const getContentinfo = async (
    board_idx : number
):Promise<ReadplacecontentresponseType> => {
    const axiosResult = await axios
    .get("/board", { params: board_idx })
    .then(response => {console.log(response);
    return response.data;});
    return axiosResult;
}


