// import { FormValuesProps } from "@/types/form-values";
import { FormValuesProps } from '@/types/form-values';
import { PhotovoltaicData } from '@/types/photovoltaic-component-data';
import { FC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

export const Input = styled.input<ErrorProps>`
   padding: 0.5rem;
   border-radius: 4px;
   border: none;
   outline: none;
   color: #16353a;
   background-color: #e7e6e6;

   &:focus {
      box-shadow: 0 0 10px #16353a;
   }
`;

export const ErrorText = styled.p<ErrorProps>`
   color: ${({ error }) => (error ? '#FF4500' : '#37474F')};
   margin: 0;
`;

export const Label = styled.label`
   color: #00a75d;
`;

type InputProps = {
   type?: string;
   value?: any;
   required?: boolean;
   placeholder?: string;
   handleChange?: any;
   label?: Path<FormValuesProps>;
   name: Path<PhotovoltaicData>;
   register: UseFormRegister<PhotovoltaicData>;
};

interface ErrorProps {
   error?: string;
}

const InputField: FC<InputProps & ErrorProps> = ({
   name,
   type,
   value,
   label,
   error,
   register,
   required,
   placeholder,
   handleChange
}) => {
   return (
      <>
         <Label>{label}</Label>
         <Input
            type={type}
            // value={value}
            placeholder={placeholder}
            {...register(name, {
               required,
               onChange: (e) => handleChange(e),
               value: value
            })}
         />
         {error && <ErrorText error={error}>{error}</ErrorText>}
      </>
   );
};

export default InputField;
