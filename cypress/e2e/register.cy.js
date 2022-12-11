describe('Register', () => {
    it('Open Register page', () => {
      cy.visit('/Register')
    })
    it('Check the Title', () => {
      cy.get('.m-4').contains("SIGN UP")
    })
  })
  
  describe('Register Error', () => {
    it('Open Register page', () => {
      cy.visit('/Register')
    })
  
    it('Register Error "Password Blank"', () => {
      cy.get('#buttonSubmitRegister > .btn-curve').click()
      .get('#Email-error').contains("Kolom Email wajib diisi.")
      //.get('#Password-error').contains("Kolom Kata Sandi wajib diisi.")
    })
    it('Register Error "Email Blank"', () => {
      cy.get('#buttonSubmitRegister > .btn-curve').click()
      //.get('#Email-error').contains("Kolom Email wajib diisi.")
      .get('#Password-error').contains("Kolom Kata Sandi wajib diisi.")
    })
    it('Register Error "All mandatory blank"', () => {
      cy.get('#buttonSubmitRegister > .btn-curve').click()
      .get('#Email-error').contains("Kolom Email wajib diisi.")
      .get('#Password-error').contains("Kolom Kata Sandi wajib diisi.")
      .get('#BirthDate-error').contains("Kolom Date of Birth wajib diisi.")
    })
  })
  
  
  