import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();
	const currentPath = router.pathname;
	console.log(currentPath);

	return (
		<header>
			<h1>
				<Link href='/'>Logo</Link>
			</h1>

			<ul id='gnb'>
				<li>
					<Link href='/ssg' className={currentPath === '/ssg' ? 'on' : ''}>
						SSG
					</Link>
				</li>
				<li>
					<Link href='/ssr' className={currentPath === '/ssr' ? 'on' : ''}>
						SSR
					</Link>
				</li>
				<li>
					<Link href='/isr' className={currentPath === '/isr' ? 'on' : ''}>
						ISR
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
