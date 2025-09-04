<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-extendable-string/main/media/extendable-string.png" alt="Icon of ExtendableString" width="256" height="256">
  <h1>ExtendableString</h1>
</div>

<br>

<h4 align="center">
  🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
  - [constructor()](#constructorraw-transformfn)
  - [value](#value-string)
  - [toString()](#tostring-string)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🚀 Instantly applies custom string transformations on creation  
- 🔄 Updates value with transformation applied automatically  
- 🛡️ Validates transformation function before use  
- 🧩 Designed for easy extension via sub-classing  
- 📦 Encapsulates logic with private fields for safety  
- 📝 Provides clean string output through the `toString()` method  
- ⚡ Ensures consistent transformed state at all times  

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/extendable-string
```

```bash
yarn add @igorskyflyer/extendable-string
```

```bash
npm i @igorskyflyer/extendable-string
```

<br>
<br>

## 🤹🏼 API

> ### 💡 TIP
>
> #### First Steps
>
> Do **NOT** instantiate a new object from the `ExtendableString` class, extend it instead.
>

<br>

### `constructor(raw, transformFn)`

*Creates an ExtendableString instance.*  

<br>

`raw` - The string input to transform.  

`transformFn` - The transformation function to apply to the string.  

Will throw an error if the transformation function is not supplied.

---

### `value: string`

*Gets the transformed string or sets a new value that will be transformed automatically.*

---

### `toString(): string`

*Gets the transformed string value.*  

Returns the transformed string.

<br>
<br>

## 🗒️ Examples

`UpperCaseString.ts`
```ts
import { ExtendableString } from '@igorskyflyer/extendable-string'

export class UpperCaseString extends ExtendableString {
  constructor(value: string) {
    super(value, (str) => str.toUpperCase())
  }
}
```

<br>

`example.ts`
```ts
import { UpperCaseString } from './UpperCaseString.js'

const test = new UpperCaseString('aaaa')
console.log(test.value) // Outputs 'AAAA'

const example = new UpperCaseString('aaaa')
example.value = 'hello'
console.log(test.value) // Outputs 'HELLO'
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-extendable-string/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-extendable-string/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/keppo](https://www.npmjs.com/package/@igorskyflyer/keppo)

> _🎡 Parse, manage, compare and output SemVer-compatible version numbers. 🛡_

<br>

[@igorskyflyer/astro-escaped-component](https://www.npmjs.com/package/@igorskyflyer/astro-escaped-component)

> _🏃🏻‍♂️‍➡️ An Astro component that holds only HTML-encoded content. 📜_

<br>

[@aria-toolkit/shared](https://www.npmjs.com/package/@aria-toolkit/shared)

> _👻 Shared resources between Aria modules. 🐦‍⬛_

<br>

[@igorskyflyer/windev](https://www.npmjs.com/package/@igorskyflyer/windev)

> _🍃 Provides ways of checking whether a path is a legacy Windows device. 💾_

<br>

[@igorskyflyer/mapped-replacer](https://www.npmjs.com/package/@igorskyflyer/mapped-replacer)

> _🗺 Zero-dependency Map and RegExp based string replacer with Unicode support. 🍁_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
