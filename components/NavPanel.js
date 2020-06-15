import ActiveLink from './ActiveLink'
import Link from 'next/link'

const NavPanel = () => {
	return (
		<nav className="nav-app">
			<Link href="/">
				<a className="logo">
					<img src="/img/logo.png" alt="Logo" />
				</a>
			</Link>
			<ul>
				<li>
					<ActiveLink href="/">
						Cursos
						<img src="/img/icons/book.svg" alt="" />
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/calendar">
						Calendario
						<img src="/img/icons/calendar.svg" alt="" />
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/s">
						Tareas pendientes
						<img src="/img/icons/task.svg" alt="" />
					</ActiveLink>
				</li>
			</ul>
			<div className="promo-nav">
				<img src="/img/illustrations/mano.png" alt="Promo" />
				<p>La cuenta Pro es más poderosa. obtenga un 30% de descuento.</p>
				<button>Obtener Pro</button>
			</div>
			<div className="profile-nav">
				<img src="/img/app/profile.jpg" alt="Profile" />
				<div>
					<span>Lana García</span>
					<span>Estudiante</span>
				</div>
			</div>
		</nav>
	)
}

export default NavPanel
