export type QuestionType = {
  que: string;
  img: string;
  optionA: string;
  optionB: string;
  optionC?: string;
  optionD?: string;
};

export type useQuestionModalType = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

export type AnswerType = { src: string; title: string; description: string };
