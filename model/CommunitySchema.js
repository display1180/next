import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		communityNum: Number,
	},
	{ collection: 'Community' }
);

//모델 인스턴스가 한번 컴파일되면 overWrite불가하는 콘솔에러 해결
//오류 원인 : 이미 한번 생성된 컬랙션임에도 불구하고 데이터변경 요청이 있을때마다 새로운 컬랙션 생성시도 문제
//해결 : 해당 컬랙션이 없을때만 생성하고 이미 있으면 기존의 컬렉션 호출
const Community = mongoose.models.Community || mongoose.model('Community', communitySchema);
export { Community };
