import { useContext, useEffect } from 'react';

import { PhotovoltaicComponentContext } from '@/contexts/PhotovoltaicComponentContext';
import { PhotovoltaicData } from '@/types/photovoltaic-component-data';
import RegistrationForm from '@/components/organisms/RegistrationForm';

const Home = () => {
   const { loadPhotovoltaicData, createPhotovoltaicComponent } =
      useContext(PhotovoltaicComponentContext);

   const onSubmit = async (data: PhotovoltaicData) => {
      await createPhotovoltaicComponent(data);
   };

   useEffect(() => {
      loadPhotovoltaicData();
   }, []);

   return (
      <div>
         <RegistrationForm onSubmit={onSubmit} />
      </div>
   );
};

export default Home;
