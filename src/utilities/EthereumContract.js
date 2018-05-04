
export default function EthereumContract (web3, abi, contractAddress) {
  let ABI = web3.eth.contract(abi)
  let ContractObj = ABI.at(contractAddress)
  return ContractObj
}