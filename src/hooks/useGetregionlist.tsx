import {getboardrequest} from "src/api/destinationapi";
import {  useQuery } from "@tanstack/react-query";
import { RegioncontetType, GeneralError } from "../types/type";

export const useGetregionlist = (region_number: number) => {
    const { data: regionData, refetch } = useQuery<RegioncontetType[], GeneralError>(
      ["regionlist", region_number],
      () => getboardrequest(region_number)
    );
  
    return { regionData, refetch };
  };

