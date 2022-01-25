import { Component } from 'react';
import About from './components/About';
import ProductLists from './components/ProductLists';
import Services from './components/Services';

class App extends Component {
	render() {
		return (
			<div className="App">
				<About />
				<Services />
				<ProductLists />
			</div>
		);
	}
}

export default App;
