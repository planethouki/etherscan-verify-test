const PToken = artifacts.require("PToken");

module.exports = function(deployer) {
  deployer.deploy(PToken, "10000000000000000000000000");
};
