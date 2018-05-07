import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.styl';
import './js/main';


function importAll(r) {
	return r.keys().map(r);
}


importAll(require.context('./img/', true, /\.(png|jpe?g|svg)$/));

if (module.hot) {
	module.hot.accept();
}
