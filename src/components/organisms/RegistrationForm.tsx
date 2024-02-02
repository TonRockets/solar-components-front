import { FC } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '../atoms/buttons/Button';
import TextField from '@/components/molecules/forms/TextField';
import { PhotovoltaicData } from '@/types/photovoltaic-component-data';

export const Form = styled.form`
   display: grid;
   margin: 16px auto;
   width: 60%;

   @media (max-width: 600px) {
      width: 80%;

      button {
         margin: 16px 0;
      }
   }
`;

// Refactor, this schema are incompatible
// const schema = yup.object().shape({
//    gtin: yup.string().required(),
//    name: yup.string().required(),
//    segmentType: yup.string().required(),
//    group: yup.string().required(),
//    height: yup.number().required(),
//    width: yup.number().required(),
//    depth: yup.number().required(),
//    grossWeight: yup.number().required(),
//    netWeight: yup.number().required()
// });

interface RegistrationFormProps {
   onSubmit: SubmitHandler<PhotovoltaicData>;
}

const RegistrationForm: FC<RegistrationFormProps> = ({ onSubmit }) => {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<PhotovoltaicData>({
      // resolver: yupResolver(schema)
   });

   return (
      <Form onSubmit={handleSubmit(onSubmit)}>
         <TextField
            required
            name="gtin"
            label="Gtin:"
            register={register}
            error={errors.gtin?.message}
            inputProps={{ placeholder: "Enter gtin number, i.e., '1553243'" }}
         />
         <TextField
            required
            name="name"
            label="Name:"
            register={register}
            error={errors.name?.message}
            inputProps={{ placeholder: "Enter name, i.e., 'Welli'" }}
         />
         <TextField
            required
            name="segmentType"
            label="Segment Type:"
            register={register}
            error={errors.segmentType?.message}
            inputProps={{ placeholder: "Enter segment type, i.e., 'Ongrid'" }}
         />
         <TextField
            required
            name="group"
            label="Group:"
            register={register}
            error={errors.group?.message}
            inputProps={{
               placeholder: "Enter group, i.e., 'Modulo'"
            }}
         />
         <TextField
            required
            name="height"
            label="Height:"
            register={register}
            error={errors.height?.message}
            inputProps={{
               placeholder: "Enter height, i.e., '2'"
            }}
         />
         <TextField
            required
            name="width"
            label="Width:"
            register={register}
            inputProps={{
               placeholder: "Enter width, i.e., '2'"
            }}
            error={errors.width?.message}
         />
         <TextField
            required
            name="depth"
            label="Depth:"
            register={register}
            error={errors.depth?.message}
            inputProps={{
               placeholder: "Enter depth, i.e., '34"
            }}
         />
         <TextField
            required
            name="grossWeight"
            label="Gross Weight:"
            register={register}
            error={errors.grossWeight?.message}
            inputProps={{
               placeholder: "Enter Gross Weight, i.e., '423"
            }}
         />
         <TextField
            required
            name="netWeight"
            label="Net Weight:"
            register={register}
            error={errors.netWeight?.message}
            inputProps={{
               placeholder: "Enter Net Weight, i.e., '4324"
            }}
         />
         <Button type="submit" variant="primary">
            Save
         </Button>
      </Form>
   );
};

export default RegistrationForm;
