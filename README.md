<h1 align="center">
  <img alt="rockehelp" title="ClickPost" src="./resources/Capa.png" width="80%"/>
</h1>


## 💻 Projeto

Está aplicação foi desenvolvida na semana Ignite lab da Rocketseat.

O objetivo era de efetuar login, criar solicitações,listar solicitações, ver solicitações.<br>
O banco ultilizado foi o FirebaseStore que pode ser encontrado [aqui](https://firebase.google.com/products/storage?gclid=Cj0KCQjwz96WBhC8ARIsAATR251xY5sxkkCLH1I8fvo9CNDPWwytZ_FgmjjKUtB8PXRfjjTOJxkL3ZIaAtk4EALw_wcB&gclsrc=aw.ds).
Para a autenticação foi ultilizado o Firebase Authentication que pode ser encontrado [aqui](https://firebase.google.com/products/auth?gclid=Cj0KCQjwz96WBhC8ARIsAATR251_TBBpwm9FRfsZO4YKvdlMo0icvHQ5v9CbyDZ86IkfvYMPE-8r9uEaAgemEALw_wcB&gclsrc=aw.ds).
<br><br>


## 💬 Informações sobre as funcionalidades7

### Tela SingIn (Login) 🏠

- A tela SingIn disponibiliza a entrada na aplicação;
<br><br>

### Tela Home (Feed) 🏠

- A tela home exibe todos as solicitações que são buscados do banco firebase;
- Nesta tela tem a possibilidade exibir as informações do usuário que criou as solicitações;
<br><br>

### Tela Nova Solicitação 🆕

- A tela home onde sera exibido os inputs para criar a solicitação;
- Ao criar o post será exibido um alert confirmando a criação e o usuário será redirecionado para tela de Home;
<br><br>

### Tela de descrição ✅

- Sera exibido um card com as informações da solicitação feita;
- Possui a possibilidade de marcar como concluida a solicitação; 
<br><br>

### Otras informações
- As solicitações criadas são amazenados no FirebaseStorage.<br>


## 🎲 Executar aplicação
```bash
# Clone este repositório
$ git clone https://github.com/carlosrossy/ClickPost.git

# Entre na pasta do projeto.
$ cd ClickPost

# Instale as dependências
$ yarn

# Execute a aplicação
$ expo start

```

## 🚀 Tecnologias ultilizadas

- Este app foi criado com Bare Workflow, o qual possibilita criar aplicações **[React Native](https://reactnative.dev/)**, utilizando tanto as funcionalidades nativas do React Native como também as do **[Expo](https://docs.expo.io)**.
- Este app foi ultilizado a lib Native base para obtenção de recursos  **[Native Base](https://nativebase.io/)**.
- Este app ultilizou o firebase para autenticação e para guardar as solicitações feitas atraves do FirebaseStore  **[Firebase](https://firebase.google.com/docs)**.
