# My Random Password Generator

## Description

Hello and welcome to my first "in-depth" coding project. Here I've made a functional (yet far from perfect) random password generator that, upon activating the "big red button" below the text box, will begin to prompt the user in order to gather the user's preferences and in turn craft a password that is displayed within the text box.

## Usage

In reality this program is very intuitive. Here's a simple usage reccommendation:

GitHub: https://github.com/buster35/sotra-patera
<br>
GitHub Pages: https://buster35.github.io/sotra-patera/
</br>

<li>Follow the Github Pages link to pull up the generator.
<li>You will be welcomed with a popout alert; from here, you can click on the Generate Password.
<li>There will be five prompts; first, enter a number length you'd like the password to be.
<li>Then, on the following four prompts, click Ok for "Yes", and Cancel for "No".
<li>After the final prompt the text "Your Secure Password" will be replaced by a randomly generated "password" of user-input length.
<br>

</br>

### Notes:

<li>In the current working state the page must be refreshed each time the user would like to generate a new password.
<li>The user may observe spaces in the generated password. This is because the "space (Unicode U+0020)" is considered a punctuation character and included on the list of OWASP Special Characters: https://owasp.org/www-community/password-special-characters.

### Screenshots:

![](Assets\welcome-box.png)

![](Assets\password-length-box.png)

![](Assets\password-example.png)

## Credits

Open Worldwide Application Security Project (OWASP) - a leading non-profit organization concerned with and focused on providing education on software security:https://owasp.org/about/.

## License

Please see the LICENSE.md file in the root directory.
