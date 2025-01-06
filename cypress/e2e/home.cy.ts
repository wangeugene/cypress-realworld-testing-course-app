describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("home page", () => {
    it("the h1 contains the correct text", () => {
      cy.get('[data-test="hero-heading"]')
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Course section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      // cy.get('[data-test="course-0"]').find("a").eq(3).click()
      // cy.location("pathname").should("eq", "/testing-your-first-application")
    })

    it("Course: Testing Foundation", () => {
      cy.get('[data-test="course-1"]').find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })

    it("Course: Cypress Fundamentals", () => {
      cy.get('[data-test="course-2"]').find("a").eq(3).click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})
