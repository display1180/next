import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

/*
--- Pre Rendering (Next.js 작업방식) ---
Next는 초기에 서버단에서 미리 만들어진 page폴더 안쪽에 있는 정적인 컨텐츠를 html로 미리 랜더링한 상태에서 초기 로딩처리 (SEO에 좋음)
이후에 동적으로 데이터 연동을 위한 리액트 컴포넌트가 로드완료되면 Static한 페이지에 해당 내용을 결합 (Hydration)
기존에 리액트는 초기에 모든 서브페이지에 해당하는 파일들을 모두 가져온다음에 렌더링하기 때문에 초기 로딩속도가 늦음
초기 메인 페이지만 pre-render된 상태로 가져오고 서브페이지에 해당하는 파일들은 json형태로만 미리 로드시켜서 초기에 로드시켜야되는 파일의 갯수와 용량을 줄임 
다른페이지의 데이터 구분 next전용의 Link컴포넌트에 연결되어 있는 라우터명을 통해서 json 형태로 데이터만 미리 로드

*/
