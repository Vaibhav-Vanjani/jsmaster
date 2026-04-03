import { createContext ,useContext, useState} from "react";

export const QuestionnaireContext = createContext<{ showIncorrectAnswerModal: {incorrectAnswerModal:boolean,correctAnswerModal:boolean},
  setShowIncorrectAnswerModal: React.Dispatch<React.SetStateAction<{incorrectAnswerModal:boolean,correctAnswerModal:boolean}>>} | null>(null);

export function useQuestionnaire() {
  const context = useContext(QuestionnaireContext);

  if (!context) {
    throw new Error("useQuestionnaire must be used within QuestionnaireContextProvider");
  }

  return context;
}

export default function QuestionnaireContextProvider({children}:{ children: React.ReactNode }){

    const [showIncorrectAnswerModal,setShowIncorrectAnswerModal] = useState({incorrectAnswerModal:false,correctAnswerModal:false});
    
    const value = {showIncorrectAnswerModal,setShowIncorrectAnswerModal};

    return <QuestionnaireContext.Provider value={value}>{children}</QuestionnaireContext.Provider>
}