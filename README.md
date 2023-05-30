# ExtendableString

🦀 ExtendableString allows you to create magic strings that have custom transformations applied to them, unlike common, plain strings. 🪀

<br>

<div align="center">
<h3>💖 Support further development</h3>
<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="108"></a>
</div>

<br>
<br>
<br>

## Table of Contents

- [Usage](#🕵🏼‍♂️-usage)
- [API](#🤹🏼‍♂️-api)
  - [Constructor](#constructor)
  - [Properties](#properties)
  - [Methods](#methods)
- [License](#license)

<br>
<br>

## 🕵🏼‍♂️ Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/extendable-string"
```

<br>

## 🤹🏼‍♂️ API

### `Constructor`

<br>

The constructor initializes an instance of the `ExtendableString` class.

#### _Parameters_

- `raw` (string): the initial value of the string.
- `transformFn` (function): a transformation function that takes a string as input and returns a transformed string.

<br>
<br>

### `Properties`

#### **`value`**

The value property represents the current transformed value of the string.

<br>
<br>

### `Methods`

#### **`toString()`**

The `toString()` method returns the current transformed value of the string.

<br>

### Example

```typescript
const transformFn = (str: string) => str.toUpperCase()
const extendableString = new ExtendableString('hello', transformFn)
console.log(extendableString.value) // Output: "HELLO"
```

<br>
<br>

### License

This project is licensed under the terms of the MIT license.
