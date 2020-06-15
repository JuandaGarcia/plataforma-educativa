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
			</Head>
		</>
	)
}

export default HeadApp
