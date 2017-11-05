describe('My account page', function () {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:4582/');
    });

    it('Verify that footer my account is displayed', function () {
        var yourStoreNameLink = $('.header-logo');
        var footerMyAccount = $$ ('.footer-block').get(2);


        yourStoreNameLink.click();


        expect(footerMyAccount.getText()).toContain("My account");



    })

    it('Verify that footer follow us is displayed', function () {
        var yourStoreNameLink = $('.header-logo');
        var footerFollowUs = $$('.footer-block').get(3);

        yourStoreNameLink.click();

        expect(footerFollowUs.getText()).toContain("Follow us");
    })
})
