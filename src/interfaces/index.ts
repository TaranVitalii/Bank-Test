import {MutableRefObject} from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
  TextInput,
} from 'react-native';

export interface IconProps {
  width: number;
  height: number;
  color?: string;
  offsetTop: number;
  offsetLeft: number;
  offsetRight: number;
  offsetBottom: number;
}

export interface HeaderProps {
  title: string;
  isBack: boolean;
  onPress: any;
}

type Dispatch<boolean> = (value: boolean) => void;

export interface CustomInputProps {
  colors: string[];
  selectedColors: string[];
  innerRef: any;
  value: string;
  returnKeyType: string;
  onChange: (value: string) => void;
  onKeyPress: (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
  width: number;
  underlineWidth: number;
}

export type OnChangeTypes = {
  value: NativeSyntheticEvent<TextInputChangeEventData>;
  setDirty: Dispatch<boolean>;
};

export type NativeEventProps = NativeSyntheticEvent<TextInputKeyPressEventData>;

interface InputsRefsProps {
  first: MutableRefObject<TextInput | null>;
  second: MutableRefObject<TextInput | null>;
  thirty: MutableRefObject<TextInput | null>;
  fourth: MutableRefObject<TextInput | null>;
}

export interface CardInputProps {
  inputsRef: InputsRefsProps;
  firstNumberPart: string;
  firstOnChangeHandler: (value: string) => void;
  onKeyFirstInputPressHandler: (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => void;
  secondNumberPart: string;
  secondOnChangeHandler: (value: string) => void;
  onKeySecondInputPressHandler: (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => void;
  thirtyNumberPart: string;
  thirtyOnChangeHandler: (value: string) => void;
  onKeyThirtyInputPressHandler: (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => void;
  fourthNumberPart: string;
  fourthOnChangeHandler: (value: string) => void;
  onKeyFourthInputPressHandler: (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => void;
}

export interface TransferCardProps {
  title: string;
  firstNumberPart: string;
  secondNumberPart: string;
  thirtyNumberPart: string;
  fourthNumberPart: string;
}

export interface MoneyInputProps {
  value: number;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export interface SwitchFieldProps {
  onValueChange: () => void;
  value: boolean;
}

export interface TransferValueProps {
  cash: number;
  currency: string;
}

export interface VerifyFieldProps {
  onPress: () => void;
}
