import { ReactNode } from "react";
import { PhotovoltaicData } from "./photovoltaic-component-data";

export type PhotovoltaicComponentProps = {
    children: ReactNode;
};
 
export interface ContextProps {
    readonly photovoltaicData: PhotovoltaicData[] | null;
    readonly setPhotovoltaicData: (
        photovoltaicData: PhotovoltaicData[]
    ) => void;
    readonly loadPhotovoltaicData: () => Promise<void>;
    readonly createPhotovoltaicComponent: (data: PhotovoltaicData) => Promise<void>;
    readonly deletePhotovoltaicComponent: (id?: number) => Promise<void>;
    readonly editPhotovoltaicComponent: (data: PhotovoltaicData) => Promise<void>;
 }