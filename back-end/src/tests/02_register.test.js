const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../api/app');

const { User } = require('../database/models'); // importar USER

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /register - CASOS DE FALHA', () => {
  let chaiHttpResponse;

  before(() => {
    sinon
      .stub(User, 'findOne')
      .resolves({
        id: 1,
        name: "Cliente Zé Birita",
        email: "zebirita@email.com",
        password: "1c37466c159755ce1fa181bd247cb925",
        role: "customer",
      });
  });

  after(() => {
    User.findOne.restore();
  })

  it('Essa requisição deve falhar caso o email enviado na requisição já exista no banco de dados', async () => {
    chaiHttpResponse = await chai
      .request(server)
      .post('/user/register')
      .send({
        "name": "Cliente Zé Birita",
        "email": "zebirita@email.com",
        "password": "$#zebirita#$"
      });
    console.log(chaiHttpResponse.body)

    expect(chaiHttpResponse.body).to.haveOwnProperty('message');
  });

  it('Essa requisição deve retornar status 409 caso o email já exista', async () => {
    chaiHttpResponse = await chai
      .request(server)
      .post('/user/register')
      .send({
        "name": "Cliente Zé Birita",
        "email": "zebirita@email.com",
        "password": "$#zebirita#$"
      });
    console.log(chaiHttpResponse.body)

    expect(chaiHttpResponse.status).to.be.equal(409);
  });

  it('Essa requisição deve falhar caso o email não seja especificado', async () => {
    chaiHttpResponse = await chai
      .request(server)
      .post('/user/register')
      .send({
        "name": "Cliente Zé Birita",
        "password": "$#zebirita#$"
      });
    console.log(chaiHttpResponse.body)

    expect(chaiHttpResponse.body).to.haveOwnProperty('message');
    expect(chaiHttpResponse.status).to.be.equal(400);
  });

  it('Essa requisição deve falhar caso a senha não seja especificada', async () => {
    chaiHttpResponse = await chai
      .request(server)
      .post('/user/register')
      .send({
        "name": "Cliente Zé Birita",
        "email": "zebirita@email.com",
      });
    console.log(chaiHttpResponse.body)

    expect(chaiHttpResponse.body).to.haveOwnProperty('message');
    expect(chaiHttpResponse.status).to.be.equal(400);
  });

  it('Essa requisição deve falhar caso o nome não seja especificado', async () => {
    chaiHttpResponse = await chai
      .request(server)
      .post('/user/register')
      .send({
        "email": "zebirita@email.com",
      });
    console.log(chaiHttpResponse.body)

    expect(chaiHttpResponse.body).to.haveOwnProperty('message');
    expect(chaiHttpResponse.status).to.be.equal(400);
  });
});

describe('Rota /register - CASOS DE SUCESSO', () => {
  let chaiHttpResponse;

  before(() => {
    sinon
      .stub(User, 'findOne')
      .resolves();
  });

  after(() => {
    User.findOne.restore();
  })

  it('Essa requisição deve ser bem sucedida caso o email não exista', async () => {
    chaiHttpResponse = await chai
      .request(server)
      .post('/user/register')
      .send({
        "name": "Cliente Zé Birita",
        "email": "zebirita@email.com",
        "password": "$#zebirita#$"
      });
    console.log(chaiHttpResponse.body)

    expect(chaiHttpResponse.body).to.haveOwnProperty('name');
    expect(chaiHttpResponse.body).to.haveOwnProperty('role');
    expect(chaiHttpResponse.body).to.haveOwnProperty('email');
    expect(chaiHttpResponse.body).to.haveOwnProperty('token');
    expect(chaiHttpResponse.status).to.be.equal(201);
  });
});