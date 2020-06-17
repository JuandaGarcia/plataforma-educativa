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
							<button>
								<img src="/img/icons/points.svg" alt="opciones" />
							</button>
						</div>
						<div className="title-card">
							<h2>Programación Web</h2>
							<div>
								<span>Jack Dorsey</span>
							</div>
						</div>
						<div className="ver-curso">
							<span>Ver curso</span>
						</div>
					</div>
					<div className="gradient-card"></div>
					<img
						className="photo-card"
						src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
						alt=""
					/>
				</div>
			</a>
		</Link>
	)
}

export default CursoCard
