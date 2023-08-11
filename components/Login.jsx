import { useEffect, useState } from 'react';
import firebase from '@/firebase';
import { useGlobalData } from '@/hooks/useGlobalContext';

function Login() {
	const [Email, setEmail] = useState('');
	const [Pwd, setPwd] = useState('');
	const [Err, setErr] = useState('');

	//로그인 버튼 클릭시 호출될 함수
	const handleLogin = async () => {
		if (!Email || !Pwd) return alert('모든 값을 입력하세요');

		try {
			//현재 state에 관리되고 있는 이메일과 비번을 인수로 넣어서
			//로그인 인증에 성공하면 firebase자체적으로 로그인 상태값을 변경
			await firebase.auth().signInWithEmailAndPassword(Email, Pwd);
			alert('로그인 되었습니다.');
		} catch (err) {
			console.log(err.code);
			//로그인 인증에 실패하면 실패코드에 따라 에러 메세지를 state에 담아주고 화면에 출력
			if (err.code === 'auth/user-not-found') setErr('존재하지 않는 이메일입니다.');
			else if (err.code === 'auth/wrong-password') setErr('비밀번호 정보가 일치하지 않습니다.');
			else setErr('로그인에 실패했습니다.');
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<input
				type='email'
				value={Email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='이메일 주소를 입력하세요'
			/>
			<br />
			<input
				type='password'
				value={Pwd}
				onChange={(e) => setPwd(e.target.value)}
				placeholder='비밀번호를 입력하세요.'
			/>

			<nav>
				<button onClick={handleLogin}>로그인</button>
			</nav>
			{Err !== '' && <p>{Err}</p>}
		</div>
	);
}

export default Login;
