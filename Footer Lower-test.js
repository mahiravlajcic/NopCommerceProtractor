describe('Lower page', function () {
    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:4582/');
    });


    it('Verify that footer lower is displayed', function () {
        var yourStoreNameLink = $('.header-logo');
        var footerLower = $('.footer-lower');

        yourStoreNameLink.click();

        expect(footerLower.isPresent()).toBe(true)
    })
})