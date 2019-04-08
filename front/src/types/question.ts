export interface IQuestion {
  id?: number;
  text: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ISetQuestion {
  text: string;
}

export interface IGetQuestion {
  id: string;
}

export interface IQuestions {
  questions?: IQuestion[];
  error?: string;
  loading: boolean;
}

export interface IOneQuestion {
  question?: IQuestion;
  error?: string;
  loading: boolean;
}
