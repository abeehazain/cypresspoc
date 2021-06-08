
describe('Scenario_4', function() {  
    it('check products detail page', function() {  
        //visit amazon
        let userResponse;
         cy.visit('https://www.amazon.com/')
        cy.wait(4000)    
         // Enter Text in Search box
         cy.get("#twotabsearchtextbox").type("Electronics")
         // Click on Search button
         cy.get("#nav-search-submit-button").click()
         cy.wait(8000)  
         //Click on first Element 
         cy.get("#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(2) > div > span > div > div > div > div > span > a > div > img").click()
           cy.wait(4000) 
        // Verify  price print in console
        let txt = []
        cy.get('#priceblock_ourprice').invoke('text').then((x)=>{
        txt.push(x)
             })
             cy.log(txt)
            })  
})  