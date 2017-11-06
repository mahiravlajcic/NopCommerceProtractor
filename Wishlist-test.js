describe("Wishlist Page", function () {
            beforeAll(function() {
                browser.ignoreSynchronization = true;
            });

            it("Wishlist Page", function () {

                //var WishLinkOnTopMenu= element(by.css('.ico-wishlist'));
                var WishLinkOnTopMenu= $('.ico-wishlist');
                var pageTitle= $('.page-title');


                browser.get("http://localhost:4582/")
                WishLinkOnTopMenu.click();

                expect(pageTitle.getText()).toBe("Wishlist")




            })
            })