describe("Carrito de compras", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("agrega un producto al carrito y verifica el total", () => {
    // Seleccionar primer color disponible
    cy.get('[data-testid^="color-"]').first().click();

    // Seleccionar primer talle disponible
    cy.get("[data-testid=size-button]").first().click();

    // Cambiar cantidad a 2
    cy.get("[data-testid=quantity-input]")
      .first()
      .clear({ force: true })
      .type("{selectall}2", { force: true });

    // Click en agregar al carrito
    cy.get("[data-testid=add-to-cart-button]").first().click();

    // Abrir carrito (en mobile está oculto por media query)
    cy.get("[data-testid=open-cart-button]:visible").click({ force: true });

    // Verificar que hay productos en el carrito
    cy.get("[data-testid=cart-items]").should("exist");
    cy.get("[data-testid=cart-items] > div").should("have.length.gte", 1);

    // Verificar subtotal y total contienen símbolo $
    cy.get("[data-testid=cart-subtotal]").should("contain.text", "$");
    cy.get("[data-testid=cart-total]").should("contain.text", "$");

    // Finalizar compra
    cy.get("[data-testid=finalize-purchase-button]").click();

    // Abrir Sheet para que el mensaje se vea
    cy.get("[data-testid=open-cart-button]:visible").click({ force: true });

    // Verificar carrito vacío
    cy.get("[data-testid=cart-empty]").should("exist");

    // Cerrar
    cy.get("[data-slot=sheet-overlay]").click({ force: true });
    cy.get("[data-slot=cart-sheet]").should("not.exist");
  });

  it("puede vaciar el carrito desde el panel", () => {
    cy.get('[data-testid^="color-"]').first().click();
    cy.get("[data-testid=size-button]").first().click();
    cy.get("[data-testid=add-to-cart-button]").first().click();

    // Usar selector visible para evitar conflictos con múltiples botones
    cy.get("[data-testid=open-cart-button]:visible").click({ force: true });

    cy.get("[data-testid=clear-cart-button]").click();

    cy.get("[data-testid=cart-empty]").should("exist");

    // Cerrar sheet con click afuera
    cy.get("[data-slot=sheet-overlay]").click({ force: true });
    cy.get("[data-slot=cart-sheet]").should("not.exist");
  });

  it("muestra los descuentos aplicados si corresponden", () => {
    for (let i = 0; i < 4; i++) {
      cy.get('[data-testid^="color-"]').first().click();
      cy.get("[data-testid=size-button]").first().click();
      cy.get("[data-testid=add-to-cart-button]").first().click();
    }

    // Mismo fix acá
    cy.get("[data-testid=open-cart-button]:visible").click({ force: true });

    cy.get("[data-testid=cart-discounts]").should("exist");
    cy.get("[data-testid^=cart-discount-]").its("length").should("be.gte", 1);

    // Cerrar sheet con click afuera
    cy.get("[data-slot=sheet-overlay]").click({ force: true });
    cy.get("[data-slot=cart-sheet]").should("not.exist");
  });
});
