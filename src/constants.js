import secrets from "./secrets";

const BLOCKFROST_API = 'https://cardano-mainnet.blockfrost.io/api/v0';

const constants = {
    POLICY_ID: '345ee0e7737379e1b5bf1f72350adbab2d35d9f32c8f1f72bba99def',
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