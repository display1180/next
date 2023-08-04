import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';

function Detail() {
	const router = useRouter();
	const { id } = router.query;
	console.log(id);

	return (
		<SubLayout>
			<h3>{id}번째 포스트상세페이지입니다.</h3>
		</SubLayout>
	);
}

export default Detail;
