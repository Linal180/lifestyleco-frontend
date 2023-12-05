import { InputBaseProps, TextFieldVariants } from "@mui/material";
import { HTMLInputTypeAttribute, ReactNode } from "react";


export interface InputProps {
  id?: string;
  placeholder?: string;
  type?: string;
  register?: any;
  errorMessage?: string;
}

export type LoginInputs =  {
  email: string;
  password: string;
}

export type RegisterInputs = LoginInputs & {
  name: string;
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

export type LoginResponse = {
  token: string;
}

export type Exercise = {
  id: number
  title: string
  description: string
  require: string
  perform: string
  video: string
}