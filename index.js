import leite from "leite";
import request from "request";

export async function curl(config, req = null) {
    request.defaults({ rejectUnauthorized: false });
    if (req) {
        return new Promise(resolve => request(config, (error, res, body) => resolve(res)));
    } else {
        return new Promise(resolve => request(config, (error, res, body) => resolve(body)));
    }
}

export function rand(min, max) {

    if (min == 0) {

        return Math.floor((Math.random() * max) + 0);

    } else {

        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

}

export function gift(string) {
    return string.replace(/[x]/gi, () => Math.random().toString(26)[5].toUpperCase())
}

export function randomizador(keys) {
    var keys = keys
    var random = Math.floor(Math.random() * keys.length);
    return keys[random]
}

export function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

export function GetStr(date, start, end, i = 0) {

    if (date.split(start)[1] === undefined) return false
    if (date.split(start)[1] === 'undefined') return false
    if (!date.split(start)[1]) return false

    return date.split(start)[1].split(end)[i];

}

export function dados(){
    const nome = leite().pessoa.nome({ nomeDoMeio: true })
    const emailRand = leite().pessoa.email()
    const usuario = leite().pessoa.usuario();

    return { nome: nome, email: emailRand, usuario: usuario }
}

export function cpf(options){
    return leite().pessoa.cpf(options)
}