
var subjectButton = document.querySelectorAll(".subjects button");
var subjectsSelection = document.querySelector(".subjects");
var levelSelection = document.querySelector(".level-selection");
var questions = document.querySelector(".question");
var levelButton = document.querySelectorAll(".level-selection button");
var questionBank = [
    {
      question: "Find the number whose 5% is 2.",
      A: "A)43",
      B: "B)40",
      C: "C)49",
      D: "D)35",
      correctvariant: "B)40",
      subject: "Math",
      level: "Easy",
    },
    {
      question: "Calculate the equotion (x+3)+(x+1)=12.",
      A: "A)3",
      B: "B)5",
      C: "C)4",
      D: "D)35",
      correctvariant: "C)4",
      subject: "Math",
      level: "Easy",
    },
    {
      question: "How many improper fractions have a numerator of 7?",
      A: "A)7",
      B: "B)32",
      C: "C)4",
      D: "D)6",
      correctvariant: "A)7",
      subject: "Math",
      level: "Easy",
    },
    {
      question: "Find the number whose 4% is 5.6.",
      A: "A)48",
      B: "B)400",
      C: "C)49",
      D: "D)140",
      correctvariant: "D)140",
      subject: "Math",
      level: "Easy",
    },
    {
      question: "Convert the infinite period fraction 0.1(3) to a regular fraction.",
      A: "A)2/15",
      B: "B)26/15",
      C: "C)12/15",
      D: "D)7/15",
      correctvariant: "A)2/15",
      subject: "Math",
      level: "Easy",
    },
    {
      question:
        "Sum of two integers is 5, diffrence is 3. Find these numbers product.",
      A: "A)4",
      B: "B)7",
      C: "C)9",
      D: "D)5",
      correctvariant: "A)4",
      subject: "Math",
      level: "Medium",
    },
    {
      question: "If X≠0 and 2x(x+y)=5y, find x from x(x-y)=y.",
      A: "A)3/4",
      B: "B)5",
      C: "C)4/9",
      D: "D)38",
      correctvariant: "A)3/4",
      subject: "Math",
      level: "Medium",
    },
    {
      question:
        "If x+y=5,x-y=1 , calculate the value of x2-y2+3x+3y. ",
      A: "A)10",
      B: "B)20",
      C: "C)30",
      D: "D)40",
      correctvariant: "B)20",
      subject: "Math",
      level: "Medium",
    },
    {
      question: "Find xy from this system of equotions 2x+y=5,x-3y=-5.",
      A: "A)4",
      B: "B)7",
      C: "C)3",
      D: "D)5",
      correctvariant: "C)3",
      subject: "Math",
      level: "Medium",
    },
    {
      question: "Find x from this system of equotions x+3=2(y-4),y-2=4x:",
      A: "A)1/15",
      B: "B)2/15",
      C: "C)3/15",
      D: "D)4/15",
      correctvariant: "B)2/15",
      subject: "Math",
      level: "Medium",
    },
    {
      question: "Calculate: (9-2√10)(9+2√10).",
      A: "A)36",
      B: "B)12",
      C: "C)12√10",
      D: "D)41",
      correctvariant: "D)41",
      subject: "Math",
      level: "Hard",
    },
    {
      question: "Calculate: (3√5+√15)2-10√27.",
      A: "A)80",
      B: "B)70",
      C: "C)60",
      D: "D)50",
      correctvariant: "C)60",
      subject: "Math",
      level: "Hard",
    },
    {
      question: "√(5+2√6)=?",
      A: "A)√2+√6",
      B: "B)√3+√2",
      C: "C)√5+√2",
      D: "D)√3+√5",
      correctvariant: "B)√3+√2",
      subject: "Math",
      level: "Hard",
    },
    {
      question: "If A=√6+1 and b=√6 -1, a:b+b:a=?",
      A: "A)2,8",
      B: "B)3,8",
      C: "C)3",
      D: "D)2",
      correctvariant: "A)2,8",
      subject: "Math",
      level: "Hard",
    },
    {
      question: "If (x-3)2+(y+7)2=0 , xy=?",
      A: "A)23",
      B: "B)-32",
      C: "C)21",
      D: "D)-21",
      correctvariant: "D)-21",
      subject: "Math",
      level: "Hard",
    },
    {
      question: "Which one is noun?",
      A: "A)apple",
      B: "B)blue",
      C: "C)eat",
      D: "D)already",
      correctvariant: "A)apple",
      subject: "English",
      level: "Easy",
    },
    {
      question: "Which verb is in Past Simple?",
      A: "A)go",
      B: "B)drink",
      C: "C)see",
      D: "D)liked",
      correctvariant: "D)liked",
      subject: "English",
      level: "Easy",
    },
    {
      question: "How many letters are there in English Alphabet?",
      A: "A)25",
      B: "B)26",
      C: "C)30",
      D: "D)32",
      correctvariant: "B)26",
      subject: "English",
      level: "Easy",
    },
    {
      question: "How do you get to work?",
      A: "A)By car",
      B: "B)In car",
      C: "C)By the car",
      D: "D)On car",
      correctvariant: "A)By car",
      subject: "English",
      level: "Easy",
    },
    {  
      question: "Complete the sentence: He passed his English exam very ----.",
      A: "A)easy",
      B: "B)easier",
      C: "C)good",
      D: "D)easily",
      correctvariant: "D)easily",
      subject: "English",
      level: "Easy",
    },
    {
      question: "Complete the sentence: It is not ____ mine.",
      A: "A)same as",
      B: "B)same like",
      C: "C)the same as",
      D: "D)the same like",
      correctvariant: "C)the same as",
      subject: "English",
      level: "Medium",
    },
    {
      question: "Complete the sentence: We saw them ... the bus stop.",
      A: "A)on",
      B: "B)at",
      C: "C)in",
      D: "D)down",
      correctvariant: "B)at",
      subject: "English",
      level: "Medium",
    },
    {
      question: "Complete the sentence: I think Jill will get the job. I'll be very surprised ... she doesn't get it.",
      A: "A)when",
      B: "B)while",
      C: "C)if",
      D: "D)till",
      correctvariant: "C)if",
      subject: "English",
      level: "Medium",
    },
    {
      question: "Complete the sentence: I don't eat much during the day. I never ... lunch.",
      A: "A)have got",
      B: "B)have",
      C: "C)had",
      D: "D)both",
      correctvariant: "B)have",
      subject: "English",
      level: "Medium",
    },
    {
      question: "Complete the sentence: That's OK. No ... .",
      A: "A)problem",
      B: "B)definition",
      C: "C)complain",
      D: "D)deal",
      correctvariant: "A)problem",
      subject: "English",
      level: "Medium",
    },
    {
      question: "Complete the sentence: The exams __. It’s time we ___ down to work.",
      A: "A)will come, are getting",
      B: "B)are coming, got",
      C: "C)have come, are",
      D: "D)s coming, will get",
      correctvariant: "B)are coming, got",
      subject: "English",
      level: "Hard",
    },
    {
      question: "Complete the sentence: What do you do, Ali ?Ali : I am a _______.",
      A: "A)math lesson",
      B: "B)5th grade",
      C: "C)student",
      D: "D)french",
      correctvariant: "C)student",
      subject: "English",
      level: "Hard",
    },
    {
      question: "Complete the sentence: A kangaroo ____ jump but it _____ speak.",
      A: "A)can / can’t",
      B: "B)can’t / can’t",
      C: "C)can / can",
      D: "D)can’t / can",
      correctvariant: "A)can / can’t",
      subject: "English",
      level: "Hard",
    },
    {
      question: "Complete the sentence: __________ languages do you speak.B : Two languages.",
      A: "A)How",
      B: "B)Who",
      C: "C)How many",
      D: "D)Where",
      correctvariant: "C)How many",
      subject: "English",
      level: "Hard",
    },
    {
      question: "Complete the sentence: I am from ______.I speak _____ and English",
      A: "A)Spanish – Spain",
      B: "B)Spain – Spanish",
      C: "C)Spanish -England",
      D: "D)English – Spanish",
      correctvariant: "B)Spain – Spanish",
      subject: "English",
      level: "Hard",
    },
  ];
  var filterSubject;
subjectButton.forEach(item => {
    item.addEventListener("click", function()
{
     filterSubject = questionBank.filter(subj  => {
       return subj.subject ==item.innerText;
    } );
    console.log(filterSubject);
    subjectsSelection.style.display = "none";
    levelSelection.style.display = "block";  
})
});
var filterLevel;
levelButton.forEach(element => {

    element.addEventListener("click", function()
{
    filterLevel = filterSubject.filter(lvl => {
        return lvl.level == element.innerText;
    })
    console.log(filterLevel);
    levelSelection.style.display = "none";
    questions.style.display = "block ";
    questionFilling();
    listCreate();

})
});


  var questionHeading = document.querySelector(".question-heading");
  var questionVariants = document.querySelector(".question-variants");
  var questionList = document.querySelector(".question-list ul");
  function listCreate(){
    for(var i = 0; i<filterLevel.length; i++ ){
        questionList.innerHTML += `<li onclick = "page(${i})">${i+1}</li>`
    }
    questionList.children[0].classList.add("active");
  }

  var index = 0 ;
  var correct = 0;
  var incorrect = 0;
  function questionFilling(){
    questionHeading.innerHTML = `<p>${filterLevel[index].question}</p>`;
    questionVariants.innerHTML = `<div class="first-line">
            <button onclick= "answer(this)">${filterLevel[index].A}</button>
            <button onclick= "answer(this)">${filterLevel[index].B}</button>
        </div>
        <div class="second-line">
            <button onclick= "answer(this)">${filterLevel[index].C}</button>
            <button onclick= "answer(this)">${filterLevel[index].D}</button>
        </div>`

        // answerButtons.forEach(element => { element.addEventListener("click", function(){
        //     if(element.innerText == filterLevel[index].correctvariant){
        //         element.style.backgroundColor = "darkgreen";
        //         correct++;
        //     }
        //     else{
        //         element.style.backgroundColor = "darkred";
        //         incorrect++;
        //         answerButtons.forEach(item => { 
        //           if(item.innerText == filterLevel[index].correctvariant){
        //               item.style.backgroundColor = "darkgreen";
        //           }
        //         });
        //     }
        //     answerButtons.forEach(a => {
        //       a.style.pointerEvents = "none";
        //     });
        // })
        // });
  }
  var answerButtons;
      function answer(btn){
       answerButtons = questionVariants.querySelectorAll("button");
       console.log(answerButtons);
        if(btn.innerText == filterLevel[index].correctvariant){
                 btn.style.backgroundColor = "darkgreen";
                  correct++;
              }
              else{
                btn.style.backgroundColor = "darkred";
                  incorrect++;
                  answerButtons.forEach(item => { 
                    if(item.innerText == filterLevel[index].correctvariant){
                        item.style.backgroundColor = "darkgreen";
                    }
                    console.log(item.innerText);
                  });
              }
              answerButtons.forEach(a => {
                a.style.pointerEvents = "none";
              });
      }
 
      var iconForward = document.querySelectorAll(".question-ending i")[1];
      iconForward.addEventListener("click", function(){
      if(index < filterLevel.length - 1){
        index++;
        Array.from(questionList.children).forEach(item => {
            item.classList.remove("active")
        });
        questionList.children[index].classList.add("active");
        questionFilling();
        answerButtons.forEach(a => {
        a.style.pointerEvents = "all";
      });
      }
      else if(index == filterLevel.length-1){
        result();
      }
    })
      var iconBack = document.querySelectorAll(".question-ending i")[0];
        iconBack.addEventListener("click", function(){
        if(index > 0){
          index--;
          Array.from(questionList.children).forEach(item => {
              item.classList.remove("active");
          });
          questionList.children[index].classList.add("active");
          questionFilling();
      }
      })

      function page(x){
          index = x;
          Array.from(questionList.children).forEach(item => {
              item.classList.remove("active");
          });
          questionList.children[x].classList.add("active");
          questionFilling();
      }

      function result() {
        questionHeading.innerHTML = `<p>Result:</p>`;
        document.querySelector(".result").innerHTML = `<p>Correct questions: <strong>${correct}</strong></p>
        <p>Incorrect questions: <strong>${incorrect}</strong></p>
        <p>Unanswered questions: <strong>${filterLevel.length - (correct + incorrect)}</strong></p>
        <p>Number of all questions: <strong>${filterLevel.length}</strong></p>
        <p>Percentage of success: <strong>${((correct / filterLevel.length)*100).toFixed(2)}</strong> %</p>`
        questionVariants.style.display = "none";
        document.querySelector(".question-ending").style.display = "none";        

      }
 
