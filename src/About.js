
import { TextImage } from './styles/global';

import AboutImg 	from './images/about-flower.png';

function AboutPg () {
	return(
		<TextImage>
			<div className="content">
				<div className="text-image">
					<div className="txt">
						<div className="title">About our collection</div>

						<p>
							Right now Bas Meeuws is working very hard to create 1500 unique works for our first cnft drop. 
							The collection will consist of 150 different flowers and flower compositions, all using 
							unsig #1102 as a background. Sometimes he might use the same flower and only change its 
							colour, angle, or state of growth, other times he combines two or more flowers in one image. 
							Every composition will then get populated with different butterflies and other insects to create 
							10 unique versions of each.
						</p>

						<p>
							It is a lot of work as this is all done by hand. There is no algorithm to put the flowers and 
							insects in automatically, because every work needs the artist’s eye to get the best balanced 
							composition.
						</p>

						<p>
							All the flowers and insects are personally photographed by Bas Meeuws and several have already 
							been used in some of his bigger real life artworks, many of which are included in international 
							private and museum collections.
						</p>

						<p>
							Our drop will be a little bit different than usual in the way that we will give the buyers one month 
							time to make a choice of keeping the nft or burning it to receive an original, signed by the artist, 
							high quality print. Every work from the collection can be exchanged for a print, but only five works 
							can de exchanged for a mounted, ready to hang on the wall artwork. Mounted means that the nft will be 
							printed on high quality professional photo paper, fixed onto a dibond background, protected with a 
							plexiglas layer attached on top of it and will have an aluminium profile at the back, making it possible 
							to hang it directly on the wall. This will all be done by a professional photo lab in the Netherlands, 
							where all Bas Meeuws’s works which are for sale in our gallery are printed and mounted. In the rarity 
							section you can see which five works can be exchanged for a mounted version.
						</p>

						<p style={{'margin':'0 0 40px 0'}}>
							Of the 1500 nft’s in the collection, the gallery will reserve 100 pieces (only 6.67%) for sales in the 
							gallery, on art fairs and for future museum exhibitions. They will be randomly pulled, just like all 
							the other nft’s.
						</p>

					</div>

					<div className="img">
						<img src={AboutImg} alt="" />
					</div>
				</div>
			</div>
		</TextImage>
	)
}

export default AboutPg;
