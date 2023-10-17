import { useQuery } from "@tanstack/react-query";
import {
    getContentinfo,
    getReviewlist,
} from "src/api/readcontentapi";
import {
    GeneralError,
    GetplacereivewrequestType,
    GetplacereviewresponseType,
    ReadplacecontentresponseType,

} from "../types/type";

export const useGetplaceinfo = (board_Number: number) => {
    const { data: placeinfoData, refetch } = useQuery<
        ReadplacecontentresponseType,
        GeneralError
    >(["placeinfo", board_Number], () => getContentinfo(board_Number));
    return { placeinfoData, refetch };
};

export const useGetreviewlistdata = (props: GetplacereivewrequestType) => {
    const { data: reviewlistData, refetch } = useQuery<
        GetplacereviewresponseType[],
        GeneralError
    >(["reviewlsitdata", props], () => getReviewlist(props));
    return { reviewlistData, refetch };
};


