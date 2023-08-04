import SubLayout from '@/components/SubLayout';

function Ssr(props) {
	return (
		<SubLayout name={'SSR'}>
			<p>SSR 방식 테스트 페이지입니다.</p>
			<h1>{props.now}</h1>
		</SubLayout>
	);
}

export async function getServerSideProps() {
	//페이지 접속시마다 호출 (서버단에서 동작):
	//full load되는 것이 아닌 정적인 페이지는 재활용하고
	//동적으로 서버에서 fetching한 데이터만 hydration
	//build타임에 실행되는것이 아닌
	//페이지가 렌더링 될때마다 실행
	console.log('ssr');
	return {
		props: { now: performance.now() },
	};
}

export default Ssr;
