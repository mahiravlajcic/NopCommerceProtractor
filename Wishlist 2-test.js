describe("Wishlist Page", function () {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });

    it("Wishlist Page", function () {

        //var WishLinkOnTopMenu= element(by.css('.wishlist-label'));
        var WishLinkOnTopMenu= $('.wishlist-label');
        var pageTitle= $('.no-data');


        browser.get("http://localhost:4582/")
        WishLinkOnTopMenu.click();

        expect(pageTitle.getText()).toBe("The wishlist is empty!")




    })
})
