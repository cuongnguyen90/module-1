const  TIME = 60;
const QUESTION = [ // Database Question
    {
        question: "Đường nào là đường dài nhất ?",
        point : 100,
        answer: {
        A: "Đường chân trời",
            B: "Đường làng",
            C: "Đường xóm",
            D: "Đường thốnnốt"
        },
        correct: "Đường chân trời"
    },{
        question: "Du la duong dai nhat ?",
        point : 100,
        answer: {
        A: "Đường chân trời",
            B: "Đường làng",
            C: "Đường xóm",
            D: "Đường thốnnốt"
        },
        correct: "Đường chân trời"
    },{
        question: "Cau hoi so 3 ?",
        point : 100,
        answer: {
        A: "Đường chân trời",
            B: "Đường làng",
            C: "Đường xóm",
            D: "Đường thốnnốt"
        },
        correct: "Đường chân trời"
    },{
        question: "Đường nào là đường dài nhất ?",
        point : 100,
        answer: {
        A: "Đường chân trời",
            B: "Đường làng",
            C: "Đường xóm",
            D: "Đường thốnnốt"
        },
        correct: "Đường chân trời"
    },{
        question: "Đường nào là đường dài nhất ?",
        point : 100,
        answer: {
        A: "Đường chân trời",
            B: "Đường làng",
            C: "Đường xóm",
            D: "Đường thốnnốt"
        },
        correct: "Đường chân trời"
    },{
        question: "Đường nào là đường dài nhất ?",
        point : 100,
        answer: {
        A: "Đường chân trời",
            B: "Đường làng",
            C: "Đường xóm",
            D: "Đường thốnnốt"
        },
        correct: "Đường chân trời"
    },{
        question: "Đường nào là đường dài nhất ?",
        point : 100,
        answer: {
        A: "Đường chân trời",
            B: "Đường làng",
            C: "Đường xóm",
            D: "Đường thốnnốt"
        },
        correct: "Đường chân trời"
    },{
        question: "Đường nào là đường dài nhất ?",
        point : 100,
        answer: {
        A: "Đường chân trời",
            B: "Đường làng",
            C: "Đường xóm",
            D: "Đường thốnnốt"
        },
        correct: "Đường chân trời"
    },{
        question: "Đường nào là đường dài nhất ?",
        point : 100,
        answer: {
        A: "Đường chân trời",
            B: "Đường làng",
            C: "Đường xóm",
            D: "Đường thốnnốt"
        },
        correct: "Đường chân trời"
    },{
        question: "Đường nào là đường dài nhất ?",
        point : 100,
        answer: {
        A: "Đường chân trời",
            B: "Đường làng",
            C: "Đường xóm",
            D: "Đường thốnnốt"
        },
        correct: "Đường chân trời"
    },{
        question: "Đường nào là đường dài nhất ?",
        point : 100,
        answer: {
            A: "Đường chân trời",
            B: "Đường làng",
            C: "Đường xóm",
            D: "Đường thốnnốt"
        },
        correct: "Đường chân trời"
    },

]


let Game = function (player) {
    this.player = player;
    this.point = undefined;
    this.time = TIME;
    this.level = 1;
    this.support = undefined;
    let self = this;
    this.start = function () {
        if (this.level < QUESTION.length){
            this.countDown();
            this.getQuestion();
            this.getAnswer();
            this.showQuestion();
            this.showAnswer();
        }else {
            console.log("Winner");
        }

    }

    this.countDown = function () {
        if (self.time > 0 ){
            console.log(self.time);
            setTimeout(self.countDown,1000);
            this.time--;
        }else {
            console.log('Time out');
        }

    }
    this.getQuestion = function () {
        this.question = QUESTION[this.level].question;
        return this.question;
    }

    this.getAnswer = function () {
        this.answer = QUESTION[this.level].answer;
        return this.answer;
    }
    this.getCorrect = function () {
        this.correct = QUESTION[this.level].correct;
    }

    // Get HTML element by id
    this.getElement = function(elementId){
        return document.getElementById(elementId);
    }

    this.checkAnswer = function(answer){
        this.getCorrect();
        if (answer == self.correct){
            this.nextLevel();
            this.start();
        }else {
            console.log('Fail')
            this.restart();
        }
    }

    this.getElement('ans1').addEventListener('click', function(){
        return self.checkAnswer(self.getAnswer().A);
    });
    this.getElement('ans2').addEventListener('click', function(){
        return self.checkAnswer(self.getAnswer().B);
    });
    this.getElement('ans3').addEventListener('click', function(){
        return self.checkAnswer(self.getAnswer().C);
    });
    this.getElement('ans4').addEventListener('click', function(){
        return self.checkAnswer(self.getAnswer().D);
    });


    this.nextLevel = function () {
        this.level++;
    }
    this.restart = function () {
        this.level = 1;
        this.start();
    }
    //Show Question
    this.showQuestion = function () {
        this.getElement('question').innerText = this.getQuestion();
    }
    //Show Answer

    this.showAnswer = function () {
        this.getElement('ans1').innerText = this.getAnswer().A;
        this.getElement('ans2').innerText = this.getAnswer().B;
        this.getElement('ans3').innerText = this.getAnswer().C;
        this.getElement('ans4').innerText = this.getAnswer().D;
    }
    // Listen click event for 4 answer buttons




    // Show an element
    this.show = function(elementId){
        this.getElement(elementId).style.display = 'block';
    }

    // Hide an element
    this.hide = function(elementId){
        this.getElement(elementId).style.display = 'none';
    }


}






function init(){
    let g = new Game();
    //g.level  = 5;
    g.start();
}


