describe("Shopping cart Page", function () {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });

    it("Shopping Cart Page", function () {

        //var shoppingCartLinkOnTopMenu= element(by.css('.cart-label'));
        var shoppingCartOnTopMenu= $('.cart-label');
        var pageTitle= $('.page-title');


        browser.get("http://localhost:4582/")
        shoppingCartOnTopMenu.click();

        expect(pageTitle.getText()).toBe("Shopping cart")

        browser.sleep(5000)




    })    })

