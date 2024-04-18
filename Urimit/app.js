// express 를 사용하지 않고 http 로 웹서버 띄우기

// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   if (req.url === "/") {
//     res.end("여기는 루트입니다.");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인 화면입니다.");
//   }
// });

// app.listen(8001, () => {
//   console.log("http 로 가동된 서버입니다.");
// });

// 위의 코드를 보니까 우리가 왜 express 를 사용해야하는지 잘 알겠죠~?



// express 를 사용하여 웹서버 띄우기

const express = require("express");
const app = express();

// 앱 세팅
app.set("views", "./views");
app.set("views engine", "ejs");

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
      </head>

      <body>
        여기는 루트입니다.
      </body>
      </html>
  `);
});

app.get("/login", (req, res) => {
  res.send(`
    <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
      </head>

      <body>
        <input type="text" placeholder="아이디"><br/>
        <input type="text" placeholder="비밀번호"><br/>
        <button>로그인</button>
      </body>
      </html>
  `);
});

app.listen(8000, ()=> {
  console.log("서버 가동");
});