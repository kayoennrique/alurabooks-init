import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErroBoundary from '../components/ErroBoundary';
import BookDetail from '../pages/BookDetail';
import Catalog from '../pages/Catalog';
import Order from '../pages/Order';
import NotFound from '../pages/NotFound';
import { AppContext } from '../store/app';

export const Routes = () => (
	<ErroBoundary>
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
	</ErroBoundary>
);
