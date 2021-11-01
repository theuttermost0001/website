
// REACT
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

// COMPONENTS
import Home 	from './Home';
import AboutPg 	from './About';
import Creators from './Creators';
import Gallery 	from './Gallery';
import Rarity 	from './Rarity';
import Buy 		from './Buy';
import TheBurn 	from './TheBurn';

// STYLES
import GlobalStyle, { Nav, TopBar, Footer } from './styles/global';

// IMAGES
import Logo 	from './images/logo.png';
import NftMaker from './images/icon-nftmaker.svg';
import Cardano 	from './images/icon-cardano.svg';
import Twitter 	from './images/icon-twitter.png';
import Discord 	from './images/icon-discord.png';

function App() {
	return (
		<>
			<GlobalStyle/>

			<TopBar>
				<img src={Logo} width="380" alt="" />
			</TopBar>

			<Router>
				{/* NAV */}
				<Nav>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/creators">Creators</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/rarity">Rarity</Link>
					<Link to="/buy">Buy</Link>
					<Link to="/theburn">The Burn</Link>
				</Nav>

				{/* COMPONENTS */}
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>

					<Route path="/about">
						<AboutPg/>
					</Route>

					<Route path="/creators">
						<Creators/>
					</Route>

					<Route path="/gallery">
						<Gallery/>
					</Route>

					<Route path="/rarity">
						<Rarity/>
					</Route>

					<Route path="/buy">
						<Buy/>
					</Route>

					<Route path="/theburn">
						<TheBurn/>
					</Route>
				</Switch>
			</Router>

			{/* FOOTER */}
			<Footer>
				<div>
					<a href="https://www.nft-maker.io/pro" target="_blank" rel="noreferrer"><img src={NftMaker} width="150" alt="" /></a>
					<a href="https://cardano.org/" target="_blank" rel="noreferrer"><img src={Cardano} width="150" alt="" /></a>
					<a href="https://twitter.com/basmeeuws" target="_blank" rel="noreferrer"><img src={Twitter} width="32" alt="" style={{'margin':'0 20px'}} /></a>
					<a href="https://discord.gg/W6UfvcxH6x" target="_blank" rel="noreferrer"><img src={Discord} width="32" alt="" /></a>
				</div>

				<div>
					<p><strong>Policy Id</strong>: a84ad65a29b6e2033025f7053273fc5b63a1bc9101244ec95e23b3af</p>
				</div>
			</Footer>
		</>
	);
}

export default App;
