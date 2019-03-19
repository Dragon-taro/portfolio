export interface ITextFiled<T> {
  value: string;
  name: string;
  className: string;
  onChange(e: React.FormEvent<T>): void;
}
