describe('Customer service page', function () {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:4582/');
    });

    it('Verify that footer section is displayed', function () {
        var yourStoreNameLink = $('.header-logo');
        var footerSection = $ ('.footer-upper');
        //$$ servers for locating ALL ELEMENTS BY CSS
        // programing language counts things starting with 0,1 means 2(this is means index)
        var footerCustomer = $$ ('.footer-block').get(1);

        yourStoreNameLink.click();


        expect(footerSection.isPresent()).toBe(true);
        expect(footerCustomer.getText()).toContain("Customer service");




    })
})