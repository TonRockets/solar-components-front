import { useForm } from 'react-hook-form';

import TextField from '../molecules/forms/TextField';
import { PhotovoltaicData } from '@/types/photovoltaic-component-data';
import { ChangeEvent, FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotovoltaicComponentContext } from '@/contexts/PhotovoltaicComponentContext';
import { Button } from '../atoms/buttons/Button';

type EditationFormProps = {
   content: PhotovoltaicData;
   handleDate: (date: string) => string;
};

const EditationForm: FC<EditationFormProps> = ({ content, handleDate }) => {
   const navigate = useNavigate();
   const { editPhotovoltaicComponent } = useContext(PhotovoltaicComponentContext);
   const { register, handleSubmit } = useForm<PhotovoltaicData>();
   const [editedData, setEditedData] = useState<PhotovoltaicData>(content);

   const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setEditedData((prevData) => ({
         ...prevData,
         [name]: value
      }));
   };

   const onSubmitEdited = async () => {
      await editPhotovoltaicComponent(editedData);
      navigate('/');
   };

   return (
      <>
         <form onSubmit={handleSubmit(onSubmitEdited)}>
            <TextField
               required
               name="name"
               register={register}
               inputProps={{
                  value: content.name,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="segmentType"
               register={register}
               inputProps={{
                  value: content.segmentType,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="group"
               register={register}
               inputProps={{
                  value: content.group,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="height"
               register={register}
               inputProps={{
                  value: content.height,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="width"
               register={register}
               inputProps={{
                  value: content.width,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="depth"
               register={register}
               inputProps={{
                  value: content.depth,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="grossWeight"
               register={register}
               inputProps={{
                  value: content.grossWeight,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="netWeight"
               register={register}
               inputProps={{
                  value: content.netWeight,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <Button type="submit" variant="primary">
               Save
            </Button>
         </form>
      </>
   );
};

export default EditationForm;
