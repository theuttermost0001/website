import secrets from "./secrets";

const BLOCKFROST_API = 'https://cardano-mainnet.blockfrost.io/api/v0';

const constants = {
    POLICY_ID: 'a84ad65a29b6e2033025f7053273fc5b63a1bc9101244ec95e23b3af',
    BLOCKFROST: {
        ADDRESSES:`${BLOCKFROST_API}/addresses`,
        ASSETS: `${BLOCKFROST_API}/assets`,
        HEADER: { 
            headers: { 
                project_id: secrets.PROJECT_ID 
            }
        }
    }
};

export default constants;  