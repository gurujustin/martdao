export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/wkich/gla-subgraph";
export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  250: {
    USDT_ADDRESS: "0x55d398326f99059ff775485246999027b3197955", // duplicate
    USDC_ADDRESS: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    DAI_ADDRESS: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
    GLA_ADDRESS: "0xc8a708aBcD80aa5e022a9fE927cB1210D71BE60b",
    STAKING_ADDRESS: "0x6826Cd045fD1Afc99Dc38fF60A1b5D3A44C3548c", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xbE575B27C0bD62214A385C9CA6C5600E25343901", // Helper contract used for Staking only
    SGLA_ADDRESS: "0x58C9cEF241D37782dad94f29FF100110C150A83E",
    DISTRIBUTOR_ADDRESS: "0x846c00070117950E1D5C2a42703377f22CBA9932",
    BONDINGCALC_ADDRESS: "0xb51EdC508b2E1EB6AbEc04922dca2682bB02F89e",
    TREASURY_ADDRESS: "0x415dA53Dd908e8191c1FA3e599c782e2c7FA7198",
    REDEEM_HELPER_ADDRESS: "0x16605CA96c949f27f767435157a43942a1F18c8c",
  },
};
