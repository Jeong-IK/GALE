import { useQuery } from "@tanstack/react-query";
import { getContentinfo, getContentreview } from "src/api/readcontentapi";
import { GeneralError, ReadplacecontentresponseType } from "../types/type";

export const useGetplaceinfo = (board_Number: string) => {
    const { data: placeinfoData, refetch } = useQuery<
        ReadplacecontentresponseType,
        GeneralError
    >(["placeinfo", board_Number], () => getContentinfo(board_Number));
    return { placeinfoData, refetch };
};

export const useGetreviewdata = (board_Number: string) => {
    const { data: reviewData, refetch } = useQuery<
        ReadplacecontentresponseType,
        GeneralError
    >(["reviewdata", board_Number], () => getContentreview(board_Number));
    return { reviewData, refetch };
};
