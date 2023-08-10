import { connectMongoDB } from '@/libs/MongoConnect';

export default async function handler(req, res) {
	try {
		const DB = await connectMongoDB();
	} catch (err) {
		//요청 실패시 실행될 구문
		res.status(400).send({ err });
	}
}

//데이터 저장 작업 순서
//1.저장할 데이터의 구조에 맞게 스키마 생성
//2.api라우터에서 스키마 적용된 모델객체에 클라리언트로부터 전달받은 데이터를 바인딩후 DB에 저장한뒤, 응답성공 클라이언트로 전송
//2-1 : 클라이언트에서 포스트요청 받음
//2-2 : 카운터모델에서 commnunityNum가져온뒤 클라인언트로부터 전달받은 객체와 결합
//2-3 : 결합된 객체를 Post모델로 저장
//2-4 : 저장이 완료되면 다시 Counter값을 1증가
