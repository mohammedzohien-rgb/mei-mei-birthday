const questions = [
  {q:"Who made this little website for you?",a:["Zohien ♡","A random website","Your secret admirer"],correct:0,why:"Obviouslyyy. Zohien put this together just for you!"},
  {q:"What nickname is this website dedicated to?",a:["Bestie","Mei Mei","Queen Bee"],correct:1,why:"MEI MEI FOREVER 🎀"},
  {q:"What song is on your birthday soundtrack?",a:["Sweater Weather","Reflections","Softcore"],correct:1,why:"The Neighbourhood, of course ♡"},
  {q:"What is the most important birthday rule?",a:["Eat cake","Take cute pictures","Be happy and enjoy your day"],correct:2,why:"All of the above, but especially that you enjoy your day!"}
];
let current=0, chosen=false;
const q=document.getElementById("question"), answers=document.getElementById("answers"), count=document.getElementById("question-count"), progress=document.getElementById("progress"), feedback=document.getElementById("quiz-feedback"), next=document.getElementById("next-question");
function renderQuestion(){
  chosen=false; const item=questions[current]; q.textContent=item.q; count.textContent=`question ${current+1} of ${questions.length}`;
  progress.style.width=`${(current+1)/questions.length*100}%`; feedback.textContent=""; next.disabled=true; next.textContent=current===questions.length-1?"see your result ♡":"next question →"; answers.innerHTML="";
  item.a.forEach((answer,i)=>{const b=document.createElement("button");b.className="answer";b.textContent=answer;b.onclick=()=>choose(i,b);answers.appendChild(b)});
}
function choose(i,button){if(chosen)return;chosen=true;document.querySelectorAll(".answer").forEach(b=>b.disabled=true);button.classList.add("selected");feedback.textContent=i===questions[current].correct?questions[current].why:"Nice try 😭 " + questions[current].why;next.disabled=false;}
next.addEventListener("click",()=>{if(!chosen)return;if(current<questions.length-1){current++;renderQuestion()}else{q.textContent="100% bestie material ♡";answers.innerHTML="";count.textContent="official results";feedback.textContent="Your friendship score is infinity. Happy birthday, Mei Mei!";next.hidden=true;progress.style.width="100%";}});
renderQuestion();
const toggle=document.getElementById("letter-toggle"),letter=document.getElementById("letter");
toggle.addEventListener("click",()=>{const opening=letter.hidden;letter.hidden=!opening;toggle.setAttribute("aria-expanded",String(opening));toggle.textContent=opening?"close your letter ♡":"tap to open your letter 💌";});
