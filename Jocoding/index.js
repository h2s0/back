const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

// cors 조건 설정 가능 - 빈칸 : 모든 요청 허용
app.use(cors())

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

// 주소 사이트에는 한글이 들어가면 안된다. 그래서 한글을 영어, 숫자, 특수문자가 섞인 문자로 변환해줘야하는데, 이 과정을 인코딩 이라고 한다.

app.get('/cat', (req, res) => {
  res.send('냥~')
})



// GET 통신 : 주소창을 이용하는 방식 1. parameter = params 사용 2. query 사용 하는 방법이 있다.

// 1. parameter : 변수를 받는 방법의 코드
app.get('/user/:id', (req, res) => {
  // 요청 들어온 것의 parameter 를 받아서 q 라는 변수 안에 넣는다.
  const p = req.params
  console.log(p.id)
  // id 라는 변수의 request 요청이 id의 값으로 들어간다. 즉, 콜론 (:) 을 쓰고 변수 명을 작성해주면 그 값이 들어온다.
  res.json({'userid': p.id})
})


// 2. query : 물음표 (?) 작성 후 key value 구조로 입력
app.get('/user/:id', (req, res) => {
  const q = req.query
  console.log(q.q)
  console.log(q.name)
  res.json({'userid': q.id})
})



// POST 통신 : POST 는 주소창으로 요구하는게 아니라 axios, fetch 를 이용할 때 사용할 수 있다.
// body 라는 곳에 값이 담겨야 한다.
app.use(express.json())
app.post('/user/:id', (req, res) => {
  const p = req.params;
  console.log(p);
  const b = req.body;
  console.log(b);

  res.send({ 'message' : 'Hello world!' })
})

// params 를 받아서 받은 데이터 기반으로 처리할 수 있다.
// name 에 따라서 다른 울음소리를 출력하는 api 를 만들어보자!
app.get('/sound/:name', (req, res) => {
  const { name } = req.params
  
  if (name == "dog") {
    res.json({'sound' : '멍멍'})
  } else if (name == "cat") {
    res.json({'sound' : '냥'})
  } else if (name == "pig") {
    res.json({'sound' : '꿀꿀ㄹ'})
  }
  else {
    res.json({'sound' : 'unknown'})
  }
  console.log(name)

  res.json({ 'sound' : '야옹' })
})



// CORS : HTML 파일에서 어떤 서버로 요청을 했을 때 보안 상의 문제가 있을 수도 있어서 기본적으로 막는다. 그 요청을 받아주게? 하는 게 CORS 인데, HTML 로 요청하는 것은 CORS 가 없으면 차단되는 경우도 있다.
// 다른 서버에서 요청하더라도 받아주는 그런것들이 필요하다. 그래야 프론트와 소통을 할 수 있겠죠?


// 3000번을 듣고있을 때 실행
app.listen(port, () => {
  console.log(`Example app listening on por ${port}`)
})

