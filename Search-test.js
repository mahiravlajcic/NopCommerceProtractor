describe ('Search page', function() {

    beforeAll(function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:4582/');
    });

    it('Verify that user can use search link', function () {
        var yourStoreNameLink = $('.header-logo');
        var searchStore = $ ('#small-searchterms')
        var searchButton = $ ('.search-box-button')
        var searchMessage = $ ('.no-result')


        yourStoreNameLink.click();

        searchStore.sendKeys("computer");
        searchButton.click();

        browser.sleep(5000)

        expect(searchMessage.getText()).toContain('No products were found that matched your criteria.');

    })

})