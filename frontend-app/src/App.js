import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  QuizQuestion  from './QuizQuestions/QuizQuestion'
import Home from './Home';

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Quiz" element={<QuizQuestion />} />
          </Routes>
  </BrowserRouter>
  );

}

export default App;
