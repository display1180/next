import SubLayout from '@/components/SubLayout';
import axios from 'axios';
import { useEffect } from 'react';

function Post() {
	useEffect(() => {
		axios.get('/api/post').then((res) => console.log(res));
	}, []);
	return (
		<SubLayout>
			<p>포스트페이지 인트로화면입니다.</p>
		</SubLayout>
	);
}

export default Post;
