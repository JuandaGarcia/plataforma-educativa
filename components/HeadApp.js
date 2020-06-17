import Head from 'next/head'

const HeadApp = (props) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				></meta>
				{/* <link rel="icon" href="/img/LogoBlack.svg" /> */}
				<title>Proyecto{props.title}</title>
				<meta name="description" content={props.MetaDescription} />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
				/>
			</Head>
		</>
	)
}

export default HeadApp
