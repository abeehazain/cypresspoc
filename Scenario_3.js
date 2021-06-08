describe('Scenario_3', function() {  
    it('check selected currency displayed for product price', function() {  
        //visit amazon
         cy.visit('https://www.amazon.com/')
        cy.wait(2000)    
        // Click on flag widget 
        cy.get('#icp-nav-flyout > span > span.nav-line-2 > span.icp-nav-flag.icp-nav-flag-us').click()  
        cy.wait(2000)  
        // Click upon currency settings default dropdown
        cy.get('#a-autoid-0-announce').contains('$ - USD - U.S. Dollar (Default)').click()  
        cy.wait(2000)  
        // select AED currency
        cy.get('#icp-sc-dropdown_2').should('contain', 'AED - Arab Emirates Dirham').click()
        //save changes
        cy.wait(2000) 
        cy.get('#icp-btn-save > span > input').click()  
        cy.wait(2000)  
        //Click Menu 
        cy.get('#nav-hamburger-menu > span').click() 
        //Click electorinces
        cy.wait(2000)  
        cy.get('#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(7) > a > div').click()
        cy.wait(2000)
        // click accessorries and supplies
        cy.get('#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(3) > a').click()
      //assert currency in AED 
      cy.wait(4000)
        cy.get('#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(4) > div > span > div > div > div:nth-child(5) > div:nth-child(2) > a > span:nth-child(1) > span:nth-child(2) > span.a-price-symbol').should('have.text', 'AED')
    })  
})  