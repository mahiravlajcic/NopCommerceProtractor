describe("Login Page", function () {
        beforeAll(function() {
            browser.ignoreSynchronization = true;
        });

        it("Login Page", function () {

            //var loginLinkOnTopMenu= element(by.css('.ico-login'));
            var loginLinkOnTopMenu= $('.ico-login');
            var emailInput = $('#Email');
            var passwordInput = $('.password')


            browser.get("http://localhost:4582/")
            loginLinkOnTopMenu.click();

            expect(emailInput.isPresent()).toBe(true)
            expect(passwordInput.isPresent()).toBe(true)




        })

})


































