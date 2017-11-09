import { h, Component } from 'preact';
import Logos from '../../components/slider/slider';
import style from './style';

export default class Home extends Component {
	constructor() {
		super();
	}

	render() {

		return (
			<div class={style.home}>
				<div class={style.logoWrapper}>
					<div class={style.logo} />
				</div>
			 <h1>About Us</h1>
				 <p>
					KT Studios is a fully-contained, multi-functional development company established to develop and sell formats and series to network, cable and digital channels. With decades of combined experience, we have a proven track record of turning initial ideas into sellable projects and taking them through production.</p>

					<p>
					Our team has developed and produced thousands of hours of television across all major networks, including American Idol, The Bachelor, Jersey Shore, E! True Hollywood Story, THS Investigates, Nate & Jeremiah By Design, Siesta Key, Botched, Co-Dependent and My Ghost Story.
				 </p>
				 <p class={style.soon}>Full Website Coming Soon</p>
			</div>
		);
	}
}
