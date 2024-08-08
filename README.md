# Text2Clipboard

A minimalistic interface that copies any text to the user's clipboard using URL query params

## How to use

Add the text you want the user to copy in query params with the key "text" (make sure to encodeURIComponent your text before). Example:

With the [official instance of the website](https://text2clipboard.netlify.app/) hosted on netlify:

```text
https://text2clipboard.netlify.app/?text=Hello%2C%20World!
```

With a self-hosted version:

```text
https://<your-domain>/index.html?text=Hello%2C%20World!
```

## Contributing

There is nothing simpler than this website, I think you should understand the code pretty quickly. No overkill framework, just basic HTML, CSS and JS.

## License

Text2Clipboard is a free and open source software licensed under the WTFPL license. Do what the fuck you want to.
