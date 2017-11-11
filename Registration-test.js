
    it ('1. Verify Registration page header', function() {

        // TRIPLE A:
        // 1. Arrangement
        // 2. Action
        // 3. Assertion / Verification

        // 1. Arrangement
        // declaring elements on the page
        // '.' serves for locating elements by class name (e.g. element(by.css('.ico-register'))
        var registerMenuLink = element(by.css('.ico-register'));
        var pageTitle = element(by.css('.page-title'));


        // 2. Action
        // steps
        registerMenuLink.click();


        // 3. Assertion / Verification
        // verification
        expect(pageTitle.getText()).toContain('Register');

    });

     it ('2. Verify which input fields are available on Registration page', function() {

        // 1. Arrangement
         var registerMenuLink = element(by.css('.ico-register'));
        // '#' serves for locating elements by ID attribute (e.g. element(by.css('#FirstName'))
        var firstNameInput = element(by.css('#FirstName'));
        // $ sign is shortcut for the syntax 'element(by.css'
          var lastNameInput = $('#LastName');
          var emailInput = $('#Email');

        // Action
        registerMenuLink.click();

        // 3. Assertion / Verification
        expect(firstNameInput.isPresent()).toBe(true);
        expect(lastNameInput.isPresent()).toBe(true);
        expect(emailInput.isPresent()).toBe(true);


         browser.sleep(5000)

    });

       it('Verify that user can registar with valid input values', function () {
           var registerMenuLink = element(by.css('.ico-register'));
           var firstNameInput = $('#FirstName')
             var lastNameInput = $('#LastName')
           var emailInput = $('#Email')
           var passwordInput = $('#Password')
           var confirmPasswordInput = $('#ConfirmPassword')
           var registerbutton = $('#register-button')
           var registrationCompletedMessage= $('.result')


           registerMenuLink.click();

           firstNameInput.sendKeys("Mahira")
           lastNameInput.sendKeys("Vlajcic")
           emailInput.sendKeys("test2@gmail.com")
           passwordInput.sendKeys("test123")
           confirmPasswordInput.sendKeys("test123")
           registerbutton.click();

           browser.sleep(5000)

           expect(registrationCompletedMessage.getText()).toContain('Your registration completed');






       })



});