import React, { createContext, ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Web3 from "web3";

import { isEmpty } from "ramda";

import {
  getContractAbi,
  getContractAddress,
  getContractChainId
} from "redux/selectors/appConfigSelector";

export const MetaMaskContext = createContext({
  isLoadingInit: true,
  account: undefined,
  contractInfo: {},
  connectWithMetaMask: () => null,
  getSupply: () => null,
  getCost: () => null,
  mint: () => null
});

const MetaMaskWrapper = ({
  children
}: {
  children: ReactElement;
}): ReactElement => {
  const [isLoadingInit, setIsLoadingInit] = useState(true);
  const [ethereum, setEthereum] = useState<any>({});
  const [web3, setWeb3] = useState<any>({});
  const [contractInfo, setContractInfo] = useState<any>({});
  const [account, setAccount] = useState<string | undefined>(undefined);

  const address: any = useSelector(getContractAddress);
  const abi: any = useSelector(getContractAbi);
  const chainId = useSelector(getContractChainId);

  useEffect(() => {
    if (!isEmpty(ethereum)) {
      ethereum.on("accountsChanged", (accounts) => {
        // MetaMask Disconnected
        if (isEmpty(accounts)) {
          setAccount(undefined);
          setContractInfo({});
        }
      });
    }
  }, [ethereum]);

  useEffect(() => {
    const init = async () => {
      const { ethereum } = window as any;
      if (ethereum && ethereum.isMetaMask) {
        const web3Instance = new Web3(ethereum);
        const accounts = await web3Instance.eth.getAccounts();
        if (accounts) {
          setAccount(accounts[0]);
        }

        setEthereum(ethereum);
        setWeb3(web3Instance);
        setIsLoadingInit(false);
        setContractInfo(new web3Instance.eth.Contract(abi, address));
      } else {
        // TODO: i know, we will improve
        alert("Please install Metamask !");
      }
    };

    init();
  }, []);

  const connectWithMetaMask = async (): Promise<void> => {
    if (ethereum && ethereum.isMetaMask) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts"
        });
        const networkId = await ethereum.request({
          method: "net_version"
        });
        // TODO: I Know
        if (networkId === chainId) {
          setAccount(accounts[0]);
          setContractInfo(new web3.eth.Contract(abi, address));
        }
      } catch (e) {
        console.log("Error on connectWithMetaMask", e);
        // Clean Wrapper Status
        setAccount(undefined);
        setContractInfo({});
      }
    }
  };

  const getSupply = async (): Promise<string> => {
    try {
      const result: string = await contractInfo.methods.totalSupply().call();
      return result;
    } catch (e) {
      console.warn("error on getSupply : ", e);
      return null;
    }
  };

  const getCost = async (): Promise<string> => {
    try {
      const result: string = await contractInfo.methods.cost().call();
      return result;
    } catch (e) {
      console.warn("error on getCost : ", e);
      return null;
    }
  };

  const mint = async (): Promise<boolean> => {
    console.log("Ok, start mint ...");
    try {
      const cost = await getCost();
      contractInfo.methods
        .mint(1)
        .send({ from: account, value: cost })
        .on("receipt", async () => {
          console.log("WOWOOO, received the nft !!!");
        })
        .on("error", (error) => {
          console.log("error on purchase : ", error);
        });
      return true;
    } catch (e) {
      console.warn("error on Mint nft : ", e);
      return false;
    }
  };

  return (
    <MetaMaskContext.Provider
      value={{
        account,
        isLoadingInit,
        contractInfo,
        connectWithMetaMask,
        getSupply,
        getCost,
        mint
      }}>
      {children}
    </MetaMaskContext.Provider>
  );
};

export default MetaMaskWrapper;
