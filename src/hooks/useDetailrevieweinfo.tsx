import { useQuery } from "@tanstack/react-query";
import {
    moreshowreviewrequestapi
} from "src/api/placeinfoapi";
import {
    GeneralError,
    GetdetailreviewresponseType
} from "../types/type";

export const useGetdetailreview = (board_review_Number:number) => {
    const { data: reviewData, refetch } = useQuery<
    GetdetailreviewresponseType,
        GeneralError
    >(["morereview", board_review_Number], () => moreshowreviewrequestapi(board_review_Number));
    return { reviewData, refetch };
};