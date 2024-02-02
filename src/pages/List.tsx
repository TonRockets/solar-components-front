import { FC, useContext, useEffect } from 'react';
import { PhotovoltaicComponentContext } from '@/contexts/PhotovoltaicComponentContext';
import ItemList from '@/components/organisms/ItemList';

const List: FC = () => {
   const { photovoltaicData } = useContext(PhotovoltaicComponentContext);

   useEffect(() => {}, [photovoltaicData]);

   return (
      <>
         <ItemList data={photovoltaicData} title="Photovoltaic Component" />
      </>
   );
};

export default List;
