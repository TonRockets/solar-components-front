import { FC, InputHTMLAttributes } from 'react';
import Input from '../../atoms/inputs/Input';
import styled from 'styled-components';
import { Path, UseFormRegister } from 'react-hook-form';
import { PhotovoltaicData } from '@/types/photovoltaic-component-data';
import { FormValuesProps } from '@/types/form-values';

export const Field = styled.div`
   display: grid;
   grid-gap: 8px;
   margin-bottom: 24px;

   @media (max-width: 600px) {
      margin: 10px 0;
   }
`;

type TextFieldProps = {
   error?: string;
   required?: boolean;
   label?: Path<FormValuesProps>;
   name: Path<PhotovoltaicData>;
   register: UseFormRegister<PhotovoltaicData>;
   inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

const TextField: FC<TextFieldProps> = ({
   name,
   label,
   error,
   required,
   register,
   inputProps
}) => {
   return (
      <Field>
         <Input
            name={name}
            label={label}
            error={error}
            register={register}
            required={required}
            type={inputProps?.type}
            value={inputProps?.value}
            handleChange={inputProps?.onChange}
            placeholder={inputProps?.placeholder}
         />
      </Field>
   );
};

export default TextField;
