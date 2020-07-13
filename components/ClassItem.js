import React from 'react'
import Link from 'next/link'

const ClassItem = () => {
	return (
		<Link href="/">
			<a>
				<div className="class-item">
					<div className="class-item__info">
						<h3>HTML, CCS y Javascript</h3>
						<div className="class-item__info__time">
							<img
								className="class-item__info__time__icon"
								src="/img/icons/clock.svg"
								alt=""
							/>
							<span className="class-item__info__time__text">5 min</span>
						</div>
					</div>
					<div className="class-item-type">
						<div className="class-item-type__blur">
							<img src="/img/icons/play.svg" alt="" />
						</div>
						<img
							className="class-item-type__img"
							src="https://images.unsplash.com/photo-1580617971729-27c448892e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
							alt=""
						/>
					</div>
				</div>
			</a>
		</Link>
	)
}

export default ClassItem
