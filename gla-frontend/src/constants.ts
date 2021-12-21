export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/wkich/gla-subgraph";
export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  56: {
    USDT_ADDRESS: "0x55d398326f99059ff775485246999027b3197955", // duplicate
    USDC_ADDRESS: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    GLA_ADDRESS: "0x55ddaebd527d196e53b0c60cc37246b3364080c2",
    STAKING_ADDRESS: "0x9a94ec0b9f2dacc0ca0526eb16495758b9c0dd21", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xA7DCdc19de0E7d814Dc59560EbA45acD52bF01E9", // Helper contract used for Staking only
    SGLA_ADDRESS: "0x521db40e0c2f1a8e5fed172d4deb6f8e3e04438a",
    DISTRIBUTOR_ADDRESS: "0x41c7F2Dcc3d3DAAF2144398FCbEE4c3cBB5f2144",
    BONDINGCALC_ADDRESS: "0xe7198aa7e84b61f2a97ce45d9ec37876b2a663f1",
    TREASURY_ADDRESS: "0x1bf5ddbd9fb4f4d5a6065a676a69dd4a40387837",
    REDEEM_HELPER_ADDRESS: "0x16605CA96c949f27f767435157a43942a1F18c8c",
  },
};
