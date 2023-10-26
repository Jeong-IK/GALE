import {GetprofileAction} from "src/api/mypageapi";
import {  useQuery } from "@tanstack/react-query";
import { GeneralError, Getprofileresponsetype } from "../types/type";

export const useGetprofileinfo = () => {
    const { data: profileData, refetch } = useQuery<
    Getprofileresponsetype,
    GeneralError
>(["profileinfo"], GetprofileAction);
return { profileData, refetch };
}