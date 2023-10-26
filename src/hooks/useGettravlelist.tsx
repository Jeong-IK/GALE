import {  useQuery } from "@tanstack/react-query";
import { GeneralError, Gettravlearrayresponsetype } from "../types/type";
import { GettravlearrayAction } from "../api/mypageapi";

export const useGettravlearrayQuery = () => {
    const { data: travlelistData, isLoading, error, refetch } = useQuery<Gettravlearrayresponsetype, GeneralError, Gettravlearrayresponsetype, [string]>(
       ["travlelist"], GettravlearrayAction
    );
    return { travlelistData, isLoading, error, refetch };
};
