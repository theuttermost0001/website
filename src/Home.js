
// STYLES
import { Header, SalesInfo } from './styles/global';

function Home () {
	return(
		<>
			<Header>
				<div className="container">
					<div className="title">Our Collection</div>

					<div className="box">
						<p>Introducing a fine art drop where you determine the rarity, because you get to choose between digital, physical and even mounted, museum quality pieces.</p>
					</div>

					<div className="box">
						<p>Bas Meeuws's art works are already included in numerous private and museum collections around the world, and now he's bringing a 
						collaboration with Per van der Horst Gallery (ArtAddict69) where you can collect a digital NFT or burn it for a physical, signed copy. 
						Bas's work would routinely be sold IRL for 1900 ADA, but for this first drop the price is only 245 ADA for a randomized NFT that you can burn 
						or hold. The choice is yours. There are also 5 ultra rare “mounted" NFTs within the collection that grants you the ability to burn it and get a 
						museum quality mounted, plexiglass protected piece, crated up and shipped directly to your door.</p>
					</div>

					<div className="box">
						<p>Once the collection is sold out, the burn clock starts. Holders have one month to decide whether they burn their NFTs for a physical copy or 
							keep it. Remember, as copies are burned, the rarity of the digital collection increases. How many will you buy? Will you get lucky and pull 
							the ultra rare mounted editions? Will you burn the digital for a physical copy?</p>
					</div>

					<div className="box">
						<p>The choice is yours when our drop starts on October 8th. Get ADA cheap now and join us!</p>
					</div>
				</div>
			</Header>

			<SalesInfo>
				<div className="sales">
					<div className="title">Frequently Asked Questions</div>

					<div className="question">When is the launch day?</div>
					<div className="answer">On the 10th October at 3PM UTC the minting on our website will go live.</div>

					<div className="question">What is the price for minting?</div>
					<div className="answer">245 ADA</div>

					<div className="question">What is the limit per transaction?</div>
					<div className="answer">1 piece</div>

					<div className="question">Will be listed on secondary market?</div>
					<div className="answer">Yes. Firstly we're aiming to get verified on CNFT.IO and expand for more market places.</div>

					<div className="question">More questions?</div>
					<div className="answer">Join our community on either Discord or Twitter and ask us anything there.</div>
				</div>
			</SalesInfo>
		</>
	)
}

export default Home;
