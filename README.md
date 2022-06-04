<h1 align="center">BEM-VINDO(a) GABO UTILS</h1>
<p>
  <a href="https://www.npmjs.com/package/gabo" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/gabo.svg">
  </a>
  <a href="LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Alguns modulos nativos do PHP transcristos para o NODEJS para uso exclusivo em ES6

## Install

```sh
$ npm i gabo -s
    or
$ yarn add gabo -s
```

## Usage

### IMPORT ALL FUNCTIONS

```js
import { curl, GetStr, cpf, dados, rand, randomizador, gift, sleep } from "gabo";
```

### FUNÇÕES

* [curl](#curl): Função async/await Curl (para solicitação na web ou aplicativos)
* [dados](#dados): Função para Gerar dados BR
* [cpf](#GerarCpf): Função para Gerar um CPF valido
* [GetStr](#GetStr): Função para puxar dados de respostas 
* [gift](#gift): Função para gerar um GIFT
* [rand](#rand): Função para gerar numeros aleatorios
* [randomizador](#randomizador): Função para escolher um elemento de um array aleatoriamente
* [sleep](#sleep): Função async/await para deixar lento seu aplicativo por algum tempo

***

### CURL

```js
import { curl } from "gabo"

const _ = async function(){

    let first_req = await curl({
        url: '', // url do site
        method: '', // metodos: GET, PUT, POST, OPTION
        headers: {
            '':''
        },
        proxy: '', // para uso de proxy, `http://${username}:${password}@${url}:${port}` or `http://${url}:${port}`
        body: '' // se usar o método POST
    })

    console.log(first_req) // imprime o resultado obtido

    let second_req = await curl({
        url: '', // url do site
        method: '', // metodos: GET, PUT, POST, OPTION
        headers: {
            '':''
        },
        proxy: '', // para o uso proxy, `http://${username}:${password}@${url}:${port}` or `http://${url}:${port}`
        body: '' // se usar o método POST ou PUT
    }, true)

    console.log(second_req) // imprima o resultado da requisição no console, com corpo e cabeçalhos req

}()
```

### DADOS

```js
import { dados } from "gabo"

let Person = dados()

console.log(Person)
/**
 * Devolva um objeto com:
 * nome
 * email
 * usuario
 */
```

### GerarCpf

```js
import { cpf } from "gabo"

// Para gerar um CPF sem pontos e traços
let cpf = cpf()
// Para gerar um CPF com pontos e traços
let cpf_formatado = cpf({ formatado: true })
// imprime o resultado no CONSOLE
console.log(cpf, cpf_with_punctuation)
```

### GetStr

```js
import { GetStr } from "gabo"

let string = 'Estou usando o package, Gabo'

let capture = GetStr(string, ', ', '-') // print 'Gabo'

console.log(string, capture)
```

### Gift

```js
import { gift } from "gabo"

console.log(gift('xxxx-xxxx-xxxx-xxxx'))
```

### RAND

```js
import { rand } from "gabo"

let number = rand(0, 999) // Imprime número entre 0 - 999

console.log(number)
```

### RANDOMIZADOR

```js
import { randomizador } from "gabo"

let keys = ['Gabo', 'Packge', 'NodeJS', 'Module']

let randomize = randomizador(keys) // Imprime um valor aleatório do array

console.log(randomize)
```

### SLEEP

```js
import { sleep } from "gabo"

const _ = async function() {
    console.log(1)
    await sleep(1000) // tempo declarado em ms
    console.log(2)
}()
```

## Author

👤 **YORKANDA**

* Github: [@Yorkanda](https://github.com/buckzin)
* Telegram: [Yorkanda](https://t.me/y0rkzin)
* Discord: foden🐊#5873

## 📝 License

Copyright © 2020 [Yorkanda](https://github.com/buckzin).<br />
This project is [MIT](LICENSE) licensed.