import {
    CategoryrisingresponseType,
    CategoryrisingrequestType,
} from "src/types/type";
import axios from "./axiosInstance";

export const getboardrequest = async (
    inputData: CategoryrisingrequestType
): Promise<CategoryrisingresponseType> => {
    const axiosResult = await axios
        .get("/board/list", { params: inputData })
        .then(response => {
            console.log(response.data.data.list);
            return response.data.data;
        });
    return axiosResult;
};
