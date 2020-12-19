const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const title = document.getElementById('title');
const wrapper = document.querySelector('.wrapper');
const questionCounter = document.getElementById('questionCounter');
const score = document.getElementById('score');
const loader = document.getElementById('loader');
const container = document.getElementById('container');

//CONSTANTS
let scoretext = 0;
const CORRECT_BONUS = 10/2;
const MAX_QUESTIONS = 20;

let shuffleQuestions
let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded',() =>{
    setTimeout(() =>{
        loader.classList.add('hide');
        container.classList.remove('hide')
    },2000)
})

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion()
    
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    title.classList.add('hide');
    wrapper.style.display = 'block';
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion();
    
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.questions
    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{  
            startButton.innerText = 'Finish';
            startButton.classList.remove('hide')
            score.innerText = 0;
    }

}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
        incrementScore(CORRECT_BONUS);
         Array.from(answerButtonElement.children).forEach(button =>{
             button.classList.add('disable')
         })
    }else{
        element.classList.add('wrong')
        Array.from(answerButtonElement.children).forEach(button =>{
            button.classList.add('disable')
        })
    }
}

function incrementScore(num){
    scoretext += num;
    score.innerText = scoretext; 
   
};


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        questions:"Schoolmate that knows all his secrets ?",
        answers:[
            {text:'Teran',correct:false},
            {text:'Migara',correct:true},
            {text:'Sahassrika',correct:false},
            {text:'Bryan',correct:false}
        ]
    },
    {
        questions:"Schoolmate that he loves talking to ?",
        answers:[
            {text:'Munaj',correct:false},
            {text:'Roshan',correct:true},
            {text:'Teran',correct:false},
            {text:'Azmi',correct:false},
        ]
    },
    {
        questions:"Is he Single or Taken ?",
        answers:[
            {text:'Taken',correct:false},
            {text:'Single',correct:true}
        ]
    },
    {
        questions:"How many girlfriends has he been with ?",
        answers:[
            {text:'3',correct:false},
            {text:'5',correct:true},
            {text:'4',correct:false},
            {text:'6',correct:false}
        ]
    },
    {
        questions:"An ex-girlfriend he is dreaming about ?",
        answers:[
            {text:'Janool',correct:false},
            {text:'Ayodhya',correct:false},
            {text:'Jazla',correct:false},
            {text:'Veena',correct:true}
        ]
    },
    {
        questions:"A Famous Person that he look up to ?",
        answers:[
            {text:'James Neese',correct:true},
            {text:'Jake Paul',correct:false},
            {text:'Felix Kjellberg',correct:false},
            {text:'Mr.Beast',correct:false}
        ]
    },
    {
        questions:"As Schoolmate that he look up to ?",
        answers:[
            {text:'Migara',correct:false},
            {text:'Bryan',correct:true},
            {text:'Sandro',correct:false},
            {text:'Roshan',correct:false}
        ]
    },
    {
        questions:"Where does he Hope to be in 10 years ?",
        answers:[
            {text:'COO of a Company',correct:false},
            {text:'CEO of a Company',correct:false},
            {text:'A World Recognized Influncer',correct:false},
            {text:'Founding and Running his own Bussiness',correct:true}
        ]
    },
    {
        questions:"What type of girlfriend is he looking for ?",
        answers:[
            {text:'One who understands him',correct:true},
            {text:'One who is Attractive',correct:false},
            {text:'One who is Intelligence',correct:false},
            {text:'One who is Emotional',correct:false}
        ]
    },
    {
        questions:"Does he regret breaking up with 'Jazla' ?",
        answers:[
            {text:'No',correct:false},
            {text:'Yes',correct:true},
        ]
    },
    {
        questions:" What's the one thing people don't know about him?",
        answers:[
            {text:'Afraid of needles',correct:true},
            {text:'Very Kind',correct:false},
            {text:'A Genius',correct:false},
            {text:'An Introvert',correct:false}
        ]
    },
    {
        questions:" One incident that changed his life?",
        answers:[
            {text:'A Motivational Speech that got him to be an Bussinessman',correct:false},
            {text:'A lecture that drove him to Studying',correct:false},
            {text:'A musical show that made me love and learn music.',correct:true},
            {text:'Saw a Social Media Influnencer inspired to become one',correct:false}
        ]
    },
    {
        questions:"How many kids does he want to have ?",
        answers:[
            {text:'4',correct:false},
            {text:'7',correct:false},
            {text:'5',correct:false},
            {text:'3',correct:true}
        ]
    },
    {
        questions:"Best gift he ever got ?",
        answers:[
            {text:'An Iphone',correct:false},
            {text:'Friends',correct:true},
            {text:'A Laptop',correct:false},
            {text:'Great Education',correct:false}
        ]
    },
    {
        questions:" All time Favorite School Memory ?",
        answers:[
            {text:'Parents Meetings',correct:false},
            {text:'School Vacation day',correct:false},
            {text:'Cutting classes and singing songs with friends at the school',correct:true},
            {text:'Getting punished',correct:false}
        ]
    },
    {
        questions:"His Very First Crush ?",
        answers:[
            {text:'Ishini',correct:true},
            {text:'Ayodhya',correct:false},
            {text:'Dewmi',correct:false},
            {text:'Kaveesha',correct:false}
        ]
    },
    {
        questions:"His First Real Love ?",
        answers:[
            {text:'Veena',correct:false},
            {text:'Ayodhya',correct:false},
            {text:'Jazla',correct:true},
            {text:'Janool',correct:false}
        ]
    },
    {
        questions:"His last Real Love (By Far)?",
        answers:[
            {text:'Ayodhya',correct:false},
            {text:'Veena',correct:true},
            {text:'Ishini',correct:false},
            {text:'Janool',correct:false}
        ]
    },
    {
        questions:"If he would change one thing about himself what would it be ?",
        answers:[
            {text:'Ability to public speak',correct:true},
            {text:'His Discipline',correct:false},
            {text:'Ability to make friends',correct:false},
            {text:'His ability learn',correct:false}
        ]
    },
    {
        questions:"His Dream Job?",
        answers:[
            {text:'Professional Gamer',correct:false},
            {text:'Instagram Model',correct:false},
            {text:'An Enterprenuer',correct:true},
            {text:'HR Manager',correct:false}
        ]
    },
]