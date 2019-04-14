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

export interface IGetQuestions {
  page?: number;
}

export interface IQuestions {
  questions?: IQuestion[];
  totalPage?: number;
  error?: string;
  loading: boolean;
}

export interface IOneQuestion {
  question?: IQuestion;
  error?: string;
  loading: boolean;
}
