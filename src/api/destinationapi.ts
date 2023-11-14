import { RegioncontetType } from "src/types/type";
import axios from "./axiosInstance";

export const getboardrequest = async (
    region_Number: number
): Promise<RegioncontetType[]> => {
    const axiosResult = await axios
        .get("/board/region", { params: {region_Number} })
        .then(response => response.data.data);
    return axiosResult;
};
