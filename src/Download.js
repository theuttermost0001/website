import React, { useEffect, useState } from "react";
import { Samples } from './styles/global';
import { useStoreState } from "easy-peasy";
import constants from './constants';

function DownloadPg(props) {
    const address = useStoreState((state) => state.connection.connected);
    const [nfts, setNFTs] = useState([]); 

    const fetchNFTs = async (address) => {
        const assets = await fetch(`${constants.BLOCKFROST.ADDRESSES}/${address}`, constants.BLOCKFROST.HEADER)
            .then((res) => res.json())
            .then((res) => res.amount.filter((asset) => asset.unit.startsWith(constants.POLICY_ID)));

        if(assets.length > 0) {
            const promises = assets.map(asset => fetch(`${constants.BLOCKFROST.ASSETS}/${asset.unit}`, constants.BLOCKFROST.HEADER).then((res) => res.json()));
            Promise.all(promises).then(results => setNFTs(results));
        }
    };

    useEffect(() => {
        if(address) {
            fetchNFTs(address);
        }
    }, [address]);

    useEffect(() => {
        console.log(nfts);
    }, [nfts]);

    return(  
        <Samples>
			<div className="content">
				<div className="title" style={{'textAlign':'center'}}>Download</div>
                <div>{address ? address : ""}</div>
                {/* <p>As a Bas Meeuws holder you can connect your Nami Wallet to download a high resolution image of your NFT.</p> */}
            </div>
        </Samples> 
    )
} 

export default DownloadPg;