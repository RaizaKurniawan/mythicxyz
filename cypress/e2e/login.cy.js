describe('Login', () => {
  it('Open The Login page', () => {
    cy.visit('/Login')
  })
  it('Check the Title', () => {
    cy.get('.m-4').contains("SIGN IN")
  })
})

describe('Login Error', () => {
  it('Open The Login page', () => {
    cy.visit('/Login')
  })

  it('Login Error "Password Blank"', () => {
    cy.get('#buttonLogin > .btn-curve').click()
    .get('#Email-error').contains("Kolom Email wajib diisi.")
    //.get('#Password-error').contains("Kolom Kata Sandi wajib diisi.")
  })
  it('Login Error "Email Blank"', () => {
    cy.get('#buttonLogin > .btn-curve').click()
    //.get('#Email-error').contains("Kolom Email wajib diisi.")
    .get('#Password-error').contains("Kolom Kata Sandi wajib diisi.")
  })
  it('Login Error "All mandatory blank"', () => {
    cy.get('#buttonLogin > .btn-curve').click()
    .get('#Email-error').contains("Kolom Email wajib diisi.")
    .get('#Password-error').contains("Kolom Kata Sandi wajib diisi.")
  })

  it('Login Capctha Error', () => {
      cy.get('#Email').click()
      .clear()
      .type('raizakurniawan@gmail.com')
      cy.get('#Password').click()
      .clear()
      .type('Admin12345')
      .wait(5000)
      cy.get('#buttonLogin > .btn-curve').click()
  });

})


