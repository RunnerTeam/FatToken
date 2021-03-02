const Migrations = artifacts.require("Migrations");
const FatToken = artifacts.require("FatToken");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(FatToken);
};
