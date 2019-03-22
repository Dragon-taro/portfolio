export interface ITextFiled<T> {
  value: string;
  name: string;
  className?: string;
  onChange(e: React.ChangeEvent<T>): void;
}
