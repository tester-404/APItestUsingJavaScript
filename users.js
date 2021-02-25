// чтобы не запускались оба закоментим этот звездочками

/*

import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public-api/');

import { expect } from 'chai';

const TOKEN =
    '028186c4431de8750ed1a11c0b0ce09cd985530d91eed768de6a137fa4a15882';

describe('Users', () => {
    it('GET /users', (done) => {
        //  request
        //  .get('users?access-token=TOKEN');
        request.get('users?access-token=${TOKEN}').end((err, res) => {
         //   console.log(err);
         //   console.log(res.body);
         expect(res.body.data).to.not.be.empty;
     //    expect(res.body.data).to.be.empty;
         done();
        });
    });
});

*/