import { createContext } from "react";
import { ModeContextType } from "./types";

export const ModeContext = createContext<ModeContextType | undefined>(undefined)
