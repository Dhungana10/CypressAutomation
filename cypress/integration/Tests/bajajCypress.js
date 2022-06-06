describe('Bajaj',()=>{

    it('Loads Google Home Page',()=>{
     cy.visit("https://www.google.com/")
    })
 
    it('Searches for `Bajaj Finserv Health`',()=>{
        cy.get('input[name = "q"]').type("Bajaj Finserv Health{enter}")
    })
 
    it('Opens Bajaj Finserv Health',()=>{
        cy.get('#search a').contains("Bajaj Finserv Health").click()
    })
 
    it('Searches for `Doctor`',()=>{
        cy.viewport(1900,1600)
        cy.get('.css-1aj4a8a').within(()=>{
            cy.get('#searchBarInput').type("Doctor{enter}")
        })
    })
 
    it('Gets first result : `Doctor`',()=>{
     cy.get('.css-1kj8wbb a').first().click();
    })
 
    it('Click slot and check appointment details',()=>{
        cy.get('div.MuiGrid-root.MuiGrid-container div.slotTimeContainer a').first().click();
    })
 
 })