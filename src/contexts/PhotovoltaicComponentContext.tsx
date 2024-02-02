import React, { createContext, useState } from 'react';
import { PhotovoltaicData } from '../types/photovoltaic-component-data';
import { makePhotoVoltaicService } from '@/configs/factories/photovoltaic-component';
import { ContextProps, PhotovoltaicComponentProps } from '@/types/photovoltaic-component-context';

const PhotovoltaicComponentContext = createContext<ContextProps>({
   photovoltaicData: null,
   setPhotovoltaicData: () => null,
   loadPhotovoltaicData: async () => {},
   createPhotovoltaicComponent: async () => {},
   deletePhotovoltaicComponent: async () => {},
   editPhotovoltaicComponent: async () => {}
});

const PhotovoltaicComponentProvaider: React.FC<PhotovoltaicComponentProps> = ({ children }) => {
   const [photovoltaicData, setPhotovoltaicData] = useState<PhotovoltaicData[]>([]);
   const photovoltaicService = makePhotoVoltaicService();

   const loadPhotovoltaicData = async () => {
      const {
         data: { body, statusCode }
      } = await photovoltaicService.loadPhotovoltaicData();
      if (statusCode !== 200) {
         // TODO: implement error handling with a toast
         return;
      }

      setPhotovoltaicData(body);
   };

   const createPhotovoltaicComponent = async (data: PhotovoltaicData) => {
      try {
         await photovoltaicService.createPhotovoltaic({ data });
      } catch (error) {
         // TODO: implement error handling
         console.error(error);
      }
   };

   const deletePhotovoltaicComponent = async (id?: number) => {
      try {
         await photovoltaicService.deletePhotovoltaic(id!);
         await loadPhotovoltaicData();
      } catch (error) {
         console.error(error);
      }
   };

   const editPhotovoltaicComponent = async (data: PhotovoltaicData) => {
      try {
         await photovoltaicService.editPhotovoltaic(data.id!, { data });
         setPhotovoltaicData((prevData) => ({
            ...prevData,
            ...data
         }));
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <PhotovoltaicComponentContext.Provider
         value={{
            photovoltaicData: photovoltaicData,
            setPhotovoltaicData: setPhotovoltaicData,
            createPhotovoltaicComponent,
            loadPhotovoltaicData,
            deletePhotovoltaicComponent,
            editPhotovoltaicComponent
         }}
      >
         {children}
      </PhotovoltaicComponentContext.Provider>
   );
};

export { PhotovoltaicComponentContext, PhotovoltaicComponentProvaider };
