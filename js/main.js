var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    person: "― Oscar Wilde",
  },

  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”",
    person: "― Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    person: "― Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    person: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.”",
    person: "― Bernard M. Baruch",
  },
  {
    quote:
      "“You have gotta dance like there is nobody watching ,Love like you will never be hurt,Sing like there is nobody listening, And live like it is heaven on earth.”",
    person: "― William W. Purkey",
  },
  {
    quote:
      "““You know you are in love when you can not fall asleep because reality is finally better than your dreams.”",
    person: "― Dr. Seuss",
  },
];
function showQuote() {
  var x = Math.random() * quotes.length;
  x = Math.floor(x);
  var quotesBox=`
  <div class="changed" >
  <p>${quotes[x].quote}</p>
  <p>${quotes[x].person}</p>
</div>`
document.getElementById('changed').innerHTML=quotesBox

}

