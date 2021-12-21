import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as DaiImg } from "src/assets/tokens/DAI.svg";
import { ReactComponent as GlaDaiimg } from "src/assets/tokens/GLA-DAI.svg";
import { ReactComponent as GlaUsdtimg } from "src/assets/tokens/GLA-USDT.svg";
import { ReactComponent as wFTMImg } from "src/assets/tokens/wFTM.svg";
import { ReactComponent as UsdcImg } from "src/assets/tokens/USDC.svg";
import { ReactComponent as BusdImg } from "src/assets/tokens/BUSD.svg";
import { ReactComponent as GlaUsdcImg } from "src/assets/tokens/GLA-USDC.svg";
import { ReactComponent as GlaBusdImg } from "src/assets/tokens/GLA-BUSD.svg";

import { abi as BondGlaDaiContract } from "src/abi/bonds/GlaDaiContract.json";
import { abi as GlaUsdcContract } from "src/abi/bonds/GlaUsdcContract.json";

import { abi as DaiBondContract } from "src/abi/bonds/DaiContract.json";
import { abi as MimBondContract } from "src/abi/bonds/MimContract.json";
import { abi as ReserveGlaDaiContract } from "src/abi/reserves/GlaDai.json";
import { abi as ReserveGlaUsdcContract } from "src/abi/reserves/GlaUsdc.json";

import { abi as EthBondContract } from "src/abi/bonds/FtmContract.json";

import { abi as ierc20Abi } from "src/abi/IERC20.json";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond
export const usdt = new StableBond({
  name: "usdt",
  displayName: "USDT",
  bondToken: "USDT",
  bondIconSvg: DaiImg,
  bondContractABI: DaiBondContract,
  // fourAddress: "0xe8fd4630800bA4335801D1b104B07328Ae415605",
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x400F304D820403A30eF17D58c7b5EEE6e8F03935",
      reserveAddress: "0x55d398326f99059ff775485246999027b3197955",
    },
    [NetworkID.Testnet]: {
      bondAddress: "",
      reserveAddress: "",
    },
  },
});

export const usdc = new StableBond({
  name: "usdc",
  displayName: "USDC",
  bondToken: "USDC",
  bondIconSvg: UsdcImg,
  // fourAddress: "0x605c31dD24c71f0b732Ef33aC12CDce77fAC09B6",
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xF21b36A9067f836e17062606F30E1C1d886e5071",
      reserveAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    },
    [NetworkID.Testnet]: {
      bondAddress: "",
      reserveAddress: "",
    },
  },
});

export const busd = new StableBond({
  name: "busd",
  displayName: "BUSD",
  bondToken: "BUSD",
  bondIconSvg: BusdImg,
  // fourAddress: "0x605c31dD24c71f0b732Ef33aC12CDce77fAC09B6",
  bondContractABI: MimBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xD2fC6213a21116ECf3e53d45b86BA2a7d572dc07",
      reserveAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    },
    [NetworkID.Testnet]: {
      bondAddress: "",
      reserveAddress: "",
    },
  },
});

export const gla_usdt = new LPBond({
  name: "gla_usdt_lp",
  displayName: "GLA-USDT LP",
  bondToken: "USDT",
  bondIconSvg: GlaUsdtimg,
  bondContractABI: BondGlaDaiContract,
  reserveContract: ReserveGlaDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x50EbF1Bb71d379E98deB5793E7FD428534337866",
      reserveAddress: "0x182866CF6CAe755261FfFA7D45850ee51952Fd1C",
    },
    [NetworkID.Testnet]: {
      bondAddress: "",
      reserveAddress: "",
    },
  },
  lpUrl:
    "https://spookyswap.finance/add/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
});



export const gla_usdc = new LPBond({
  name: "gla_usdc_lp",
  displayName: "GLA-USDC LP",
  bondToken: "USDC",
  bondIconSvg: GlaUsdcImg,
  bondContractABI: GlaUsdcContract,
  reserveContract: ReserveGlaUsdcContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xA127228b2fF89f0411aA254d5e48f273927FfCD3",
      reserveAddress: "0x4D43a49f2e87997bC73Bb97Be985Ac00CDfD7A31",
    },
    [NetworkID.Testnet]: {
      bondAddress: "",
      reserveAddress: "",
    },
  },
  lpUrl:
    "https://swap.spiritswap.finance/#/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
});



export const gla_busd = new LPBond({
  name: "gla_busd_lp",
  displayName: "GLA-BUSD LP",
  bondToken: "BUSD",
  bondIconSvg: GlaBusdImg,
  bondContractABI: GlaUsdcContract,
  reserveContract: ReserveGlaUsdcContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x4E815683eD404d1Afb137Da5e9926d6ED95cDFeB",
      reserveAddress: "0xdf2a97448ec909f8e95f3986d589f98c4616e498",
    },
    [NetworkID.Testnet]: {
      bondAddress: "",
      reserveAddress: "",
    },
  },
  lpUrl:
    "https://swap.spiritswap.finance/#/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
});

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
export const allBonds = [ gla_usdc,  busd, usdc,  usdt, gla_usdt, gla_busd];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
