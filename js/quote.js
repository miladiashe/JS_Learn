const quotes =[
    {
        quote: "대충 흑백사진에 글쓰면 명언같다.",
        author: "침착맨",
    },
    {
        quote: "상상력은 가장 강력한 그래픽카드다.",
        author: "어떤 씹덕",
    },
    {
        quote: "오히려 좋아",
        author: "침착맨",
    },
    {
        quote: "늦었다고 생각할 때가 진짜 늦었다.",
        author: "박명수",
    },
    {
        quote: "억울하잔슴",
        author: "침착맨",
    },
    {
        quote: "지식은 우정을 대신할 수 없어.",
        author: "침착맨",
    },
    {
        quote: "담배를 안 피우면 금연에 성공한다.",
        author: "침착맨",
    },
    {
        quote: "감사하는 마음을 갖자",
        author: "침착맨",
    },
    {
        quote: "이렇게 된 거 청와대로 간다",
        author: "이말년",
    },
    {
        quote: "대충 명언",
        author: "대충 유명인",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
 
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
