import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "../LoginPage"
const loginPage = new LoginPage()

Given('user is on login page', ()=>{
    loginPage.visitLoginPage()
})

When('user enters valid login credentials and click login',()=>{
    loginPage.login()
})