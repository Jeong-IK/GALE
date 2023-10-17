import { useQuery } from "@tanstack/react-query";
import {
    moreshowreviewrequestapi
} from "src/api/placeinfoapi";
import {
    GeneralError,
    GetdetailreviewresponseType
} from "../types/type";

export const useGetdetailreview = (board_review_number:number) => {
    const { data: reviewData, refetch } = useQuery<
    GetdetailreviewresponseType,
        GeneralError
    >(["placeinfo", board_review_number], () => moreshowreviewrequestapi(board_review_number));
    return { reviewData, refetch };
};