import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {

	render() {
		return (
			<header class={style.header}>
				<div class={style.banner}>
				<a href='mailto:info@kt-studios.com'>Reach out to us at info@kt-studios.com</a>
				</div>
			</header>
		);
	}
}
