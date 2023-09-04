import { useQuery } from "@tanstack/react-query";
import { getboardrequest } from "src/api/getboardapi";
import {
    GeneralError,
    CategoryrisingresponseType,
    CategoryrisingrequestType,
} from "../types/type";

export const useGetcategory = (inputData: CategoryrisingrequestType) => {
    const { data: categoryData, refetch } = useQuery<
        CategoryrisingresponseType,
        GeneralError
    >(
        [
            "categorylist",
            inputData.board_Category_Number,
            inputData.currentPage,
        ],
        () => getboardrequest(inputData)
    );
    return { categoryData, refetch };
};
