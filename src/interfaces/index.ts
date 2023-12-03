import { InputBaseProps, TextFieldVariants } from "@mui/material";
import { HTMLInputTypeAttribute, ReactNode } from "react";

export interface InputProps {
  id?: string;
  placeholder?: string;
  type?: string;
  register?: any;
  errorMessage?: string;
}

export type AdminAccount = {
  email: string;
  password: string;
}

export type LoginInputs =  {
  email: string;
  password: string;
}

type HtmlFieldType = HTMLInputTypeAttribute;

export type InputControllerProps = {
  name: string;
  title?: string;
  isRequired?: boolean;
  isPassword?: boolean;
  placeholder?: string;
  defaultValue?: string;
  isMultiLine?: boolean;
  fieldType?: HtmlFieldType;
  margin?: InputBaseProps['margin'];
  inputAdornmentIcon?: ReactNode;
  StartIcon?: ReactNode;
  minRows?: string;
  maxRows?: string;
  variant?: TextFieldVariants;
  disabled?: boolean;
  readOnly?: boolean;
  inputProps?: string;
  size?: InputBaseProps['size'];
};