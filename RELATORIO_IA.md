# Relatório de Uso de Inteligência Artificial

## 1. Identificação do projeto
**Projeto:** JOVI — Modo Aula  
**Equipe:** 404 Girls Not Found  
**Finalidade deste documento:** Registrar de forma transparente como ferramentas de Inteligência Artificial foram utilizadas durante o desenvolvimento do projeto.

---

## 2. Introdução

Durante o desenvolvimento do projeto JOVI, a Inteligência Artificial foi utilizada como uma ferramenta de apoio técnico e educacional.
Um dos principais usos da IA ocorreu durante a implementação do acesso à câmera do dispositivo. Essa funcionalidade permite que o protótipo solicite autorização ao usuário e exiba, dentro da aplicação, a imagem capturada pela câmera do celular ou do computador.
A IA também foi utilizada para auxiliar na conexão entre o Modo Aula e o protótipo do aplicativo de estudos. Com essa integração, as informações inseridas durante a configuração, como o nome do curso, as matérias, os dias da semana e os horários, passaram a ser utilizadas automaticamente na tela do aplicativo.
Essas implementações tornaram o projeto mais realista e permitiram que o Modo Aula deixasse de ser apenas uma representação visual estática, aproximando o protótipo da experiência esperada em uma aplicação funcional.

---
## 3. Objetivo do uso da IA

A Inteligência Artificial foi utilizada com o objetivo de auxiliar a equipe a compreender e implementar recursos que ainda não haviam sido trabalhados em profundidade durante as aulas.
Os principais objetivos foram descobrir como uma aplicação web desenvolvida com React poderia:
- Solicitar permissão para utilizar a câmera do dispositivo;
- Acessar a câmera do celular ou do computador;
- Exibir a imagem da câmera em tempo real;
- Integrar a imagem capturada ao layout do protótipo;
- Encerrar corretamente o acesso à câmera quando necessário;
- Tratar situações em que o usuário não concede a permissão;
- Adaptar a funcionalidade para diferentes dispositivos e tamanhos de tela;
- Compartilhar as informações entre o Modo Aula e o aplicativo;
- Utilizar no aplicativo os dados cadastrados durante a configuração;
- Organizar as matérias e seus respectivos horários;
- Criar uma pasta para cada matéria cadastrada.

---

## 4. Funcionalidades desenvolvidas com apoio da IA

### 4.1 Acesso à câmera do dispositivo

Um dos principais recursos implementados com apoio da IA foi o acesso real à câmera do dispositivo.
Para isso, foi utilizada a API de mídia disponibilizada pelos navegadores, por meio do recurso:

```javascript
navigator.mediaDevices.getUserMedia()
```
Esse recurso permite solicitar acesso à câmera e receber o fluxo de vídeo produzido pelo dispositivo.
A IA auxiliou na compreensão de como esse fluxo poderia ser associado a um elemento de vídeo dentro da aplicação, permitindo que o usuário visualizasse a imagem da câmera em tempo real.
---

### 4.2 Permissão do usuário

O acesso à câmera depende da autorização do usuário. Por isso, ao entrar na área correspondente, o navegador solicita permissão para utilizar a câmera e o microfone do celular ou do computador.
A IA ajudou a compreender esse processo e a considerar possíveis situações, como:
- Permissão concedida;
- Permissão recusada;
- Dispositivo sem câmera disponível;
- Navegador sem suporte ao recurso;
- Câmera já sendo utilizada por outro programa;
- Falha ao iniciar o fluxo de vídeo.
---

### 4.3 Controle do funcionamento da câmera
Além de iniciar a câmera, foi necessário interromper seu funcionamento quando o usuário saísse da tela correspondente.
A IA auxiliou na organização do código responsável por encerrar o acesso à câmera e ao microfone, evitando que esses recursos permanecessem ativos desnecessariamente depois que o usuário entrasse em outra parte do protótipo.
Também auxiliou na compreensão dos recursos `useRef` do React, utilizados para controlar o elemento de vídeo e o funcionamento da câmera de acordo com a tela aberta.

---

### 4.4 Exibição da câmera no layout

Além de acessar a câmera, foi necessário ajustar a imagem para que ela aparecesse corretamente dentro da interface criada para o projeto.
A IA foi utilizada como apoio para realizar ajustes relacionados a:
- Dimensões do vídeo;
- Posicionamento da imagem;
- Preenchimento da área disponível;
- Proporção da câmera;
- Comportamento em telas de celular e computador;
- Integração entre a imagem e os controles do Modo Aula.
Esses ajustes contribuíram para manter a identidade visual do projeto e tornar a experiência mais próxima da câmera de um aplicativo mobile.
---

### 4.5 Integração entre o Modo Aula e o aplicativo
A IA também foi utilizada para auxiliar na criação das funções que conectam o Modo Aula ao protótipo do aplicativo de estudos.
Durante a configuração do Modo Aula, o usuário informa o nome do curso, as matérias, os dias da semana e os horários das aulas. Com o apoio da IA, essas informações passaram a ser armazenadas no componente principal do projeto e compartilhadas com o aplicativo.
Dessa forma, o aplicativo consegue utilizar automaticamente os dados cadastrados anteriormente, sem que o usuário precise preencher novamente as mesmas informações.
A integração permite que o aplicativo apresente:
- O nome do curso configurado;
- As matérias cadastradas;
- Os dias e horários de cada aula;
- Uma pasta individual para cada matéria;
- A navegação entre o aplicativo e a câmera.
A IA também auxiliou na criação da lógica responsável por evitar que uma matéria aparecesse repetida quando possuísse mais de um horário. Assim, cada matéria possui apenas uma pasta, mas todos os seus dias e horários permanecem associados a ela.
Na etapa atual, as pastas apresentam os espaços destinados às fotos, aos documentos, aos áudios e aos resumos. O armazenamento permanente desses conteúdos ainda é uma representação da proposta futura do projeto, mas a integração já demonstra como as informações do Modo Aula poderão ser utilizadas para organizar os materiais no aplicativo.

---

## 5. Como a IA foi utilizada

A IA foi utilizada por meio de perguntas e solicitações relacionadas às necessidades encontradas durante o desenvolvimento.
Entre os tipos de solicitações realizadas, destacam-se:
- Explicação sobre como acessar a câmera utilizando JavaScript;
- Adaptação do acesso à câmera para componentes React;
- Explicação sobre o funcionamento de `useRef`;
- Sugestões para solicitar e tratar permissões do navegador;
- Identificação e correção de erros no código;
- Organização do código para evitar que a câmera permanecesse ativa desnecessariamente;
- Integração da câmera com as telas e funcionalidades criadas pela equipe;
- Explicação sobre como compartilhar informações entre componentes React;
- Conexão dos dados do Modo Aula com o aplicativo;
- Organização das matérias e dos horários dentro do aplicativo;
- Criação da navegação entre a câmera, a tela inicial e as pastas das matérias.
As respostas geradas pela IA foram utilizadas como referência e ponto de partida. O conteúdo não foi aplicado de maneira automática ou sem análise.

---

## 6. Processo de análise e validação

Após receber as sugestões da Inteligência Artificial, a equipe realizou as seguintes etapas:
1. Leitura e análise do código sugerido;
2. Adaptação dos nomes de funções, componentes e classes para a estrutura do projeto;
3. Integração com os componentes desenvolvidos pela equipe;
4. Execução do projeto no ambiente de desenvolvimento;
5. Testes de solicitação de permissão;
6. Testes de funcionamento da câmera;
7. Verificação da exibição em diferentes tamanhos de tela;
8. Testes da passagem das informações do Modo Aula para o aplicativo;
9. Verificação das matérias, dos dias e dos horários apresentados;
10. Testes de abertura das pastas de cada matéria;
11. Correção de problemas visuais e funcionais;
12. Validação da navegação entre as telas;
13. Revisão do código final.
Portanto, a IA foi utilizada como ferramenta de assistência, mas as decisões sobre a implementação, a organização do projeto e a versão final do código foram tomadas pela equipe.

---

## 7. Conclusão

A Inteligência Artificial foi utilizada como ferramenta de apoio durante a implementação do acesso real à câmera do celular ou do computador e durante a integração entre o Modo Aula e o aplicativo de estudos.
O acesso à câmera foi importante para tornar o protótipo do JOVI mais interativo, funcional e próximo da experiência planejada para o produto. Em vez de apresentar somente uma simulação visual, o projeto passou a utilizar a câmera disponível no dispositivo, mediante autorização do usuário.
A integração com o aplicativo permitiu que as informações cadastradas durante a configuração do Modo Aula fossem reutilizadas automaticamente. O nome do curso, as matérias, os dias e os horários passaram a ser apresentados no aplicativo e utilizados para criar as pastas responsáveis pela futura organização dos conteúdos.
A IA contribuiu com explicações, exemplos e sugestões de código, enquanto a equipe ficou responsável por compreender, adaptar, integrar e testar a solução.
Dessa forma, o uso da Inteligência Artificial complementou o processo de aprendizagem e desenvolvimento, sem substituir a participação, a criatividade, as decisões e a responsabilidade técnica dos integrantes do projeto.