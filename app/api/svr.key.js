/**
 * Created By :- Akshay
 * Created Date :- 07-08-2018
 * Version :- 1.0.0
 */
var Q = require('q');                                                   // for promise 
var StellarSdk = require('stellar-sdk');
var service = {};

service.genKey = genKey;

module.exports = service;

/**
 * @author:Akshay Misal
 * @description:This function will create the keypair
 * @param {*} res 
 */
function genKey(req,res) {
    var deferred = Q.defer();
    var pair = StellarSdk.Keypair.random();

    var account = {};
    var accountId = pair.publicKey();
    var accountSeed = pair.secret();
    var set = {
        accountId: accountId,
        accountSeed: accountSeed
    }

    deferred.resolve(set)

    return deferred.promise;
}