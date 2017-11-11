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

    it('Verify logo is present', function () {
        var logo = $('[alt="Your store name"]')
        var nokiaImage = $('[src="http://localhost:4582/content/images/thumbs/0000002_banner_2.jpg"]')
        var facebookIconInFooter = $('.networks').$('.facebook')


        expect(logo.isPresent()).toBe(true);
        expect(nokiaImage.isPresent()).toBe(true);
        expect(facebookIconInFooter.isPresent()).toBe(true);



    })

    it('Verify logo is present', function () {
        var twitterIconInFooter = $('[href="https://twitter.com/nopCommerce"]')
        var rssIconInFooter = $('[href="/news/rss/1"]')
        var youTubeIconInFooter = $('[href="http://www.youtube.com/user/nopCommerce"]')
        var googlePlusIconInFooter = $('[href="https://plus.google.com/+nopcommerce"]')

            browser.sleep(5000)


        expect(twitterIconInFooter.isPresent()).toBe(true);
        expect(rssIconInFooter.isPresent()).toBe(true);
        expect(youTubeIconInFooter.isPresent()).toBe(true);
        expect(googlePlusIconInFooter.isPresent()).toBe(true);



    })

    it('Verify logo is present', function () {
        var facebookIconInFooter = $('.networks').$('.facebook')
        var twitterIconInFooter = $('.networks').$('.twitter')
        var rssIconInFooter = $('.networks').$('.rss')
        var youTubeIconInFooter = $('.networks').$('.youtube')
        var googlePlusIconInFooter = $('.networks').$('.google-plus')


        expect(twitterIconInFooter.isPresent()).toBe(true);
        expect(rssIconInFooter.isPresent()).toBe(true);
        expect(youTubeIconInFooter.isPresent()).toBe(true);
        expect(googlePlusIconInFooter.isPresent()).toBe(true);




    })
     })
