
var subjectButton = document.querySelectorAll(".subjects button");
var subjectsSelection = document.querySelector(".subjects");
var levelSelection = document.querySelector(".level-selection");
var questions = document.querySelector(".question");
var levelButton = document.querySelectorAll(".level-selection button");
var questionBank = [
    {
      question: "5 %-i 2 olan ədədi tap?",
      A: "A)43",
      B: "B)40",
      C: "C)49",
      D: "D)35",
      correctvariant: "B)40",
      subject: "Math",
      level: "Easy",
    },
    {
      question: "(x+3)+(x+1)=12 Tənliyi həll edin?",
      A: "A)3",
      B: "B)5",
      C: "C)4",
      D: "D)35",
      correctvariant: "C)4",
      subject: "Math",
      level: "Easy",
    },
    {
      question: "Sürəti 7 olan neçə düzgün olmayan kəsr var?",
      A: "A)7",
      B: "B)32",
      C: "C)4",
      D: "D)6",
      correctvariant: "A)7",
      subject: "Math",
      level: "Easy",
    },
    {
      question: "4%-i 5,6 olan ədədi tapın:",
      A: "A)48",
      B: "B)400",
      C: "C)49",
      D: "D)140",
      correctvariant: "D)140",
      subject: "Math",
      level: "Easy",
    },
    {
      question: "0,1(3) sonsuz dövrü onluq kəsrini adi kəsrə çevirin.",
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
        "İki ədədin cəmi 5, fərqi 3-dür.Bu ədədlərin hasilini tapın?",
      A: "A)4",
      B: "B)7",
      C: "C)9",
      D: "D)5",
      correctvariant: "A)4",
      subject: "Math",
      level: "Medium",
    },
    {
      question: "X≠0 olarsa, 2x(x+y)=5y,x(x-y)=y olduqda x-i tapın?",
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
        "x+y=5,x-y=1 olduğuna görə, x2-y2+3x+3y ifadəsinin qiymətini tapın?",
      A: "A)10",
      B: "B)20",
      C: "C)30",
      D: "D)40",
      correctvariant: "B)20",
      subject: "Math",
      level: "Medium",
    },
    {
      question: "2x+y=5,x-3y=-5 tənliklər sistemindən x+y cəmini tapın?",
      A: "A)4",
      B: "B)7",
      C: "C)3",
      D: "D)5",
      correctvariant: "C)3",
      subject: "Math",
      level: "Medium",
    },
    {
      question: "x+3=2(y-4),y-2=4x tənliklər sistemindən x-i tapın:",
      A: "A)1/15",
      B: "B)2/15",
      C: "C)3/15",
      D: "D)4/15",
      correctvariant: "B)2/15",
      subject: "Math",
      level: "Medium",
    },
    {
      question: "Hesablayın: (9-2√10)(9+2√10)?",
      A: "A)36",
      B: "B)12",
      C: "C)12√10",
      D: "D)41",
      correctvariant: "D)41",
      subject: "Math",
      level: "Hard",
    },
    {
      question: "Hesablayın: (3√5+√15)2-10√27?",
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
      question: "A=√6+1 və b=√6 -1 olduğuna görə, a:b+b:a=?",
      A: "A)2,8",
      B: "B)3,8",
      C: "C)3",
      D: "D)2",
      correctvariant: "A)2,8",
      subject: "Math",
      level: "Hard",
    },
    {
      question: "(x-3)2+(y+7)2=0 isə, xy=?",
      A: "A)23",
      B: "B)-32",
      C: "C)21",
      D: "D)-21",
      correctvariant: "D)-21",
      subject: "Math",
      level: "Hard",
    },
    {
      question: "Azərbaycan dilində neçə sait var?",
      A: "A)8",
      B: "B)9",
      C: "C)7",
      D: "D)11",
      correctvariant: "B)9",
      subject: "English",
      level: "Easy",
    },
    {
      question: "Azərbaycan dilində neçə samit səs var?",
      A: "A)34",
      B: "B)23",
      C: "C)25",
      D: "D)32",
      correctvariant: "C)25",
      subject: "English",
      level: "Easy",
    },
    {
      question: "Hansı kar samitin cingiltili qarşılığı yoxdur?",
      A: "A)H",
      B: "B)F",
      C: "C)G",
      D: "D)C",
      correctvariant: "A)H",
      subject: "English",
      level: "Easy",
    },
    {
      question: "Əlifbada neçə hərf var?",
      A: "A)30",
      B: "B)23",
      C: "C)32",
      D: "D)34",
      correctvariant: "C)32",
      subject: "English",
      level: "Easy",
    },
    {
      question: "Bitişdirici samitləri göstərin:",
      A: "A)d,t,l",
      B: "B)n,m,s",
      C: "C)m,l,k",
      D: "D)n,y,s",
      correctvariant: "D)n,y,s",
      subject: "English",
      level: "Easy",
    },
    {
      question: "Qrammatik cəhətdən feil bildirir?",
      A: "A)Hərəkət",
      B: "B)Xususiyyət",
      C: "C)Keyfiyyət",
      D: "D)Əlamət",
      correctvariant: "A)Hərəkət",
      subject: "English",
      level: "Medium",
    },
    {
      question: "Feilin neçə sadə şəkli var?",
      A: "A)4",
      B: "B)5",
      C: "C)6",
      D: "D)8",
      correctvariant: "C)6",
      subject: "English",
      level: "Medium",
    },
    {
      question: "Feil haqqında hansı fikir səhvdir?",
      A: "A)feilin dərəcələri var",
      B: "B)feil hərəkət bildirir",
      C: "C)feil təsirli və təsirsiz olur",
      D: "D)feilin 3 zamanı var",
      correctvariant: "A)feilin dərəcələri var",
      subject: "English",
      level: "Medium",
    },
    {
      question: "Feilin quruluşca neçə novu var?",
      A: "A)5",
      B: "B)6",
      C: "C)4",
      D: "D)3",
      correctvariant: "D)3",
      subject: "English",
      level: "Medium",
    },
    {
      question: "Feil cümlədə əsasən hansı cümlə üzvü olur?",
      A: "A)təyin",
      B: "B)mübtəda",
      C: "C)xəbər",
      D: "D)zərflik",
      correctvariant: "C)xəbər",
      subject: "English",
      level: "Medium",
    },
    {
      question: "Hansı əlaqə növü bütün tabeli mürəkkəb cümlələrdə olur?",
      A: "A)Qarşılaşdırma",
      B: "B)Zaman",
      C: "C)Səbəb-nəticə",
      D: "D)Heç biri",
      correctvariant: "B)Zaman",
      subject: "English",
      level: "Hard",
    },
    {
      question: "Mürəkkəb cümlənin hansı növləri var?",
      A: "A)tabeli, tabesiz",
      B: "B)düzəltmə",
      C: "C)əmr",
      D: "D)sadə",
      correctvariant: "A)tabeli, tabesiz",
      subject: "English",
      level: "Hard",
    },
    {
      question: "Mürəkkəb cümlənin neçə novu var?",
      A: "A)6",
      B: "B)2",
      C: "C)5",
      D: "D)3",
      correctvariant: "D)3",
      subject: "English",
      level: "Hard",
    },
    {
      question: "Hansı bağlayıcı merəkkəb cümlənin tərəflərini bağlamır?",
      A: "A)ancaq",
      B: "B)ilə",
      C: "C)belə ki",
      D: "D)yəni",
      correctvariant: "B)ilə",
      subject: "English",
      level: "Hard",
    },
    {
      question: "Mürəkkəb cümlələr neçə növə ayrılır?",
      A: "A)2",
      B: "B)4",
      C: "C)5",
      D: "D)3",
      correctvariant: "A)2",
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
  function questionFilling(){
    questionHeading.innerHTML = `<p>${filterLevel[index].question}</p>`;
    questionVariants.innerHTML = `<div class="first-line">
            <button>${filterLevel[index].A}</button>
            <button>${filterLevel[index].B}</button>
        </div>
        <div class="second-line">
            <button>${filterLevel[index].C}</button>
            <button>${filterLevel[index].D}</button>
        </div>`

        var answerButtons = questionVariants.querySelectorAll("button");
        answerButtons.forEach(element => { element.addEventListener("click", function(){
            if(element.innerText == filterLevel[index].correctvariant){
                element.style.backgroundColor = "darkgreen";
            }
            else{
                
                element.style.backgroundColor = "darkred";
                
            }
        })
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
 }
 })
 var iconBack = document.querySelectorAll(".question-ending i")[0];
  iconBack.addEventListener("click", function(){
  if(index > 0){
    index--;
    Array.from(questionList.children).forEach(item => {
        item.classList.remove("active")
    });
    questionList.children[index].classList.add("active");
    questionFilling();
 }
 })
 function page(x){
    index = x;
    Array.from(questionList.children).forEach(item => {
        item.classList.remove("active")
    });
    questionList.children[x].classList.add("active");
    questionFilling();

    
 }
 
