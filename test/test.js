/** 
 * @author:Akshay Misal
 * @version:1.0.0
 * @since:10-Aug-2018
*/
var server = require('./../key-pair-generator')
var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


/**
 * @author Akshay Misal
 * @link: POST /create
 * @description Create the keypair using stellar
 * @param {} req 
 * @param {keypair} res 
 */
describe('Create keypair', () => {
    it('it should get the KeyPair', (done) => {
  
      chai.request(server)
          .post('/api/create')
          .end((err, res) => {
            res.body.should.have.property('accountSeed');
            res.body.should.have.property('accountId');
            done();
          });
    });
  });
