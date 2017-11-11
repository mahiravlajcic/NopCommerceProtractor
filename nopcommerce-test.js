describe("Login Page", function () {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });

    it("Login Page", function () {

        var poweredByLink = element(by.linkText("nopCommerce"))

        browser.get("http://localhost:58816")
        poweredByLink.click()

        browser.sleep(5000)

    })

    it("Login Page", function () {

           var newsletterLabel = $('.newsletter').element(by.tagName('strong'))

        browser.get("http://localhost:58816")

        expect(newsletterLabel.getText()).toBe('Newsletter')

        browser.sleep(5000)

    })

    fit("Login Page", function () {

        var followUsLabel = $('.social').element(by.tagName('strong'))

        browser.get("http://localhost:58816")

        expect(followUsLabel.getText()).toBe('Follow us')

        browser.sleep(5000)

    })

    })