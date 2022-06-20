const quotes = [
  {
    quote: "늦었다고 생각할 때가 진짜 너무 늦었다",
    author: "- 박명수",
    image: "1.jpg",
  },
  {
    quote: "죽음과 결혼은 뒤로 미룰수록 좋다",
    author: "- 박명수",
    image: "2.jpg",
  },
  {
    quote: "뭘 무서워 그냥 하는 거지. 난관이 이것만 있겠어?",
    author: "- 박명수",
    image: "3.jpg",
  },
  { quote: "잠을 자도 피로가 안 풀리냐", author: "- 박명수", image: "4.jpg" },
  { quote: "원수는 직장에서 만난다", author: "- 박명수", image: "5.jpg" },
  {
    quote: "내 명분·이익이나 찾으면 될 것 같아요",
    author: "- 박명수",
    image: "6.jpg",
  },
  {
    quote: "열심히는 하지만 노력은 안 한다",
    author: "- 박명수",
    image: "7.jpg",
  },
  {
    quote: "조금만 더 돈 벌고 뜬다. 이 바닥",
    author: "- 박명수",
    image: "8.jpg",
  },
  {
    quote: "사람을 피곤하게 만들어. 그렇지 않아도 피곤한데",
    author: "- 박명수",
    image: "9.jpg",
  },
  {
    quote: "엉망으로 살아야 해! 인생은 한 번이야!",
    author: "- 박명수",
    image: "10.jpg",
  },
  { quote: "감사의 표시는 돈으로 하라", author: "- 박명수", image: "11.jpg" },
  {
    quote: "오는건 순서 있어도 가는건 순서 없다",
    author: "- 박명수",
    image: "12.jpg",
  },
  {
    quote:
      "허벌가에서 태어나서 이런 거예요! 저도 재벌가에서 태어났으면 이런 거 안 해요!",
    author: "- 박명수",
    image: "13.jpg",
  },
  {
    quote: "사람이 배고플 때 뭐가 나온다",
    author: "- 박명수",
    image: "14.jpg",
  },
  {
    quote: "꿈은 없고요. 그냥 놀고 싶습니다",
    author: "- 박명수",
    image: "15.jpg",
  },
  { quote: "선배는 입닫고 지갑을 열어라", author: "- 박명수", image: "16.jpg" },
  {
    quote: "시작은 반이 아니다. 시작일뿐이다",
    author: "- 박명수",
    image: "17.jpg",
  },
  { quote: "성공은 1%의 재능과 99% 빽", author: "- 박명수", image: "18.jpg" },
  { quote: "티끌모아 티끌", author: "- 박명수", image: "19.jpg" },
];

const quote = document.querySelector("#quote h1");
const author = document.querySelector("#quote h3");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//이미지부분
const chosenImage = todaysQuote.image;

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
