import HeadApp from '../../components/HeadApp'
import LayoutApp from '../../components/LayoutApp'
import '../../css/main.css'
import '../../css/app.css'
import '../../css/animations.css'
import '../../css/pages/course.css'

const Home = () => (
	<>
		<HeadApp />
		<LayoutApp>
			<main className="main-app">
				<div className="course-container">
					<section className="course__head">
						<div className="course__head__text">
							<h1 className="course__title">Programacíon web</h1>
							<span>Jack Dorsey</span>
						</div>
						<div className="course__head__gradient"></div>
						<img
							className="course__head__image"
							src="https://images.unsplash.com/photo-1586765677067-f8030bd8e303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
							alt=""
						/>
					</section>
					<section className="class-list"></section>
					<section className="info-course"></section>
				</div>
			</main>
		</LayoutApp>
	</>
)

export default Home
