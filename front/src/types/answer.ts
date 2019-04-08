export interface IAnswer {
  id?: number;
  questionId: string;
  text: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IGetAnswer {
  questionId: string;
}

export interface IOneAnswer {
  answer?: IAnswer;
  loading: boolean;
  error?: string;
}
