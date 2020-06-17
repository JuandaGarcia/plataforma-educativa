import CursoCard from '../components/CursoCard'
import HeadApp from '../components/HeadApp'
import LayoutApp from '../components/LayoutApp'
import '../css/main.css'
import '../css/app.css'

const Home = () => (
	<>
		<HeadApp />
		<LayoutApp>
			<main className="main-app">
				<div className="title-main">
					<h1>Cursos</h1>
				</div>
				<div className="contenedor-cursos">
					<CursoCard />
					<CursoCard />
					<CursoCard />
					<CursoCard />
					<CursoCard />
					<CursoCard />
					<CursoCard />
					<CursoCard />
				</div>
			</main>
		</LayoutApp>
	</>
)

export default Home
