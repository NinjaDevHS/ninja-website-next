/* eslint-disable @typescript-eslint/ban-ts-comment */

import Web3 from "web3";

export const isEthEnabled = async (): Promise<boolean | string> => {
  // @ts-ignore
  if (window?.ethereum) {
    // @ts-ignore
    return await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        return accounts[0];
      })
      .catch((err) => {
        console.log(err.code);
        return false;
      });
  } else {
    return false;
  }
};

export const connectWithMetaMask = async (
  configNetworkId: string
): Promise<{
  walletProvider: string;
  account: string;
}> => {
  const account = await isEthEnabled();
  if (!account) return;

  // @ts-ignore
  if (window.ethereum.isMetaMask) {
    try {
      // @ts-ignore
      const networkId = await window.ethereum.request({
        method: "net_version"
      });
      // this is required in order to work with Rinkeby
      if (networkId === configNetworkId) {
        // We save the Web3 helper and contract as global helper
        // @ts-ignore
        window.web3 = new Web3(window.ethereum);
        // Reminder for next Commit
        // window.contract = new web3.eth.Contract(config.abi, config.address);
        return {
          walletProvider: "MetaMask",
          account: account as string
        };
      } else {
        throw new Error("network id incorrect");
      }
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  } else {
    throw new Error("Please install Metamask or use WalletConnect");
  }
};
