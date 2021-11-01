
import { Rarity } from './styles/global';
import Chart from './images/rarity-chart.png';

function RarityPg () {
	return(
		<Rarity>
			<div className="content">
				<div className="title">Rarity chart</div>

				<img src={Chart} alt="" />
			</div>
		</Rarity>
	)
}

export default RarityPg;
