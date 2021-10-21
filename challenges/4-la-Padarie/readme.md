# La-Padarie-Challenge

Esse repositório é feito no intuito de estimular o aprendizado em desenvolvimento web, por meio de um desafio com duas etapas front-end e uma back-end!

Pull requests são bem vindos. Faça um pull request da solução do desafio numa branch sua, separada da main. Para mudanças maiores, por favor, abra uma issue primeiro para discutir o que você gostaria de alterar. Leia nossas diretrizes de contribuição [aqui]().

### Etapa 1 - HTML e CSS

Pensando em evitar aglomerações devido à situação atual, a padaria virtual La Padarie, está constuindo uma fila virtual para garantir a saúde se seus clientes e de todos; assim como facilitar o atendimento. Para isso, o seu Antônio, dono da padaria, pediu a sua ajuda. Será necessário construir uma página conforme as seguintes imagens: 

---
#### Versão Mobile/Tablet
<img src="https://user-images.githubusercontent.com/68190118/138199523-c9623809-5b9c-4afc-af81-d5df7f112246.png" width="27%" />  
<img src="https://user-images.githubusercontent.com/68190118/138199553-aa7267fd-0d7c-4d9c-a70e-76e72c201e12.png" width="71.2%" />  

---
### Versão Desktop
![image](https://user-images.githubusercontent.com/68190118/138199615-01fc836a-91e3-4d60-bab7-ac97b6956989.png)

###### Paleta de cores
| #311B02 | #E5CF94 | #000000 | #EDEDED |
| ------ | ------ | ------ | ------ |
| ![color1](https://user-images.githubusercontent.com/68190118/138206668-bfe8d6fe-09e3-41b5-836e-c85bbf7411ff.png) | ![color2](https://user-images.githubusercontent.com/68190118/138206709-72123334-6623-4391-b3d2-bde1f6fd4365.png) | ![color3](https://user-images.githubusercontent.com/68190118/138206738-4e8df24b-6b78-4ef9-9b75-fd2a553f6c8d.png) | ![color4](https://user-images.githubusercontent.com/68190118/138206775-539126cd-30ce-4838-b756-03c0365f82c1.png)
 | 
###### Logo e Fontes
*  [Fonte Podkova](https://fonts.google.com/specimen/Podkova)
*  [Logo La Padarie SVG](/uploads/79e836ec43bfc0f6e37c83d1a6e29d39/Logo.svg)
*  [Logo La Padarie PNG](https://user-images.githubusercontent.com/68190118/138206882-f4b18a8d-fd9a-4980-9476-907a1471e2f4.png)

### Etapa 2 - Javascript

:sparkles:  Ficamos felizes dos resultados com o novo site de padaria feito por você! E Sr. Antônio, o dono da padaria, ficou ainda mais 🤩. Com isso ele ficou muito animado pra ver a fila funcionando e daí vem a sua mais nova missão de Padawinfo!

---

<img src="https://user-images.githubusercontent.com/68190118/138342253-bad7cb80-9f87-44ea-9ea3-7656d8651ede.png" width="100%" />

Nessa missão, será necessário que seja implementado um auto-cadastro para que as pessoas consigam entrar na fila. Ao preencher o campo de nome e quantidade, a pessoa deve ser adicionada ao final da fila. Sendo que, a cada 10 segundos, a pessoa do início da fila, deverá ser atendida, ou seja, sair da fila. 

**Obs.**: a fila deve ser salva como um array (vetor) no JavaScript, e não apenas aparecer na tela. Segue o array da situação inicial da fila:
```js
let queue = [
  {
    name: "Caíque Moura",
    amount: 3,
  },
  {
    name: "Laíne Andrade",
    amount: 1,
  },
  {
    name: "Bruno Castro",
    amount: 2,
  },
  {
    name: "Ednaldo Pereira",
    amount: 27,
  },
];
````
As operações de adicionar e remover dever ser feitas alterando `queue`.

**Bônus:**  
1 - 
Para distrair um pouco as pessoas enquanto elas estão na fila, abaixo das regras, mostre a previsão do tempo para Salvador através da [API da MetaWeather](https://www.metaweather.com/api/)  ( `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/455826/` ), para isso, utilize o `fetch` do JS.

2 - 
Há mais um detalhe, a maldição do *enjuriamento* coletivo impõe uma regra: se a quantidade de pães do cliente que for atendido for 71, a ordem da fila será invertida. Os últimos serão os primeiros e os primeiros serão os últimos! 🧙

### Etapa 3 - Javascript

O Sr.Antônio deseja aprimorar o sistema de pedidos do seu site da La Padarie, que agora contará com um sistema login e banco de dados, capaz de armazenar as encomendas feitas pelos clientes, que serão colocadas na tela inicial.  

Bora pra **Missão backend! :sunglasses:**

---  

#### Passo 01  
Você deverá fazer um sistema de pedidos no site da Padaria do Sr.Antônio. Usando NodeJs e banco de dados (ex: MySQL) através de uma API.   
Os pedidos ficarão guardados em um banco de dados e aparecerão em ordem de chegada na tela inicial, mostrando quem comprou e quantos pães comprou.

Haverão duas rotas:
* [x] Uma rota para cadastrar (POST) um pedido, que receberá os valores digitados e o horário e salvará os dados no banco de dados. 
* [x] A segunda rota retorna (GET) todos os pedidos cadastrados.

#### Passo 02
* [x] Adapte a rota GET para retornar apenas os pedidos feitos nos últimos 5 minutos.

#### Passo 03
* [x] Validação: não permita que seja enviado letras na quantidade nem com o nome ou quantidade vazios. 

#### Passo Bonus  
>_**Bônus:**_
Para melhor contato com clientes e uma forma de compensação para os melhores compradores, adicione um sistema de pontos, fazendo com que os melhores compradores ganhem um desconto depois de uma certa quantidade de comprar.
>>A cada pão comprado, o cliente ganha 1 ponto, que ficará registrado em sua conta.
>>A cada 50 pontos, os clientes terão a opção de pedir 5 pães de graça.
>Quando o cliente chegar a marca de 50 pontos, aparecerá ao lado da opção `Fazer pedido`, a nova opção `Ganhar Bônus`, que pedirá 5 pães automaticamente e seu cardzinho na tela dos pedidos deverá ter um enfeite a mais. Fica a critério de você, enfeitar o melhor possível, use sua criatividade e habilidade com CSS.


Boa sorte. Que a força esteja com você! :green_heart:

**Creio que isso é tudo, mestre!**  
