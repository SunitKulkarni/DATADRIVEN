class Common {
login() {

let.homePage  = new HomePage();
let homepage = new HomePage(page);
let loginpage = new LoginPage(page);
let welcomepage = new WelcomePage(page);

await homepage.verifyHomePage();// 
await homepage.navigateToLoginPage();
await loginpage.loginToApp();
await welcomepage.verifyLoginSucess();
await welcomepage.logoutFromApp();
await homepage.verifyLogoutSucess();

}
}