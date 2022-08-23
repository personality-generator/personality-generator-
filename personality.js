
function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }


var myquestions = [

{
    id:0,
    category:"questions",
    question:"do you have a natural talent for influencing people?",
    correctAnswer:"yes"
},{
    id:1,
    category:"questions",
    question:"persons true potential can be discovered by testing at an early age?",
      correctAnswer:"no"
},{
    id:2,
    category:"questions",
    question:"The more friends I have on Facebook the better?",
      correctAnswer:"no"
},{
    id:3,
    category:"questions",
    question:"When I see someone being treated unfairly, I don't feel much pity for them?",
      correctAnswer:"no"
},{
    id:4,
    category:"questions",
    question:"I have a clear idea of my limitations",
      correctAnswer:"no"
},{
    id:5,
    category:"questions",
    question:"Intelligence is mostly genetic?",
      correctAnswer:"neither"
}

];




var arr = ["yes","no","neither"]
var start = 1
var score = 0;
each(myquestions,function(e,i){

 var format = $("<div></div>")
 var h1 = $("<h1></h1>")
 h1.text( start + ": " +e.question)
 format.append(h1)
 var radios = $("<div></div>")
 each(arr,function(m){
    var inp = $(`<br><input type='radio' value=${m}> <label for=${m}>${m}</br></label>`)
    inp.click(function(l){
        if(l.target.value === e.correctAnswer){
            score++
        }
    })
    radios.append(inp)
 })

format.append(radios)
 $("#container").append(format)

 start++
})


$("body").append("<button id='submission'>submit</button>" )


$("body").append("<button>reset</button>")
$("#submission").click(function(){
    if(score<2){return alert("weak personality")}
        else if(score>=2&&score<=4){return alert("acceptable personality")}
            else if(score>4){return alert("strong personality")}
        })



 


























 