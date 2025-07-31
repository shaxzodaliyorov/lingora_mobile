export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  errorMessage?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  isPhone?: boolean;
  isPassword?: boolean;
  [key: string]: any;
}
