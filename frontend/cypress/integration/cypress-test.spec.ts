describe('run empty test', () =>
{
  it('should run empty test', () =>
  {
    cy.visit('localhost:4200')
    expect( true ).to.equal(true)
  })
  it('should run another empty test', () =>
  {
    expect( 1 + 2 ).to.equal(3)
  })
})
