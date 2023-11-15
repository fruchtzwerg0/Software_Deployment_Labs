const chai = require('chai');
const expect = chai.expect;

const app = require('../app');

describe('Test Suite for Express App', () => {
    it('Test Case 1: Root route should return Hello, World!', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Hello, World!');
          done();
        });
    });
  
    it('Test Case 2: Root route should return HTML content', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.html;
          done();
        });
    });
  
    it('Test Case 3: Nonexistent route should return 404 status', (done) => {
      chai
        .request(app)
        .get('/nonexistent')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  
    it('Test Case 4: Nonexistent route should not return Hello, World!', (done) => {
      chai
        .request(app)
        .get('/nonexistent')
        .end((err, res) => {
          expect(res.text).to.not.equal('Hello, World!');
          done();
        });
    });
  
    it('Test Case 5: Another route should return a welcome message', (done) => {
      chai
        .request(app)
        .get('/welcome')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome to the application!');
          done();
        });
    });
  });