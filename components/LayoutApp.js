import '../css/main.css'
import '../css/app.css'
import NavPanel from '../components/NavPanel'
import HeaderApp from './HeaderApp'

const LayoutApp = ({ children }) => (
	<>
		<div className="container-app">
			<HeaderApp />
			<NavPanel />
			{children}
		</div>
	</>
)

export default LayoutApp
