
import { TextImage } from './styles/global';

import BasImg 	from './images/bas.png';
import PerImg 	from './images/per.png';

function CreatorsPg () {
	return(
		<TextImage>
			<div className="content">
				<div className="text-image">
					<div className="txt">
						<div className="title">Bas Meeuws</div>

						<p>Born 1974, Heerlen, The Netherlands</p>

						<p>
							To really see Bas Meeuws’ flowers, you have to take your time. If you are too hasty,
							you will just see a vase of flowers, but if you look more closely, you will see that each
							and every flower has an incredible beauty. There is the reflection of the light from a leaf,
							the elegant arch of a stem. Your gaze explores petals, insects and leaf veins, roams the
							landscape behind the flowers and lingers on the vase, with its distinct shape and decoration.
							You now start to notice that there is a friction: the proportions between the flowers are strange,
							the play of light and shadow has something enigmatic.
						</p>

						<p>
							Looking properly is for the eye what tasting a refined dish is for the tongue. Bas Meeuws’
							work seduces you into employing the power of sight for pure sensory pleasure.
						</p>

						<p>
							Our gaze follows that of the artist. Meeuws has a sharp eye for the richness of the shapes,
							colours and textures of flowers, insects and birds. He observes them intensely, whether they are
							in his own back garden, a municipal park, the Muiderslot gardens, the Hortus Botanicus in Leiden or
							the magnificent national parks of Taiwan. Camera, software and printing techniques are extensions of
							his unparalleled human eye. He uses technology to give us, the spectators, what he has seen.
							“See how beautiful it is” is what his flower still lifes are silently saying. A feast for the eye.
						</p>
					</div>

					<div className="img">
						<img src={BasImg} alt="" />
					</div>
				</div>

				<div className="text-image">
					<div>
						<div className="title">Per van der Horst Gallery</div>

						<p>My name is Per van der Horst and I run an art gallery in Taipei, Taiwan.</p>

						<p>Originally I’m from the Netherlands where I used to run an art gallery in The Hague together with Jo-Ann Knop. 
						In 2013 I moved to Taiwan where the only physical gallery is located now. We do participate in art fairs around 
						the world still, like KunstRAI/Art Amsterdam, PAN Amsterdam, PHOTOFAIRS Shanghai, Photo Basel and many more.</p>

						<p>Here is a link to our website to see the artists we represent and the upcoming art fairs we will participate in. 
						It was a bit quiet because of covid-19 the past few years though.</p>

						<p><a href="http://www.pervanderhorst.com" target="_blank" rel="noreferrer">www.pervanderhorst.com</a></p>
					</div>

					<div className="img">
						<img src={PerImg} alt="" />
					</div>
				</div>
			</div>
		</TextImage>
	)
}

export default CreatorsPg;
