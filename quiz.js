const questionJson = [
  {
    "id": 1,
    "question": "How do you prefer to spend a free evening?",
    "options": [
      "Watching a movie or series at home",
      "Going out with friends",
      "Trying a new café or place",
      "Just relaxing and doing nothing"
    ],
    "correctAnswer": "Trying a new café or place"
  },
  {
    "id": 2,
    "question": "What’s your ideal weekend vibe?",
    "options": [
      "Planned activities and outings",
      "Spontaneous plans",
      "A mix of rest and fun",
      "Mostly staying in"
    ],
    "correctAnswer": "A mix of rest and fun"
  },
  {
    "id": 3,
    "question": "What matters more to you in daily life?",
    "options": [
      "Peace and calm",
      "Fun and excitement",
      "Growth and learning",
      "Stability and routine"
    ],
    "correctAnswer": "Peace and calm"
  },
  {
    "id": 4,
    "question": "When you’re stressed, what helps you the most?",
    "options": [
      "Talking it out with someone",
      "Being alone for a while",
      "Doing something fun",
      "Sleeping it off"
    ],
    "correctAnswer": "Talking it out with someone"
  },
  {
    "id": 5,
    "question": "What kind of food mood do you usually have?",
    "options": [
      "Home-cooked comfort food",
      "Street food or snacks",
      "Trying new cuisines",
      "Simple no-fuss meals"
    ],
    "correctAnswer": "Trying new cuisines"
  },
  {
    "id": 6,
    "question": "How do you usually make decisions?",
    "options": [
      "By thinking it through logically",
      "By following my gut feeling",
      "By discussing with others",
      "By taking time and waiting"
    ],
    "correctAnswer": "By thinking it through logically"
  },
  {
    "id": 7,
    "question": "What does a good day look like to you?",
    "options": [
      "Being productive",
      "Spending time with loved ones",
      "Having fun and laughing",
      "Feeling relaxed and peaceful"
    ],
    "correctAnswer": "Being productive"
  },
  {
    "id": 8,
    "question": "How important is personal space to you?",
    "options": [
      "Very important",
      "Somewhat important",
      "Not very important",
      "Not important at all"
    ],
    "correctAnswer": "Somewhat important"
  },
  {
    "id": 9,
    "question": "What motivates you the most?",
    "options": [
      "Personal growth",
      "Recognition and success",
      "Relationships and connection",
      "Stability and security"
    ],
    "correctAnswer": "Relationships and connection"
  },
  {
    "id": 10,
    "question": "How do you prefer to plan things?",
    "options": [
      "Well in advance",
      "A day or two before",
      "Last minute",
      "I go with the flow"
    ],
    "correctAnswer": "Well in advance"
  }
]


let currentQuestionIndex=0;
let score=0;
const questionElement=document.getElementById('question');
const optionsElement=document.getElementById('options');
const scoreElement=document.getElementById('score');
loadQuestion();
function loadQuestion(){
  if(currentQuestionIndex>=questionJson.length){
    questionElement.textContent='Thank you, now wait for me to take a decision...';
    optionsElement.textContent='';
    return;
  }
  else{

  const {correctAnswer, options, question}=questionJson[currentQuestionIndex];
  questionElement.textContent=question;
  //creating buttons for each option
  options.forEach(opt=>{
    const button=document.createElement('button');
    button.textContent=opt;  
    optionsElement.appendChild(button);
    //event listener for each button
    button.addEventListener('click',()=>{
      if(opt===correctAnswer){
        score++;
      }
      else{
        score=score-0.25;
      }
     console.log(score);
     scoreElement.textContent=`You scored ${score}`;
     optionsElement.textContent='';
      currentQuestionIndex++;
  loadQuestion();

    })
  });

}
}


