//import { post } from 'axios';
await import('axios');

function salvar(nome, matricula, indicacoes) {
    post('https://sheetdb.io/api/v1/0xc5xhss7ckry', {
        "data": {
                    "nome":  nome,
                    "matricula": matricula,
                    "indicacoes": indicacoes
                 }
    },{
      "auth": {
        "username": "u6lbpy4x",
        "password": "i2ferevkxv05oxhgsxh8"
      }
    })
}


salvar("Jonathan", "2929", 20);