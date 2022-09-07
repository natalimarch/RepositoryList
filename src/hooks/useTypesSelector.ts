import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/store/index";

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector