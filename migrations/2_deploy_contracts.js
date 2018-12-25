var Migrations = artifacts.require("./Migrations.sol");
var Auction = artifacts.require("./SiringClockAuction.sol");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(Auction);
};
