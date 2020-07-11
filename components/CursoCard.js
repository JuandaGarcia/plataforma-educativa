import Link from 'next/link'
import '../css/components/CursoCard.css'

const CursoCard = () => {
	return (
		<Link href="/">
			<a>
				<div className="curso-card">
					<div className="contend-card">
						<div className="type-opcions">
							<div>
								<span>Programación</span>
							</div>
						</div>
						<div className="title-card">
							<h2>Programación Web</h2>
							<div>
								<span>Jack Dorsey</span>
							</div>
						</div>
						<div className="ver-curso">
							<span>Ver curso</span>
							<img
								className="ver-curso__img"
								src="/img/icons/arrow-right.svg"
								alt="→"
							/>
						</div>
					</div>
					<div className="gradient-card"></div>
					<img
						className="photo-card"
						src="https://images.unsplash.com/photo-1594009568931-94fd1c49e38c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
						alt="Course image"
					/>
				</div>
			</a>
		</Link>
	)
}

export default CursoCard
