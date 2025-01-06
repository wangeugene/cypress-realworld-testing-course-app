describe("user journey on finishing first lesson from first course", () => {
  it("should be able to finish the first lesson", () => {
    i
    cy.visit("http://localhost:3000")
    cy.get("[data-test='course-0']").find("a").contains("Get started").click()
    cy.get('[data-test="next-lesson-button"]').click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )
    cy.get('[data-test="challenge-answer-0"]').click()
    cy.get('[data-test="next-lesson-button"]').should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
  })
})
