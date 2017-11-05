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
























    }

)






















