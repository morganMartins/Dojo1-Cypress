describe('test api avec jsonPlaceHolder', () => {

    it('GET post', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.data).to.have.length.above(0);
        });
      });

});