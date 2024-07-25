# ScrollHeaderClass

`ScrollHeader` is a JavaScript package that provides a utility to create a scroll header for your web page. It's a simple way to add a sticky header to the top of your page that follows the user as they scroll.

## Installation

To install `ScrollHeader`, simply run:

CDN
To use ScrollHeader via a CDN, you can add the following script tag to your HTML:
`<script src="https://cdn.example.com/scroll-header.min.js"></script>`

## Demo

To see a live demo of ScrollHeader in action, check out the demo.html file in this package.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <nav
      id="nav"
      style="position: fixed; width: 100%; top: 0; left: 0; background: blue"; padding: "24px"
    >
      <h2>Menu</h2>
    </nav>
    <div style="height: 200vh; background: red">Scroll Me</div>
  </body>
  <footer>
    <style>
      .active-nav {
        background: red !important;
      }
    </style>
    <script src="./index.js"></script>
    <script>
      scrollHeaderClass({
        headerElement: document.getElementById('nav'),
        scrollClass: 'active-nav',
        threshold: 100,
        callBackFn: () => {
            console.log("scrolled")
        },
      });
    </script>
  </footer>
</html>

```

## License

ScrollHeader is licensed under the MIT License. See the LICENSE file for more details.
