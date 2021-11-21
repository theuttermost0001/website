import React, { useEffect, useState } from "react";
import { Samples } from './styles/global';
import { useStoreState } from "easy-peasy";
import constants from './constants';

function DownloadPg(props) {
    const address = useStoreState((state) => state.connection.connected);
    const [nfts, setNFTs] = useState([]);
    const [gallery, setGallery] = useState(<div></div>); 

    const fetchNFTs = async (address) => {
        const assets = await fetch(`${constants.BLOCKFROST.ADDRESSES}/${address}`, constants.BLOCKFROST.HEADER)
            .then((res) => res.json())
            .then((res) => res.amount.filter((asset) => asset.unit.startsWith(constants.POLICY_ID)));

        if(assets.length > 0) {
            const promises = assets.map(asset => fetch(`${constants.BLOCKFROST.ASSETS}/${asset.unit}`, constants.BLOCKFROST.HEADER).then((res) => res.json()));
            Promise.all(promises).then(results => setNFTs(results));
        }
    };

    const createGalleryJSX = (nfts) => {
        
    }

    useEffect(() => {
        if(address) {
            fetchNFTs(address);
        }
    }, [address]);

    useEffect(() => {
        if(nfts.length > 0){
            const galleryHTML = nfts.map((nft) => {
                const metadata = nft.onchain_metadata; 
                const title = metadata['Asset Title'];
                console.log(title);
                return (
                    <div key={title}>
                        <img src={`https://ipfs.io/ipfs/${metadata.image.slice(7)}`} alt={title} />
                        <div className="description">{title}</div>
                    </div>
                )
            });

            setGallery(
                <div className="gallery">
                    {galleryHTML}
                </div>
            );
        }
    }, [nfts]);

    return(  
        <Samples>
			<div className="content">
				<div className="title" style={{'textAlign':'center'}}>Download</div>
                
                {/* Make this it's own component */}
                { address ? 
                    <p>Please click a Bas Meeuws image to download a full HD version.</p>
                    :
                    <div>
                        <p>Bas Meeuws owners can download high resolution images of their NFT(s). To do so please complete the following steps:</p>
                        <ol style={{marginLeft: '50px'}}>
                            <li>Download <a href="https://namiwallet.io/" target="_blank">Nami Wallet</a></li>
                            <li>Send the Bas Meeuws NFTs to your Nami wallet</li>
                            <li>Click "Connet Nami" in the top right</li>
                        </ol>
                        <p style={{marginTop: '10px'}}>Once you connect your wallet with Bas Meeus NFTs you will see them here!</p>
                    </div>
                }

                { gallery }
                
            </div>
        </Samples> 
    )
} 

export default DownloadPg;