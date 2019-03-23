export interface IFormFiled<T> {
  value: string;
  name: string;
  className?: string;
  onChange(e: React.ChangeEvent<T>): void;
}

export interface ITextFiled<T> extends IFormFiled<T> {
  forId?: string;
  label?: string;
}

export interface ISelectFiled<T> extends IFormFiled<T> {
  options: ISelectOptions[];
}

export interface ISelectOptions {
  value: string;
  label: string;
}
