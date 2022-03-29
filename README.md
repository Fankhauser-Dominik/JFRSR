Current status: [![Build Status](https://travis-ci.com/headwirecom/jsonforms-react-spectrum-renderers.svg?branch=master)](https://travis-ci.com/headwirecom/jsonforms-react-spectrum-renderers) [![Coverage Status](https://coveralls.io/repos/headwirecom/jsonforms-react-spectrum-renderers/badge.svg?branch=master&service=github)](https://coveralls.io/github/headwirecom/jsonforms-react-spectrum-renderers?branch=master)

# React Spectrum Renderer Set for JSONForms

Notice: This renderer set is work in progress and integrates yet unreleased React Spectrum components.

[Checkout the examples](https://headwirecom.github.io/jsonforms-react-spectrum-renderers/) to see the React Spectrum renderer set in action.

# Developers Documentation

## First time setup

- Install [node.js](https://nodejs.org/) (version = 14.x.x)
- Update npm (version = 6.x.x)
- Clone this repository
- Change into the Directory: `cd JFRSR`
- Install dependencies and Hook up dependencies between packages: `npm ci && npm run init`
- Build and Run React Spectrum examples: `cd packages/spectrum && npm run build && npm run dev`

## Start the example application locally

- Run React Spectrum examples: `cd packages/spectrum && npm run dev`

## Build & Testing

- Run React Spectrum tests in watch mode: `cd packages/spectrum && npx jest --watch`
- Check Formatting: `npm run check-format`

- Build (all packages): `npm run build`
- Test (all packages): `npm run test`
- Clean (delete `dist` folder of all packages): `npm run clean`

## Dependency & Release management

// TODO

## Continuous Integration

The React Spectrum JSONForms project is build and tested via [Travis](https://travis-ci.org/). Coverage is documented by [Coveralls](https://coveralls.io).

## JSON Schema Features

- [x] boolean - Checkbox
- [x] boolean - Toggle
- [x] boolean - Button
- [x] integer - Number
- [ ] integer - Text (Don't know what they mean)
- [x] String - Text
- [x] String - TextArea
- [x] Enum - Combo
- [x] Enum - Autocomplete
- [ ] oneOf (const / title) - Combo
- [ ] oneOf (const / title) - Autocomplete
- [ ] Date format - Date field
- [ ] Time format - Time field
- [ ] Datetime format - Datetime field
- [ ] Object - Vertical grid
- [ ] Array of primitives - List
- [ ] Array of objects - Table
- [ ] Array of objects - List
- [ ] Array of objects - List with Detail
- [ ] Array of enums - Multiple Choice
- [x] oneOf - Tabs
- [ ] allOf - Tabs
- [ ] anyOf - Tabs

## UI Schema Features

- [x] Vertical Layout - Vertical Grid
- [x] Horizontal Layout - Horizontal Grid
- [x] Categorization - Tabs
- [x] Group - Group
- [x] Label - Text

# License

The JSONForms project is licensed under the MIT License. See the [LICENSE file](https://github.com/headwirecom/jsonforms-react-spectrum-renderers/blob/master/LICENSE) for more information.
