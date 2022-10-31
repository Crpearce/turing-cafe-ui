
describe("Homepage flow", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations/", { fixure: 'allReservations'}).as('reservations')
    cy.visit('http://localhost:3000/')
  });

  it("A user can visit the app", () => {
    cy.contains("Turing Cafe Reservations")
    .get("form").contains("Make Reservation")
  });

  it("A user should see all existing reservations", () => {
    cy.get("div").should("have.class", "resy-container")
    .get("div").should("have.class", "card-wrapper")
    .get("h2").should("have.class", "name")
  });

  it("A user can see existing details of a reservation", () => {
    cy.get('h1 > :nth-child(1)').contains("Christie")
    cy.get('h1 > :nth-child(1)').contains('12/29')
    cy.get('h1 > :nth-child(1)').contains('7:00')
    cy.get('h1 > :nth-child(1)').get("button").should("have.class", "cancel-button")
  });

  it("A user should see what they have typed into the form", () => {
    cy.get("input[name='name']").type("Colby")
    .get("input[name='number']").type("40")
  });

  it("A user should fill out form, click the button, and see their reservation", () => {
    cy.get("input[name='name']").type("KOBE")
    .get("input[name='date']").type("2022-12-25")
    .get("input[name='time']").type("6:00")
    .get("input[name='number']").type("10")
    .get("button").first().click()
    .get("h2").should("have.class", "name")
    .get("button").should("have.class", "cancel-button")
  });
})