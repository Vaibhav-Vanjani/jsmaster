import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import QuestionnaireContextProvider from './context/QuestionnareContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuestionnaireContextProvider>
      <App />
    </QuestionnaireContextProvider>
  </StrictMode>,
)
