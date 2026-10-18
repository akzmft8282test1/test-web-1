const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// JSON 및 Form body 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우트: 메인 테스트 페이지
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 라우트: 가상 로그인 페이지
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// 테스트용 API 엔드포인트들
app.post('/api/action-a', (req, res) => {
  const { text } = req.body;
  res.json({ success: true, message: `버튼 A 실행 완료! (입력값: ${text || '없음'})` });
});

app.post('/api/action-b', (req, res) => {
  const { text } = req.body;
  res.json({ success: true, message: `버튼 B 실행 완료! (입력값: ${text || '없음'})` });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // 가상 로그인 로직
  if (username && password) {
    res.json({ success: true, message: `[가상 로그인 성공] 환영합니다, ${username}님!` });
  } else {
    res.status(400).json({ success: false, message: '아이디와 비밀번호를 모두 입력해주세요.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
