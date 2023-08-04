import SubLayout from '@/components/SubLayout';

function Ssg(props) {
	return (
		<SubLayout name={'SSG'}>
			<p>SSG 방식 테스트 페이지입니다.</p>
			<h1>{props.now}</h1>
		</SubLayout>
	);
}

export async function getStaticProps() {
	//해당 프로젝트를 빌드시에 한번만 호출
	console.log('ssg');
	return {
		props: { now: performance.now() },
	};
}

export default Ssg;
