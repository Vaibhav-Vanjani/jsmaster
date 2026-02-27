import { useState } from "react";
import { list } from "./components/jsmaster/questions";

function App() {
  const [questionId, setQuestionId] = useState(1);

  const question = list.find((q) => +q.id === questionId);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto flex gap-6">
        {question && (
          <section
            key={question.id}
            className="
              relative flex-1
              bg-white
              rounded-2xl
              shadow-lg
              border border-slate-200
              p-8
              space-y-6
            "
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-500">
                Question {question.id} / {list.length}
              </h2>

              <div className="flex gap-2">
                {questionId !== 1 && (
                  <button
                    onClick={() => setQuestionId((p) => p - 1)}
                    className="
                      px-4 py-2 text-sm rounded-lg
                      bg-slate-100 text-slate-700
                      hover:bg-slate-200 transition
                    "
                  >
                    Prev
                  </button>
                )}

                {questionId !== list.length && (
                  <button
                    onClick={() => setQuestionId((p) => p + 1)}
                    className="
                      px-4 py-2 text-sm rounded-lg
                      bg-blue-600 text-white
                      hover:bg-blue-700 transition
                    "
                  >
                    Next
                  </button>
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 leading-snug">
              {question.question}
            </h3>

            {question.snippet && (
              <pre
                className="
                  text-sm text-slate-700
                  bg-slate-50
                  border border-slate-200
                  rounded-lg
                  p-4
                  overflow-x-auto
                  whitespace-pre-wrap
                "
              >
                {question.snippet}
              </pre>
            )}

            <div className="space-y-3">
              {["A", "B", "C", "D", "E"]
                .filter((o) => question.options[o])
                .map((opt) => (
                  <label
                    key={opt}
                    className="
                      group flex justify-between items-start gap-4
                      p-4 rounded-xl
                      border border-slate-200
                      cursor-pointer
                      transition
                      hover:border-blue-400
                      hover:bg-blue-50
                    "
                  >
                    <div>
                      <span className="font-semibold text-slate-800">
                        {opt}{". "}
                      </span>
                      <span className="text-slate-600">
                        {question.options[opt]}
                      </span>
                    </div>
                    <input
                      type="radio"
                      name={question.id}
                      value={opt}
                      className="mt-1 accent-blue-600"
                    />
                  </label>
                ))}
            </div>
          </section>
        )}
        <div
          className="
            w-[280px]
            h-[360px]
            sticky top-6
            overflow-y-auto
            rounded-2xl
            bg-white
            border border-slate-200
            shadow-md
            p-4
            flex flex-wrap gap-2

            scrollbar-thin
            scrollbar-thumb-slate-300
            scrollbar-track-transparent
            hover:scrollbar-thumb-slate-400
          "
        >
          {list.map((q) => {
            const active = +q.id === questionId;

            return (
              <button
                key={q.id}
                onClick={() => setQuestionId(+q.id)}
                className={`
                  min-w-[44px] h-10
                  rounded-lg
                  font-semibold text-sm
                  flex items-center justify-center
                  transition

                  ${
                    active
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-600"
                  }
                `}
              >
                {q.id}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
