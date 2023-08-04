import SubLayout from '@/components/SubLayout';
import { useState, useEffect } from 'react';

function Csr() {
	console.log('csr');
	const [Now, setNow] = useState('');

	useEffect(() => {
		setNow(performance.now());
	}, []);

	return (
		<SubLayout name={'CSR'}>
			<p>CSR 방식 테스트 페이지입니다.</p>
			<h1>{Now}</h1>
		</SubLayout>
	);
}

export default Csr;
