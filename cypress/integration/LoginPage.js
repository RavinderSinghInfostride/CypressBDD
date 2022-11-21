class LoginPage {
    visitLoginPage() {
        cy.visit('https://www.saucedemo.com/')
    }
    login() {
        cy.xpath("//input[@name='user-name']").type('stamdard_user')
        cy.xpath("//input[@name='password']").type('secret_sauce')
        cy.xpath("//input[@name='login-button']").click()
    }
}
export default LoginPage