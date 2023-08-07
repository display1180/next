import Head from 'next/head';
import Header from './Header';
import styles from './SubLayout.module.scss';
import { Orbitron, Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500'], preload: true });
const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['100', '300'], preload: true });

function SubLayout(props) {
	return (
		<>
			<Head>
				<title>{props.name}</title>
			</Head>

			<section>
				<Header />

				<div className={clsx(styles.subLayout, orbitron.className, notoSans.className)}>
					<h1>{props.name}</h1>
					<p>레이아웃 컨텐츠 페이지입니다.</p>
					{props.children}
				</div>
			</section>
		</>
	);
}

export default SubLayout;
