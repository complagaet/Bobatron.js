# Bobatron.js

<h2 align=center style="text-align: center; font-size: 25px; font-weight: bold"><a href="https://complagaet.github.io/Bobatron.js/">Try Bobatron now!</a></h2>

![App Screenshot](https://i.imgur.com/lu4aYvf.png)

## Usage

This library is brilliant. It rounds the edges of practically any HTML element just like Apple does.

To install Bobatron into your project, simply include the script by specifying the file path.
```html
<script type="text/javascript" src="Bobatron.js"></script>
```
To target a specific element, add the class bobatron to it.
```html
<div class="bobatron">
...
</div>
```
To run the script, execute bobatron.scanner().
```js
window.addEventListener("load", () => {
bobatron.scanner()
})
window.addEventListener("resize", () => {
bobatron.scanner()
})
```
Usually, bobatron.scanner() needs to be called immediately after the page loads, as well as every time the page size is updated.

<h2 align=center style="text-align: center; font-size: 25px; font-weight: bold"><a href="https://complagaet.github.io/Bobatron.js/Bobatron.js">Download Bobatron.js</a></h2>