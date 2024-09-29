//   let typing speed = (actualWords / totalTimeTaken) * 60;            
// formula h ye 
// actualwords means user ne kitne word likhe
// totaltimetaken means user ne kitna time liya
// 60 seconds


const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;


const sentences = ['Hi Myself Anjana Swami this is my first project',
    'My bhai help ,e so much, if i stucks somewhere',
    'Thanks to use this app to my all users ']


// step 5

const calculateTypingSpeed = (time_taken) => {              // time taken as a parameter pass kiya hmne
    let  totalWords = typing_ground.value.trim();               // user ne kya likha
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;     // user ne actual me kitne word likhe space hta k
    // split krne k baad space ki jgha hme ik base dega jise hm array create krege

    if(actualWords !== 0) {             // actual word agr hmara zero hua to
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);                // time ko round kr k hme dega
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}




// step 4
const endTypingTest = () => {               // arrow function call kiya
    btn.innerText = "Start";                // btn ko start kiya

    let date = new Date();              // ab hme end time pta lgana h 
    endTime = date.getTime();

    totalTimeTaken = (endTime -startTime) / 1000;           // formula taki hme actual time pta lge AND use 1000 taki hme sec. me mile

    // console.log(totalTimeTaken);

    calculateTypingSpeed(totalTimeTaken);               // total time dekhana h isleye hm argument pass kr rhe h

    show_sentence.innerHTML = "";                       // show sentance ko hm empty kr dege
    typing_ground.value = "";                                  // typing ground ko be hm empty kr dege
}



// step 3                                   start se done hone tk ka process
const startTyping = () => {                 // starttyping ko define kr deya
    let randomNumber = Math.floor(Math.random() * sentences.length);            // random number find kiya h hmne AND sentance ki length tk hme random no. dega
    // console.log(randomNumber);
    show_sentence.innerHTML = sentences[randomNumber];          // random no. ko hm sentance pe show kr rhe h

    let date = new Date();                  // user ne start kiya tha tb ka time kiya h or be can say update chiye
    startTime = date.getTime();             // muje milisec me time mil gya

    btn.innerText = "Done";                     // btn me done likh kr aa rha h
}




// step 2
btn.addEventListener('click', () => {                   // user ne btn pe click kiya h ya nhi 
    switch (btn.innerText.toLowerCase()) {                  // user click krte hi call back function use kiya
        case "start":                               // case define krege if start then 
            typing_ground.removeAttribute('disabled');          // start hote hi typing ground disable ko hta do
            startTyping();                              // starttyping function ko call krege
            break;                                      //use break so that vo bhar chla jae


        case "done":                            // case agr done hua to 
            typing_ground.setAttribute('disabled' , 'true');                //disable vala attribute vaps add kr dege
            endTypingTest();                            // user ki typing ho gyi h ab use result dekhna h 
            break;
    }
})
