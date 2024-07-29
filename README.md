<h1 align="center">ExtendableString</h1>

<br>

<div align="center">
  🦀 ExtendableString allows you to create strings on steroids that have custom
  <br>
  transformations applied to them, unlike common, plain strings. 🪀
</div>

<br>
<br>

<div align="center">
  <blockquote>
    <br>
    <h4>💖 Support further development</h4>
    <span>I work hard for every project, including this one
    <br>
    and your support means a lot to me!
    <br>
    <br>
    Consider buying me a coffee. ☕
    <br>
    <strong>Thank you for supporting my efforts! 🙏😊</strong></span>
    <br>
    <br>
    <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
    <br>
    <br>
    <a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
    <br>
    <br>
    <br>
  </blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Usage](#-usage)
- [API](#-api)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i '@igor.dvlpr/extendable-string'
```

<br>

## 🤹🏼 API

<br>

> [!WARNING]
> Do **NOT** instantiate a new object from the `ExtendableString` class, extend it instead.
>

<br>



---

## ✨ Examples

`UpperCaseString.mts`
```ts
import { ExtendableString } from '@igor.dvlpr/extendable-string'

export class UpperCaseString extends ExtendableString {
  constructor(value: string) {
    super(value, (str) => str.toUpperCase())
  }
}
```

<br>

`example.mts`
```ts
import { UpperCaseString } from './UpperCaseString'

const test = new UpperCaseString('aaaa')
console.log(test.value) // Outputs 'AAAA'

const example = new UpperCaseString('aaaa')
example.value = 'hello'
console.log(test.value) // Outputs 'HELLO'
```

---

## 📝 Changelog

📑 The changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-extendable-string/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-extendable-string/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/keppo](https://www.npmjs.com/package/@igor.dvlpr/keppo)

> _🎡 Parse, manage, compare and output SemVer-compatible version numbers. 🛡_

<br>

[@igor.dvlpr/astro-escaped-component](https://www.npmjs.com/package/@igor.dvlpr/astro-escaped-component)

> _🏃🏻‍♂️‍➡️ An Astro component that holds only HTML-encoded content. 📜_

<br>

[@aria-toolkit/shared](https://www.npmjs.com/package/@aria-toolkit/shared)

> _👻 Shared resources between Aria modules. 🐦‍⬛_

<br>

[@igor.dvlpr/windev](https://www.npmjs.com/package/@igor.dvlpr/windev)

> _🍃 Provides ways of checking whether a path is a legacy Windows device. 💾_

<br>

[@igor.dvlpr/mapped-replacer](https://www.npmjs.com/package/@igor.dvlpr/mapped-replacer)

> _🗺 Zero-dependency Map and RegExp based string replacer with Unicode support. 🍁_

---

<br>

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
