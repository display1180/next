import Head from 'next/head';
import Header from './Header';
import styles from './SubLayout.module.scss';
import { Orbitron, Noto_Sans_KR } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500'], preload: true });
const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['100', '300'], preload: true });
console.log(orbitron);
console.log(notoSans);

function SubLayout(props) {
	return (
		<>
			<Head>
				<title>{props.name}</title>
			</Head>

			<section>
				<Header />

				<div className={styles.subLayout}>
					<h1 className={orbitron.className}>{props.name}</h1>
					<p className={notoSans.className}>레이아웃 컨텐츠 페이지입니다.</p>
					{props.children}
				</div>
			</section>
		</>
	);
}

export default SubLayout;
