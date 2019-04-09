export interface IFormElement<T> {
  value: string;
  name: string;
  className?: string;
  forId?: string;
  label?: string;
  required?: boolean;
  onChange(e: React.ChangeEvent<T>): void;
}

export interface ISelectFiled<T> extends IFormElement<T> {
  options: ISelectOptions[];
}

export interface ISelectOptions {
  value: string;
  label: string;
}
