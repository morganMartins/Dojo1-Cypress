

describe('swaggerNotes', () => {


    it('getHealth', () => {
       cy.request({
        url: 'https://practice.expandtesting.com/notes/api/health-check',       
       })
      });

    it.skip('postUsersRegister', () => {

        cy.request({
            url: 'https://practice.expandtesting.com/notes/api/users/register',
            method: 'POST',
            body: {
                "name": "morganMartins",
                "email": "morganmartins1234@gmail.com",
                "password": "Morlina123"
            }
        })

    })

    it('postUsersLogin', () => {
        cy.request({
            url: 'https://practice.expandtesting.com/notes/api/users/login',
            method: 'POST',
            body: {
                "email": "morganmartins1234@gmail.com",
                "password": "Morlina123",
            }
        })
    })

    
    it('postNotes', () => {

        cy.fixture("quete3").then((user) => {

        cy.request({
            url: 'https://practice.expandtesting.com/notes/api/notes',
            method: "POST",
            headers: {
                "x-auth-token": '4e85f7af6f98420cbc2d9e8eccc52e38cacdd29ff22046cca0961f03e1f56f78',
                accept: 'application/json',
              },
            body: {
                title: user.title,
                description: user.description,
                category: user.category,
            }
        }).then((response) =>{
            expect(response.status).to.eql(200);
        })
    })
    })


});