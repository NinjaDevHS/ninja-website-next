import Web3 from "web3";

export const ethEnabled = async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (window.ethereum) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await window.ethereum.request({ method: "eth_requestAccounts" });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.web3 = new Web3(window.ethereum);
    console.log("ethereum enabled !", window.web3);
    return true;
  }
  console.log("false !");
  return false;
};
