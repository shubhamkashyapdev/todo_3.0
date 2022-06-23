const Todo = artifacts.require("Todo")

module.exports = function (deployer) {
  deployer.deploy(Todo)
  console.log("Todo Contract Deployed!")
}
