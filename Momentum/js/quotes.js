const quotes = [
    {
        quote: "게으른 행동에 대해 하늘이 주는 벌은 두가지이다. 하나는 자신의 실패이고, 또 다른 하나는 내가 하지 않은 일을 해낸 옆사람의 성공이다. ",
        author: "줄스 레나드",
    },
    {
        quote: "인생은 스스로 알아서 하지 않으면 아무도 아무것도 가르쳐 주지 않는다. ",
        author: "빌게이츠.",

    },
    {
        quote: "나는 바보가 된 기분입니다. 나는 기회를 놓쳤다 생각했는데, 우리는 이를 만회하기 위하여 더욱 열심히 일을 했습니다. ",
        author: "스티브 잡스",
    },
    {
        quote: "지나간 슬픔에 새 눈물을 낭비하지 마라",
        author: "에우리피데스",
    },
    {
        quote: "그 사람을 알고 싶으면 그의 친구를 보라 ",
        author: "공자",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;