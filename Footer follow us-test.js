describe('Follow us page', function () {
    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:4582/');
    });


    it('Verify that footer "Follow us" is displayed', function () {
        var yourStoreNameLink = $('.header-logo');
        var footerFollowUs = $$('.footer-block').get(3);

        yourStoreNameLink.click();

        expect(footerFollowUs.getText()).toContain("Follow us");
    })


})
