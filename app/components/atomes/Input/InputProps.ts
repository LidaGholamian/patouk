import { FieldError } from "react-hook-form";
import { ComponentBase } from "../../types/component-base.type";
import { InputHTMLAttributes } from "react";

type TextboxType = 'text' | 'number' | 'email' | 'password' | 'search';

export type InputProps = Omit <InputHTMLAttributes<HTMLInputElement>, 'size'> & ComponentBase & {
    id: string;
    name: string;
    type?: TextboxType;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: FieldError | undefined;
  } 