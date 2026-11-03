# JOVI — Modo Aula | Sprint 4

Evolução do projeto desenvolvido na Sprint 3 pela equipe **404 Girls Not Found** para o Challenge JOVI 2026. A solução mantém a proposta original do Modo Aula — uma câmera que reconhece o contexto acadêmico e um aplicativo que organiza os materiais por matéria — e acrescenta rotas, autenticação demonstrativa, hooks customizados e consumo de API mockada.

## Funcionalidades

- Configuração de curso, matérias, dias e horários;
- Persistência dos dados no `localStorage`;
- Câmera e gravação de áudio com as APIs do navegador;
- Modos Foto, Documento e Áudio;
- Aplicativo de estudos com materiais organizados por matéria;
- Dicas de estudo consumidas de uma API mockada;
- Autenticação demonstrativa;
- Rotas públicas e privadas;
- Layout responsivo para Desktop, Tablet e Mobile.

## Tecnologias utilizadas

- [React 19](https://react.dev/);
- [React Router](https://reactrouter.com/) — rotas públicas, privadas e redirecionamentos;
- [Vite](https://vite.dev/) — servidor de desenvolvimento e build;
- [Tailwind CSS 4](https://tailwindcss.com/) — estilização utility-first;
- [Lucide React](https://lucide.dev/) — biblioteca de ícones;
- JavaScript ES6+;
- API mockada local consumida com `fetch`;
- Web APIs `localStorage`, `MediaDevices` e `MediaRecorder`;
- ESLint.

## Requisitos do ambiente

- Node.js 20.19 ou superior;
- npm 10 ou superior;
- Navegador moderno, preferencialmente Chrome, Edge ou Firefox;
- Câmera e microfone são opcionais, mas necessários para testar as capturas reais.

## Como instalar as dependências

Abra um terminal na pasta em que o projeto foi extraído e execute:

```bash
cd sprint-4-front-web
npm install
```

O arquivo `package-lock.json` está incluído para manter as versões reproduzíveis em outra máquina.

## Como executar o projeto

```bash
npm run dev
```

O Vite exibirá o endereço local no terminal, normalmente:

```text
http://localhost:5173
```

Abra esse endereço no navegador. Para testar as áreas privadas, use as credenciais descritas na seção “Usuário e senha para teste”.

### Outros comandos

```bash
npm run lint      # valida o código com ESLint
npm run build     # gera a versão de produção em dist/
npm run preview   # executa localmente a build de produção
```

## Back-end e API

O projeto **não possui servidor Back-end separado**, portanto não é necessário executar um segundo servidor.

A aplicação consome uma API mockada local por meio de `fetch`. O endpoint é servido pelo próprio Vite a partir do arquivo:

```text
public/api/dicas-estudo.json
```

Durante o desenvolvimento, o endpoint pode ser acessado em:

```text
http://localhost:5173/api/dicas-estudo.json
```

Na Vercel, o mesmo endpoint será disponibilizado no domínio do deploy.

## Rotas da aplicação

| Rota | Acesso | Descrição |
| --- | --- | --- |
| `/` | Pública | Escolha entre o protótipo da câmera e o aplicativo |
| `/login` | Pública | Autenticação demonstrativa |
| `/camera` | Privada | Câmera e configuração do Modo Aula |
| `/aplicativo` | Privada | Aplicativo de estudos e consumo da API mockada |

As rotas privadas redirecionam automaticamente para `/login` quando não existe uma sessão válida no navegador.

## Usuário e senha para teste

A autenticação é apenas demonstrativa e utiliza `localStorage`; não deve ser usada como autenticação de produção.

```text
E-mail: professor@fiap.com.br
Senha: Sprint4@2026
```

## Como testar o fluxo principal

1. Execute `npm install` e `npm run dev`;
2. Abra `http://localhost:5173`;
3. Escolha o protótipo da câmera ou o aplicativo;
4. Entre com o usuário de teste;
5. Na câmera, abra “Modo Aula” e configure curso, matérias e horários;
6. Finalize a configuração e teste Foto, Documento e Áudio;
7. Volte à tela inicial e abra o aplicativo;
8. Confira as matérias persistidas e use o botão da seção “Dica rápida de estudo” para consumir a API mockada.

> A câmera e o microfone funcionam apenas em `localhost` ou em conexão HTTPS. O navegador solicitará permissão ao abrir a rota da câmera. Caso a permissão seja negada, as demais funcionalidades continuam disponíveis.

## Hooks customizados

- `useModoAula`: estado, persistência e fluxo de configuração do Modo Aula;
- `useCamera`: acesso e encerramento seguro do stream de câmera e microfone;
- `useDicaEstudo`: consumo e controle da API mockada;
- `useAuth`: acesso ao contexto de autenticação.

## Uso de Inteligência Artificial no projeto

A Inteligência Artificial foi utilizada como apoio técnico e educacional em dois pontos principais do desenvolvimento: (1) na implementação do acesso real à câmera e ao microfone do dispositivo via `navigator.mediaDevices.getUserMedia`, incluindo o tratamento de permissões do usuário, o uso de `useRef` para controlar o vídeo e o encerramento correto do stream ao trocar de tela; e (2) na integração entre a configuração do "Modo Aula" (curso, matérias, dias e horários) e o protótipo do aplicativo de estudos, permitindo que os dados cadastrados sejam reutilizados automaticamente para montar as pastas de cada matéria. As sugestões geradas pela IA foram usadas como ponto de partida e referência técnica, sendo revisadas, adaptadas e testadas pela equipe antes de integradas ao projeto final. O relatório completo, sem alterações em relação à versão original, está disponível no arquivo [`RELATORIO_IA.md`](./RELATORIO_IA.md).

## Repositório Git

https://github.com/404-Girls-Not-Found/Sprint-4-Web-Front

## Deploy na Vercel

**Pendente:** a equipe realizará o deploy na Vercel após o envio ao GitHub. Antes da entrega acadêmica, substitua este aviso pelo link público do deploy.

## Integrantes

| Nome | RM | Turma |
| --- | --- | --- |
| Beatriz de Araujo Périgo | RM569654 | 1ESPV |
| Beatriz Soares Salve | RM568791 | 1ESPH |
| Estela Mariano da Silva | RM569513 | 1ESPH |
| Gabriela Correa Pinon Labrada | RM569849 | 1ESPH |

Os mesmos nomes e RMs estão no arquivo obrigatório [`INTEGRANTES.TXT`](./INTEGRANTES.TXT), incluído no projeto e no arquivo ZIP de entrega.
