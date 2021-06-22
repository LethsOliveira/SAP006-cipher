![Screenshot from 2021-06-21 17-54-21](https://user-images.githubusercontent.com/79461698/122838715-080b0280-d2cd-11eb-9b01-96ac1fd7721f.png)

## Índice

* [1. Prefácio](#1-prefácio)
* [2. O que é o Criptografe-se?](#2-o-que-é-o-criptografe-se)
* [3. Escolhas de UI](#3-escolhas-de-ui)
* [4. UX](#4-ux)
* [5. Certo, mas como o Criptografe-se funciona?](#5-certo-mas-como-o-criptografe-se-funciona)

***

## 1. Prefácio  

Este projeto foi desenvolvido pela Leths Oliveira como parte do Bootcamp da Turma 06 da Laboratória Brazil!  
O desafio era trabalhar com códigos HTML, CSS e JS de uma forma que a aplicação realize a Cifra de César para o usuário!  
Bateu uma curiosidade para saber o que é a Cifra de César? Basta clicar [aqui](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar).


## 2. O que é o Criptografe-se?  

Este projeto foi desenvolvido com o intuito de criptografar e/ou descriptografar diários digitais.  
Tendo em vista que existem pessoas que não respeitam o sagrado espaço privado de um diário, com todas as nossas confissões, confusões e sentimentos, o Criptografe-se foi pensado para que a intimidade do diário do usuário seja preservada e nada seja revelado sem o consentimento do mesmo. Os segredos livres dos famosos enxeridos.  


## 3. Escolhas de UI  

### Cores  

A inspiração da paleta de cores veio das flores.  
O tom lilás transmite a sensação de purificação mental e física, além disso, a tonalidade também simboliza respeito, dignidade, sinceridade e espiritualidade. Ideal para criar uma atmosfera serena e intimista porque representa mistério e elevação espiritual.  
Já os tons de azul mais escuros inspiram segurança e serenidade, sendo uma cor calmante. Acrescenta uma sensação de força, mas é uma cor relaxante.  
![Screenshot from 2021-06-21 20-33-55](https://user-images.githubusercontent.com/79461698/122840214-10b10800-d2d0-11eb-9cf8-dadcb7a85ae3.png)

### Tipografia  

Para a tipografia foi escolhida uma letra que lembra-se a letra de mão cursiva, o Indie Flower.    
Por se tratar de um diário, nada mais correto do escrever como se fosse com a própria mão.  
![Screenshot from 2021-06-21 20-40-11](https://user-images.githubusercontent.com/79461698/122840703-0c391f00-d2d1-11eb-9223-1d045cbb5e12.png)  
![Screenshot from 2021-06-21 20-40-45](https://user-images.githubusercontent.com/79461698/122840705-0d6a4c00-d2d1-11eb-94ae-ea2b8571f96e.png)  

Para a explicação e contexto, foi utilizado o clássico Verdana, pela legividade de informações.  
![Screenshot from 2021-06-21 21-20-00](https://user-images.githubusercontent.com/79461698/122843819-b8c9cf80-d2d6-11eb-83d9-b56a6b3f1ed3.png)   
![Screenshot from 2021-06-21 21-20-13](https://user-images.githubusercontent.com/79461698/122843827-bc5d5680-d2d6-11eb-8b5f-bb1b5ccdd9e8.png)   


## 4. UX  

O primeiro protótipo desta aplicação foi feito à lápis em uma folha de papel. Nele, foram desenhados quatro páginas com o visual que foi idealizado (linhas tremidas, mas entendíveis rs). À este protótipo foram anexadas post-its falando como é feita a aplicação, qual é seu público alvo e o que cada página faz.  
Partindo desde protótipo, a aplicação foi desenhada fielmente à idealização, mantendo seu layout e escopo.  
Após toda a parte de avaScript estava pronta, foram realizados múltiplos testes que atestaram 100% de acertos durante a codificação!  
Então:  
* [x] Desenhar a aplicação pensando e entendendo o usuário.  
* [x] Criar protótipos.  
* [x] Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia).  
* [x] Semântica HTML.  
* [x] Uso de Seletores de CSS.  
* [x] Aplicar JavaScript para deixar a aplicação funcionando.  
* [x] Testes unitários.  


## 5. Certo, mas como o Criptografe-se funciona?

Na página inicial da aplicação, o usuário recebe as boas vindas e breves instruções de como a aplicação funciona. Há também, ao final da aplicação, um link sobre mais explicações da Cifra de César, que abre em uma nova página.  
![Screenshot from 2021-06-21 20-05-05](https://user-images.githubusercontent.com/79461698/122838545-a2b71180-d2cc-11eb-8ce5-b249d8a78ddc.png)  
  
Na página de escolha, o usuário decide que tipo de aplicação ele quer fazer: o de encriptografar ou o de descriptografar.  
![Screenshot from 2021-06-21 20-10-24](https://user-images.githubusercontent.com/79461698/122838662-ec9ff780-d2cc-11eb-9682-fe7dca420124.png)   

Na página de Encriptografar, escolhe um número para ser sua chave de deslocamento (_offset_), e então o usuário digita seu relato diretamente na caixa de texto, podendo copiar o texto criptografado com apenas um clique do botão e já poderá passar o texto copiado para o diário digital. A página também conta com um botão de retorno para a página inicial.   
É recomendado que o usuário, ao passar seu relato criptografado para o diário digital, salve também o número do deslocamento, para que seja possível descriptografar posteriormente.  
![Screenshot from 2021-06-21 20-11-05](https://user-images.githubusercontent.com/79461698/122838672-f164ab80-d2cc-11eb-973f-5bf0a4d0d8c6.png)  


Na página de Descriptografar, o usuário escolhe qual é o número de deslocamento utilizado para encriptografar, insere o texto que ele quer reler para lembrar dos acontecimentos e clica no botão de Descriptografar, podendo copiar o texto traduzido, caso queira, ou retornando para a página inicial ao clicar no botão de Voltar.  
![Screenshot from 2021-06-21 20-11-40](https://user-images.githubusercontent.com/79461698/122838682-f6295f80-d2cc-11eb-8f30-fdd9daa6b665.png)  
  
