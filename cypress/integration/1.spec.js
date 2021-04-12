/// <reference types= "cypress" />

describe ('Our first suite', ()=> {

    beforeEach(function () {
    cy.visit('/')  
    cy.contains('Forms').click();
                  
    });
        

    it('first test', ()=> {
        cy.contains('Form Layouts').click(); 
        cy.contains('nb-card','Using the Grid').then(firstForm => {
            const emailLable = firstForm.find('[for="inputEmail1"]').text();
            const pass1 = firstForm.find('[for="inputPassword2"]').text();
            expect(emailLable).to.equal('Email');
        });                                                    
    });

    it('second test', ()=> {   
        cy.contains('Form Layouts').click(); 
        cy.contains('nb-card', 'Basic form')
          .find('nb-checkbox')
          .click()
          .find('.custom-checkbox')
          .invoke('attr', 'class')
          .then(classValue => {
              expect(classValue).to.contain('checked');
          })
         // .should('contain', 'checked');
    });

    it('date picker', ()=> {   
        cy.contains('Datepicker').click();
        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click();
            //to-do: find better ways to set values
            cy.get('nb-calendar-day-picker').contains('1').click();
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Mar 29, 2021')
        })
    });


    it.only('radion buttons', ()=> {   
        cy.contains('Form Layouts').click();
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons)
              .first()
              .check({force:true})
              .should('be.checked');

            cy.wrap(radioButtons)
              .eq(1)
              .check({force:true})

            cy.wrap(radioButtons)
              .first()
              .should('not.be.checked')
        })
    
    });
    
})
