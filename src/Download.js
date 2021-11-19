import React, { useEffect, useState } from "react";
import ConnectNamiButton from './components/startNami';
import { Samples } from './styles/global';
import { useStoreState } from "easy-peasy";
import secrets from './secrets';

// Cardano Numbers
const POLICY = "a84ad65a29b6e2033025f7053273fc5b63a1bc9101244ec95e23b3af";

function fromHex(hex) {
    var str = "";
    for (var i = 0; i < hex.length && hex.substr(i, 2) !== "00"; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function DownloadPg(props) {
    const address = useStoreState((state) => state.connection.connected);
    const [nfts, setNFTs] = useState(null); 

    const fetchNFTs = async (address) => {
        const assets = await fetch(
            `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}`,
            { headers: { project_id: secrets.PROJECT_ID } }
          )
            .then((res) => res.json())
            .then((res) => res.amount.filter((asset) => asset.unit.startsWith(POLICY)));

        const promises = assets.map(asset => {
            return fetch(
                `https://cardano-mainnet.blockfrost.io/api/v0/assets/${asset.unit}`,
                { headers: { project_id: secrets.PROJECT_ID } }
            )
            .then((res) => res.json());
        });
        
        Promise.all(promises).then(results => {
            setNFTs(results);
        });

        return assets;
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
                <ConnectNamiButton></ConnectNamiButton>
                <div>{address ? address : ""}</div>

            </div>
        </Samples> 
    )
} 

export default DownloadPg;