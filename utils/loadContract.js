import contract from "@truffle/contract"

export const loadContract = async (name, provider) => {
  // fetch the contract json file from public folder
  const res = await fetch(`/${name}.json`)
  const Artifact = await res.json()

  // wrap with contract() and set the provider
  let _contract = contract(Artifact)
  _contract.setProvider(provider)

  // deploy the contract
  try {
    const deployed = await _contract.deployed()
    return deployed
  } catch (err) {
    console.error("cannot load the contract", err?.message)
  }
}
