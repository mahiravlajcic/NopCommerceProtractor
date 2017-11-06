describe("Login Page", function () {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });

    it("Login Page", function () {

        //var loginLinkOnTopMenu= element(by.css('.ico-login'));
        var loginLinkOnTopMenu= $('.ico-login');
        var pageTitle= $('.page-title');
        var returningCustomer= $('.title');

        browser.get("http://localhost:4582/")
        loginLinkOnTopMenu.click();

        expect(pageTitle.getText()).toBe("Welcome, Please Sign In!")

    })

    it('Verify that user can not login with invalid email input', function () {
        var loginMenuLink = element(by.css('.ico-login'));
        var emailInput = $('#Email')
        var passwordInput = $('#Password')
        var loginButton = $('.  login-button')
        var wrongEmailMessage = $('.field-validation-error')


        loginMenuLink.click();

        emailInput.sendKeys("test@.com")
        passwordInput.sendKeys("test123")
        loginButton.click();

        browser.sleep(5000)

        expect(wrongEmailMessage.getText()).toContain('Wrong email');

    })

})
























