describe('Newsletter page', function () {
    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:4582/');
    });


    it('Verify that footer newsletter is displayed', function () {
        var yourStoreNameLink = $('.header-logo');
        var footerNewsletter = $$('.newsletter').get(0);

        yourStoreNameLink.click();

        expect(footerNewsletter.isPresent()).toBe(true);
    })
})