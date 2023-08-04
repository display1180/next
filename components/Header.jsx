import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

function Header() {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		<header id={styles.header}>
			<h1>
				<Link href='/' className={currentPath === '/' ? styles.on : ''}>
					Logo
				</Link>
			</h1>

			<ul id={styles.gnb}>
				<li>
					<Link href='/ssg' className={currentPath === '/ssg' ? styles.on : ''}>
						SSG
					</Link>
				</li>
				<li>
					<Link href='/ssr' className={currentPath === '/ssr' ? styles.on : ''}>
						SSR
					</Link>
				</li>
				<li>
					<Link href='/isr' className={currentPath === '/isr' ? styles.on : ''}>
						ISR
					</Link>
				</li>
				<li>
					<Link href='/post' className={currentPath === '/post' ? styles.on : ''}>
						POST
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
