describe('Scenario_2', function() {  
    it('check filter by department in deals and promotion page', function() {  
        //visit amazon
         cy.visit('https://www.amazon.com/')
        cy.wait(2000)    
        // Click on today DEALS
        cy.get('#nav-xshop > a:nth-child(2)').click()  
        cy.wait(2000)  
        // From Department filter click show more
        cy.get('#widgetFilters > div:nth-child(1) > div.a-row.a-expander-container.a-expander-inline-container > a > span').click()   
       // Select and Assert Software Department
        cy.get('#widgetFilters > div:nth-child(1) > div.a-row.a-expander-container.a-expander-inline-container > div > span:nth-child(23) > div > label > span').contains('Software').click()  
        cy.wait(2000)  
        // Assert user redirected to Software department screen 
        cy.get('#FilterItemView_all_summary > div > span:nth-child(3) > a > span').should('contain', 'Software')
    })  
})  