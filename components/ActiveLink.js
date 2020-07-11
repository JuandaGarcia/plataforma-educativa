import { useRouter } from 'next/router'

const ActiveLink = ({ children, href }) => {
	const router = useRouter()
	const style = {
		opacity: router.pathname === href ? 1 : 0.5,
		fontWeight: router.pathname === href ? 'bold' : 500,
		color: router.pathname === href ? '#6E8AD9' : '#000',
	}
	const blueBackground = router.pathname === href ? 'blueBackground' : ''

	const handleClick = (e) => {
		e.preventDefault()
		router.push(href)
	}

	return (
		<a
			href={href}
			onClick={handleClick}
			className={blueBackground}
			style={style}
		>
			{children}
		</a>
	)
}

export default ActiveLink
