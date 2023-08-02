import {  useQuery } from "@tanstack/react-query";
import { GeneralError, GetTravlelistresponse } from "../types/type";
import { GettravleplannerAction } from "../api/mypageapi";

export const useGettravleQuery = () => {
    const { data: travlelistData, isLoading, error, refetch } = useQuery<GetTravlelistresponse, GeneralError, GetTravlelistresponse, [string]>(
       ["travlelist"], GettravleplannerAction
    );
    return { travlelistData, isLoading, error, refetch };
};
