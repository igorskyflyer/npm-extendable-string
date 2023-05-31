# ExtendableString

🦀 `ExtendableString` allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀

<br>

<div align="center">
  <h3>Time spent working on this project:</h3>
  <a href="https://wakatime.com/badge/user/34413f5c-8870-4397-9420-65d8b08d4ab4/project/13fe3806-c319-4346-ac73-2f26a5edea69"><img src="https://wakatime.com/badge/user/34413f5c-8870-4397-9420-65d8b08d4ab4/project/13fe3806-c319-4346-ac73-2f26a5edea69.svg?style=plastic" alt="wakatime"></a>
</div>

<br>

<div align="center">
<h3>💖 Support further development</h3>
<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="108"></a>
</div>

<br>
<br>
<br>

## Table of Contents

- [Usage](#usage)
- [API](#api)
  - [Example](#example)
  - [Properties](#properties)
  - [Methods](#methods)
- [License](#license)

<br>
<br>

## Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/extendable-string"
```

<br>

## API

<br>

To actually use it, you should extend your own String class from it.

<br>

### Example

<br>

_UpperCaseString.mts_

```typescript
import { ExtendableString } from '@igor.dvlpr/extendable-string'

export class UpperCaseString extends ExtendableString {
  constructor(value: string) {
    super(value, (str) => str.toUpperCase())
  }
}
```

<br>

_example.mts_

```typescript
import { UpperCaseString } from './UpperCaseString'

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
 ❗ You do <strong>NOT</strong> instantiate a new object from the <code>ExtendableString</code> class, you extend it instead.
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
