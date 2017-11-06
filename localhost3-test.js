describe("Footer Information Page", function () {
    beforeAll(function() {
        browser.ignoreSynchronization = true;

    });

    it("Footer Information Page", function () {

        //var yourStoreNameLink = element(by.css(C'.header-logo'));
        var yourStoreNameLink = $('.header-logo');
        var pageTitle= $('.title');

        browser.get("http://localhost:4582/")
        yourStoreNameLink.click();

        expect(pageTitle.getText()).toBe("Information")


    })
});



























