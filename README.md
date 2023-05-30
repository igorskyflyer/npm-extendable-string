# ExtendableString

🦀 `ExtendableString` allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀

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
  - [Example](#example)
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

<br>

To actually use it, you should extend your own String class from it.

<br>

### Example

```typescript
import { ExtendableString } from '@igor.dvlpr/extendable-string'

export class UpperCaseString extends ExtendableString {
  constructor(value: string) {
    super(value, (str) => str.toUpperCase())
  }
}

const test = new UpperCaseString('aaaa')
console.log(test.value) // Outputs 'AAAA'

const example = new UpperCaseString('aaaa')
example.value = 'hello'
console.log(test.value) // Outputs 'HELLO'
```

Each time you create a new string or assign a new value to it, your string transformation function will fire.

<br>

<blockquote>
<br>
 ❗ You do <strong>NOT</strong> instantiate a new object from the <code>ExtendableString</code> class.
 <br>
 <br>
</blockquote>

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
<br>

### License

This project is licensed under the terms of the MIT license.
