Crie uma função que dado o objeto a seguir:

```js
var endereco = {
  curso: 'Reprograma',  
  local: 'Estação Hack',
  rua: 'Avenida Paulista',
  numero: 1374,
  bairro: 'Bela Vista',
  cidade: 'São Paulo',
  uf: 'SP'
};
```

Retorne o seguinte conteúdo:

```
O curso da Reprograma acontece na Estação Hack que fica localizada em São Paulo / SP, no bairro Bela Vista, na "Avenida Paulista", nº 1374.
```

let endereco = {
    curso: 'Reprograma',  
    local: 'Estação Hack',
    rua: 'Avenida Paulista',
    numero: 1374,
    bairro: 'Bela Vista',
    cidade: 'São Paulo',
    uf: 'SP'
  };

  console.log(`O curso da ${endereco.curso} acontece na ${endereco.local} que fica localizada em ${endereco.cidade} / SP, no bairro ${endereco.bairro}, na ${endereco.rua}, nº ${endereco.numero}.`);