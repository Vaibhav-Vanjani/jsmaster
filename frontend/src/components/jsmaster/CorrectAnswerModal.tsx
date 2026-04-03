import { useQuestionnaire } from "../../context/QuestionnareContext";

export default function CorrectAnswerModal() {
    const {setShowIncorrectAnswerModal} = useQuestionnaire();
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={()=>setShowIncorrectAnswerModal(prev=>({...prev,correctAnswerModal:false}))}
    >
      <div
        className="bg-green-50 border border-green-300 rounded-2xl shadow-xl p-6 max-w-md w-full mx-4"
        onClick={()=>setShowIncorrectAnswerModal(prev=>({...prev,correctAnswerModal:false}))}
      >
        {/* ✅ Header */}
        <div className="flex items-center gap-2 text-green-600 font-semibold text-lg">
          <span className="text-2xl">✔</span>
          Correct Answer!
        </div>

        {/* 🎉 Message */}
        <div className="mt-4 text-gray-700">
          Great job! Your answer is correct.
        </div>

        {/* 🔘 Close button */}
        <button
          onClick={()=>setShowIncorrectAnswerModal(prev=>({...prev,correctAnswerModal:false}))}
          className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}