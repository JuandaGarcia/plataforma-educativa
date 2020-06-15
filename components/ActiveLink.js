import { useRouter } from 'next/router'

const ActiveLink = ({ children, href }) => {
	const router = useRouter()
	const style = {
		opacity: router.pathname === href ? 1 : 0.5,
		fontWeight: router.pathname === href ? 'bold' : 500,
	}

	const handleClick = (e) => {
		e.preventDefault()
		router.push(href)
	}

	return (
		<a href={href} onClick={handleClick} style={style}>
			{children}
		</a>
	)
}

export default ActiveLink
