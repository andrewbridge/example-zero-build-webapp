# example-zero-build-webapp
An example zero build setup for prototyping web apps.

## Usage

[View app online](https://andrewbridge.github.io/example-zero-build-webapp/)

### Locally

Serve it in a browser with any HTTP server. A node based server is included in the `package.json`:

```bash
npm run serve
```

## Development

This tool is build step free, just serve it in a browser with any HTTP server, but `npm run serve` is an included command.

Dependencies are mapped via the Import Map in `src/index.html`.

Vue components are kept withing `modules/components`. Because we include the parser, templates can be provided in a `template` property of the exported component, usually in a template literal string to allow for line breaks and static variable insertion.

We use [goober](https://github.com/cristianbote/goober) to provide lightweight CSS-in-JS functionality, although we currently only use it to generate class names to attach a styles string to a unique class name.

For simple base styles, we use [Pico.css](https://picocss.com).
