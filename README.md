# Noise Maker

Noise plugin for Adobe XD

## Screenshot

![Noise Maker screenshot](/screenshot.png?raw=true "Noise Maker screenshot")

## Contributing

### Install dependencies

Ensure that your terminal is in the root of this project, then:

```
yarn install // or npm install
```

### For Development

```
yarn watch // or npm run watch
``` 

### For Production

```
yarn build // or npm run build
``` 

> You **must** run either `watch` or `build` prior to trying to use within XD!

### Launching in XD

You can use the UXP Developer Tools to load the plugin into XD.

Clicking "Add Plugin..." and select `dist/manifest.json`. 

**DO NOT** select the `manifest.json` file inside the `plugin` folder, run watch or build command first which will generate a `dist` folder and use the manifest inside that to add plugin