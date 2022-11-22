import {React, useState} from "react";
import Card from 'react-bootstrap/Card';
import './QuizQuestion.css';

//Homepage Component
function QuizQuestion() {
    const questions = [
		{
			questionText: 'What does CPU stand for?',
			answer: "central processing unit"
		},
		{
			questionText: 'What does GPU stand for?',
			answer: "graphics processing unit"
		},
		{
			questionText: 'What does RAM stand for?',
			answer: "random access memory"
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [value, setValue] = useState('');
    
	const handleAnswerSubmissionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    const handleChange = (value) => {
       setValue(value.target.value)
    };

  return (
    <div className="QuizQuestion">
        {showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) :(
    <Card className="CardStyle">
      <Card.Body>
        <Card.Title>{questions[currentQuestion].questionText}</Card.Title>
        <Card.Text>
        <input type="text" value={value} placeholder="What's your answer..." onChange={(event)=> handleChange(event)}/>
        </Card.Text>
        <button onClick={() => handleAnswerSubmissionClick(value === questions[currentQuestion].answer)}>Submit</button>
      </Card.Body>
    </Card>
            )}
    </div>
  );
}

export default QuizQuestion;