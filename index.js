const express = require('express')
const app = express()
const port = 3000

// app.HTTP메소드('/라우팅', 콜백함수)
app.get('/', (req, res) => {
  res.send('Hello World')
})

// 콜백함수에 대한 설명
// 함수 (끝나고 실행할 함수)
// 예시 : setTimeout(()=>{},1000) 1000ms 뒤에 {} 안의 함수를 호출해라

// req, res 는 무엇일까? 각각 request, response 라는 뜻, 요청과 응답.
// 요청 정보와, 응답 정보를 담아준다.
// res.send("hello world") 는 요청 정보에 헬로 월드 글자를 담겠다는 뜻

// 루트 = '/' 밖에 없었는데 다른 api 를 만들어보자
// 라우팅에 따라 다른 값을 출력하게 만들어보겠다!

app.get('/dog', (req, res) => {
  res.json({'sound' : '멍멍'})
})

// send 를 통해서 html 태그 : h1, 링크를 보내는 a 태그 등등.. 을 보낼 수 있다.
// axios 로 요청을 보내고 express 로 응답을 받는 것

// 당연히 json 정보를 보내줄 수도 있다. send 대신 json 이라고 명시해주면 과정이 더 짧아진다.

app.get('/cat', (req, res) => {
  res.send('냥~')
})

// 3000번을 듣고있을 때 실행
app.listen(port, () => {
  console.log(`Example app listening on por ${port}`)
})

