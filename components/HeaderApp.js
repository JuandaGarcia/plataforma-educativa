const HeaderApp = () => {
	return (
		<header className="header-app">
			<div className="search-header">
				<img src="/img/icons/search.svg" alt="" />
				<input placeholder="Buscar curso" type="text" />
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
	)
}

export default HeaderApp
