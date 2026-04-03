import { useQuestionnaire } from "../../context/QuestionnareContext";

interface OptionList{
  [A:string]:string,
}

interface QuestionList{
  id:string,
  question:string,
  snippet:string,
  options:Partial<OptionList>,
  answer:string, 
  explanation:string,
  topic:string,
  difficulty:string,
}
export default function ResultCard(
  { question }: { question: QuestionList | undefined }
) {

 const {setShowIncorrectAnswerModal} = useQuestionnaire();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      
      <div className="bg-red-50 border border-red-300 rounded-2xl shadow-xl p-6 max-w-md w-full mx-4">
        
        {/* ❌ Header */}
        <div className="flex items-center gap-2 text-red-600 font-semibold text-lg">
          <span className="text-2xl">✖</span>
          Incorrect Answer
        </div>

        {/* ✅ Correct Answer */}
        <div className="mt-4 text-gray-800">
          <span className="font-semibold">Correct Answer: </span>
          <span className="text-green-600">
            {question?.answer ?? "N/A"}
          </span>
        </div>

        {/* 📘 Explanation */}
        <div className="mt-2 text-gray-700 text-sm">
          <span className="font-semibold">Explanation: </span>
          {question?.explanation ?? "No explanation available"}
        </div>

        {/* 🔘 Close button (optional) */}
        <button 
        className="mt-5 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
        onClick={()=>setShowIncorrectAnswerModal(prev=>({...prev,incorrectAnswerModal:false}))}>
          Close
        </button>

      </div>
    </div>
  );
}