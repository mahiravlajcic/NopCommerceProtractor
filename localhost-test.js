describe("Footer Information Page", function () {
        beforeAll(function() {
            browser.ignoreSynchronization = true;
        });

        it("Footer Information Page", function () {

            //var yourStoreNameLink = element(by.css('.header-logo'));
            var yourStoreNameLink = $('.header-logo');
            var informationList= $('.list');

            browser.get("http://localhost:4582/")
            yourStoreNameLink.click();

            expect(informationList.isPresent()).toBe(true);


        })
})



























