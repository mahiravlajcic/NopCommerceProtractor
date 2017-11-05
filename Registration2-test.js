describe('Follow us page', function () {
    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:4582/');
    });


    it('Verify that user can not registar with invalid confirm password input', function () {
    var registerMenuLink = element(by.css('.ico-register'));
    var firstNameInput = $('#FirstName')
    var lastNameInput = $('#LastName')
    var emailInput = $('#Email')
    var passwordInput = $('#Password')
    var confirmPasswordInput = $('#ConfirmPassword')
    var registerbutton = $('#register-button')
    var passwordAndConfirmationPasswordMessage = $('.field-validation-error')


    registerMenuLink.click();

    firstNameInput.sendKeys("Mahira")
    lastNameInput.sendKeys("Vlajcic")
    emailInput.sendKeys("test5@gmail.com")
    passwordInput.sendKeys("test123")
    confirmPasswordInput.sendKeys("test12")
    registerbutton.click();

    browser.sleep(5000)

    expect(passwordAndConfirmationPasswordMessage.getText()).toContain('The password and confirmation password do not match');

    })


    it('Verify that user can not registar with invalid email input', function () {
        var registerMenuLink = element(by.css('.ico-register'));
        var firstNameInput = $('#FirstName')
        var lastNameInput = $('#LastName')
        var emailInput = $('#Email')
        var passwordInput = $('#Password')
        var confirmPasswordInput = $('#ConfirmPassword')
        var registerbutton = $('#register-button')
        var wrongEmailMessage = $('.field-validation-error')


        registerMenuLink.click();

        firstNameInput.sendKeys("Mahira")
        lastNameInput.sendKeys("Vlajcic")
        emailInput.sendKeys("test@.com")
        passwordInput.sendKeys("test123")
        confirmPasswordInput.sendKeys("test123")
        registerbutton.click();

        browser.sleep(5000)

        expect(wrongEmailMessage.getText()).toContain('Wrong email');

    })


    it('Verify that user can not registar with invalid password input', function () {
        var registerMenuLink = element(by.css('.ico-register'));
        var firstNameInput = $('#FirstName')
        var lastNameInput = $('#LastName')
        var emailInput = $('#Email')
        var passwordInput = $('#Password')
        var confirmPasswordInput = $('#ConfirmPassword')
        var registerbutton = $('#register-button')
        var passwordMessage = $('.field-validation-error');


        registerMenuLink.click();

        firstNameInput.sendKeys("Mahira")
        lastNameInput.sendKeys("Vlajcic")
        emailInput.sendKeys("tes8t@gmail.com")
        passwordInput.sendKeys("12")
        confirmPasswordInput.sendKeys("12")
        registerbutton.click();

        browser.sleep(5000)

        expect(passwordMessage.getText()).toContain('The password should have at least 6 characters');




    })
})
