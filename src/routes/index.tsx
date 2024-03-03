import { Route, Switch } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import BookDetail from '../pages/BookDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppContext } from '../store/app';
import Order from '../pages/Order';
import NotFound from '../pages/NotFound';

export const Routes = () => (
	<AppContext>
		<Header />
		<Switch>
			<Route exact path='/' component={Catalog} />
			<Route path='/book' component={BookDetail} />
			<Route path='/order' component={Order} />
			<Route path='*' component={NotFound} />
		</Switch>
		<Footer />
	</AppContext>
);
