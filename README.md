# Demo Foundation Datepicker

## install jquery https://www.npmjs.com/package/jquery
`npm install --save jquery`

## install Foundation Datepicker https://github.com/najlepsiwebdesigner/foundation-datepicker
`npm install --save foundation-datepicker`

## update .angular-cli.json
```
    ...,
    "styles": [
        "styles.css",
        "../node_modules/foundation-datepicker/scss/foundation-datepicker.scss"
    ],
    "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",        
        "../node_modules/foundation-datepicker/js/foundation-datepicker.min.js"        
    ],
    ....
```