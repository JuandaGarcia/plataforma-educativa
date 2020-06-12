import Head from 'next/head'
import Link from 'next/link'
import CursoCard from '../components/CursoCard'
import '../css/app.css'

const Home = () => (
	<>
		<Head>
			<title>Plataforma educativa</title>
			<link rel="icon" href="/favicon.ico" />
			<link
				href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
				rel="stylesheet"
			></link>
		</Head>
		<div className="container-app">
			<header className="header-app">
				<div className="search-header">
					<img src="/img/icons/search.svg" alt="" />
					<input placeholder="Buscar curso" type="text" />
					<img src="" alt="" />
				</div>
				<div className="btns-header">
					<button>
						<img src="/img/icons/bell.svg" alt="Notifications" />
						<div className="circle-nofification"></div>
					</button>
					<button>
						<img src="/img/icons/task.svg" alt="Task" />
					</button>
					<button>Nuevo curso</button>
				</div>
			</header>
			<nav className="nav-app">
				<Link href="/">
					<a className="logo">
						<img src="/img/logo.png" alt="Logo" />
					</a>
				</Link>
				<ul>
					<li>
						<Link href="/">
							<a>
								Cursos
								<img src="/img/icons/book.svg" alt="" />
							</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>
								Calendario
								<img src="/img/icons/calendar.svg" alt="" />
							</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>
								Tareas pendientes
								<img src="/img/icons/task.svg" alt="" />
							</a>
						</Link>
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
			<main className="main-app">
				<h1>Cursos</h1>
				<div className="contenedor-cursos">
					<CursoCard />
					<CursoCard />
					<CursoCard />
				</div>
			</main>
		</div>
	</>
)

export default Home
