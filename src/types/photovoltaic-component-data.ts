import { GroupNameEnum } from "./groupNameEnum";
import { SegmentTypeEnum } from "./segmentTypeEnum";

export type PhotovoltaicData = {
   id?: number;
   gtin: string;
   name: string;
   segmentType: SegmentTypeEnum;
   group: GroupNameEnum;
   height: number;
   width: number;
   depth: number;
   grossWeight: number;
   netWeight: number;
};
