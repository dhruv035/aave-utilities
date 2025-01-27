/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAaveBiconomyForwarder,
    IAaveBiconomyForwarderInterface,
} from "./IAaveBiconomyForwarder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "depositToAave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lPAddress",
        type: "address",
      },
    ],
    name: "setLendingPoolAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "setTrustedForwarder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawFromAave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IAaveBiconomyForwarder__factory {
  static readonly abi = _abi;
  static createInterface(): IAaveBiconomyForwarderInterface {
    return new utils.Interface(_abi) as IAaveBiconomyForwarderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAaveBiconomyForwarder {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAaveBiconomyForwarder;
  }
}
