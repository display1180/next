import Head from 'next/head';

function Layout(props) {
	return (
		<>
			<Head>
				<title>{props.name}</title>
			</Head>

			<main>{props.children}</main>
		</>
	);
}

export default Layout;
