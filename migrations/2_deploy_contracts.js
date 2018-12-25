var Migrations = artifacts.require("./Migrations.sol");
var KittyCore = artifacts.require("./KittyCore.sol");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(KittyCore);
};
