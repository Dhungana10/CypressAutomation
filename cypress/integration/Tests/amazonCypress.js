describe('Amazon',()=>{
    it('Go to Amazon Website',()=>{
        cy.visit('https://www.amazon.in/ref=nav_logo')
    })

    it('Login to View Cart',()=>{
        cy.get('#nav-link-accountList').contains('Sign in').click()
        cy.get('input[name="email"]').type("9863180291{enter}")
        cy.get('input[name="password"]').type("Falcom@00{enter}")
    
        cy.get('select#searchDropdownBox')
        .select('Electronics',{force:true})

        cy.get('input[id="twotabsearchtextbox"]').type("Iphone 12{enter}")
   
        cy.get('span:nth-child(4) div > div > div > div.a-section> h2> a > span').invoke('attr','target')
        .then(href=>{
        cy.visit("https://www.amazon.in/New-Apple-iPhone-12-128GB/dp/B08L5TNJHG/ref=sr_1_1_sspa?crid=295DW3PHBXTPF&keywords=Iphone%2B12&qid=1652326807&s=electronics&sprefix=ip%2Celectronics%2C282&sr=1-1-spons&th=1")
        })
        cy.get('#addToCart_feature_div>div>span>span>span input#add-to-cart-button').click();
        cy.get("#attach-view-cart-button-form>span>span>input").click();
        })

})