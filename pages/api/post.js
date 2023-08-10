//안쪽에서 await로 동기화 처리할 예정이므로 wrapping함수에 async지정
export default async function handler(req, res) {
	//await로 동기화하므로 then,catch문을 쓸수 없으니 try, catch문으로 예외처리
	try {
		//요청 성공시 실행될 구문
	} catch (err) {
		//요청 실패시 실행될 구문
	}
}
