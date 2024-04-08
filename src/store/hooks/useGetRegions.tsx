import { useSelector } from "react-redux";
import { RootState } from "..";

export const useGetRegions = () => {
  const regions: string[] = useSelector(
    (state: RootState) => state.regionsReducer.regions
  );

  return { regions };
};
