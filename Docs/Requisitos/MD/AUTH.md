# UniVerse — Especificação de Requisitos Funcionais

**Versão:** 1.0 — Proposta para validação  
**Módulo:** Autenticação e Gestão de Contas  
**Atores:** Visitante, Estudante e Empresa

---

## RF01 — Registo de Utilizadores

**Prioridade:** P0 — Essencial  
**Ator principal:** Visitante

### Descrição

O sistema deve permitir que novos utilizadores criem uma conta na plataforma UniVerse, selecionando o tipo de conta correspondente ao seu perfil: Estudante ou Empresa.

O registo deve exigir informações básicas de identificação e credenciais de acesso, que serão utilizadas posteriormente na autenticação.

Após o registo bem-sucedido, a conta deve ficar associada ao tipo de utilizador selecionado, permitindo o acesso às funcionalidades correspondentes.

### Informações do registo

| Campo | Obrigatoriedade |
|---|---|
| Nome de apresentação ou identificação | Obrigatório |
| Endereço de email | Obrigatório |
| Palavra-passe | Obrigatório |
| Confirmação da palavra-passe | Obrigatório na interface |
| Tipo de conta (Estudante ou Empresa) | Obrigatório |

A confirmação da palavra-passe destina-se à validação do formulário e não deve ser armazenada.

### Pré-condições

- O visitante não precisa de estar autenticado.
- O endereço de email ainda não deve estar associado a outra conta.

### Critérios de aceitação

1. O visitante consegue selecionar o tipo de conta Estudante ou Empresa.
2. O sistema apresenta os campos necessários ao registo.
3. O sistema valida o preenchimento dos campos obrigatórios.
4. O sistema valida o formato do endereço de email.
5. O sistema impede o registo de contas com emails já utilizados.
6. O sistema verifica se a palavra-passe e a confirmação correspondem.
7. O sistema aplica a política de segurança das palavras-passe.
8. As palavras-passe são armazenadas utilizando mecanismos seguros de hash.
9. A conta criada fica associada ao tipo de utilizador selecionado.
10. O sistema apresenta uma confirmação após o registo bem-sucedido.
11. O utilizador pode prosseguir para o preenchimento do respetivo perfil académico ou empresarial.
12. O sistema rejeita tipos de conta não autorizados.

---

## RF02 — Autenticação de Utilizadores

**Prioridade:** P0 — Essencial  
**Atores principais:** Estudante e Empresa

### Descrição

O sistema deve permitir que utilizadores registados se autentiquem através de um endereço de email e uma palavra-passe válidos.

Após uma autenticação bem-sucedida, o sistema deve estabelecer uma sessão autenticada e permitir o acesso às funcionalidades autorizadas para o tipo de conta correspondente.

### Pré-condições

- O utilizador deve possuir uma conta registada e ativa.
- O utilizador deve fornecer as credenciais necessárias.

### Critérios de aceitação

1. O utilizador consegue autenticar-se com credenciais válidas.
2. O sistema rejeita credenciais inválidas.
3. O sistema não revela se o email ou a palavra-passe foi o elemento incorreto.
4. O sistema verifica o estado da conta antes de permitir a autenticação.
5. Após o login, é estabelecida uma sessão autenticada.
6. O utilizador consegue aceder às funcionalidades permitidas pelo seu tipo de conta.
7. O sistema mantém o estado de autenticação durante a validade da sessão.
8. Sessões expiradas não permitem aceder a recursos protegidos.
9. O sistema apresenta mensagens apropriadas quando a autenticação falha.
10. O sistema aplica mecanismos de proteção contra tentativas excessivas de autenticação.

---

## RF03 — Encerramento de Sessão

**Prioridade:** P0 — Essencial  
**Atores principais:** Estudante e Empresa

### Descrição

O sistema deve permitir que os utilizadores autenticados terminem voluntariamente a sua sessão na plataforma UniVerse.

Após o encerramento, o sistema deve invalidar os mecanismos de autenticação necessários e impedir que a sessão terminada continue a ser utilizada para aceder a recursos protegidos.

### Pré-condições

- O utilizador deve possuir uma sessão autenticada.

### Critérios de aceitação

1. O utilizador consegue encontrar a opção de terminar sessão.
2. O sistema permite encerrar a sessão ativa.
3. O encerramento invalida a sessão ou as credenciais renováveis associadas, conforme o mecanismo adotado.
4. O sistema remove ou invalida os dados de autenticação mantidos no cliente.
5. Após o logout, o utilizador é encaminhado para uma página pública ou de autenticação.
6. Recursos protegidos deixam de estar acessíveis através da sessão encerrada.
7. O utilizador precisa de autenticar-se novamente para recuperar o acesso.
8. A utilização dos botões de navegação do navegador não deve permitir executar operações protegidas após o logout.

---

## RF04 — Controlo de Acesso e Permissões

**Prioridade:** P0 — Essencial  
**Atores principais:** Estudante e Empresa

### Descrição

O sistema deve controlar o acesso às funcionalidades da plataforma de acordo com o tipo de conta autenticada e a titularidade dos recursos.

Nesta versão, serão considerados dois tipos de conta: Estudante e Empresa.

O sistema deve impedir que os utilizadores executem operações para as quais não possuem autorização.

### Permissões por tipo de conta

| Funcionalidade | Estudante | Empresa |
|---|---|---|
| Consultar perfis | Sim | Sim |
| Gerir o próprio perfil | Sim | Sim |
| Criar projetos académicos | Sim | Não |
| Consultar projetos | Sim | Sim |
| Criar publicações | Sim | Sim |
| Consultar publicações | Sim | Sim |
| Publicar oportunidades | Não | Sim |
| Consultar oportunidades | Sim | Sim |
| Gerir oportunidades próprias | Não | Sim |
| Utilizar chat privado | Condicional | Condicional |

### Critérios de aceitação

1. O sistema identifica o tipo de conta autenticada.
2. Apenas estudantes conseguem criar projetos académicos.
3. Apenas empresas conseguem publicar oportunidades.
4. Estudantes e empresas conseguem criar publicações.
5. Um utilizador não consegue modificar perfis pertencentes a terceiros.
6. Um estudante não consegue editar ou eliminar projetos pertencentes a outros estudantes.
7. Um utilizador não consegue editar ou eliminar publicações de terceiros.
8. Uma empresa não consegue gerir oportunidades publicadas por outra empresa.
9. As permissões são verificadas no backend.
10. O sistema rejeita requisições não autorizadas, mesmo quando realizadas diretamente à API.
11. O utilizador não consegue modificar arbitrariamente o tipo de conta para obter permissões adicionais.
12. Os dados protegidos não são disponibilizados a utilizadores sem autorização.

---

## RF05 — Recuperação de Palavra-passe

**Prioridade:** P1 — Desejável  
**Atores principais:** Estudante e Empresa

### Descrição

O sistema deve permitir que utilizadores registados recuperem o acesso às suas contas quando não se recordam da palavra-passe.

A recuperação deve ser realizada através de um mecanismo seguro de redefinição, utilizando o endereço de email associado à conta.

### Funcionalidades

O sistema deve permitir:

- Solicitar a recuperação através do email.
- Receber uma ligação temporária de redefinição.
- Definir uma nova palavra-passe.
- Confirmar a nova palavra-passe.
- Voltar a autenticar-se com as novas credenciais.

### Critérios de aceitação

1. O utilizador consegue solicitar a recuperação através de um endereço de email.
2. O sistema apresenta uma resposta genérica que não revela a existência ou inexistência da conta.
3. Quando aplicável, o sistema envia uma ligação temporária para o endereço registado.
4. A ligação de recuperação possui um prazo de validade.
5. O mecanismo de recuperação só pode ser utilizado uma vez.
6. O sistema rejeita ligações inválidas, expiradas ou já utilizadas.
7. O utilizador consegue definir uma nova palavra-passe válida.
8. A nova palavra-passe é armazenada através de um mecanismo seguro de hash.
9. Após a redefinição, o mecanismo de recuperação utilizado é invalidado.
10. O utilizador consegue autenticar-se com a nova palavra-passe.
11. Os mecanismos de autenticação anteriormente emitidos devem ser revogados de acordo com a política de sessões definida.

---

# 2. Regras de Negócio

## RN-AUTH-01 — Unicidade do endereço de email

Cada endereço de email normalizado deve estar associado a uma única conta na plataforma.

O mesmo email não pode ser utilizado para criar simultaneamente uma conta de Estudante e outra de Empresa.

## RN-AUTH-02 — Tipos de conta permitidos

O registo público deve permitir exclusivamente os tipos Estudante e Empresa.

Tipos de conta adicionais não podem ser atribuídos diretamente pelo utilizador.

## RN-AUTH-03 — Associação do tipo de conta

O tipo de conta escolhido no registo determina o perfil correspondente e as funcionalidades autorizadas.

## RN-AUTH-04 — Política de palavras-passe

As palavras-passe devem respeitar uma política mínima de segurança, incluindo um comprimento mínimo a definir antes da implementação, proposto inicialmente em 12 caracteres.

Não devem ser armazenadas em texto simples.

## RN-AUTH-05 — Armazenamento seguro de credenciais

As palavras-passe devem ser armazenadas utilizando algoritmos de hash adequados, como Argon2id ou bcrypt, com parâmetros de segurança apropriados.

## RN-AUTH-06 — Autenticação obrigatória

As operações protegidas do sistema só podem ser executadas por utilizadores autenticados e autorizados.

## RN-AUTH-07 — Titularidade dos recursos

A autenticação de um utilizador não concede autorização para modificar recursos pertencentes a outras contas.

## RN-AUTH-08 — Integridade da identidade autenticada

A identidade e as permissões utilizadas nas operações protegidas devem ser determinadas pelo backend a partir das credenciais autenticadas.

## RN-AUTH-09 — Validade das sessões

As sessões devem possuir mecanismos de expiração e renovação controlada, conforme a arquitetura de autenticação escolhida.

## RN-AUTH-10 — Proteção contra tentativas excessivas

O sistema deve limitar tentativas repetidas de autenticação e de recuperação de palavra-passe, reduzindo a possibilidade de utilização abusiva.

## RN-AUTH-11 — Recuperação segura

Os mecanismos de recuperação de palavra-passe devem possuir validade limitada, utilização única e proteção contra utilização indevida.

## RN-AUTH-12 — Separação entre conta e perfil

A conta de autenticação deve ser tratada separadamente das informações específicas do perfil académico ou empresarial.

A criação da conta pode ser seguida de um processo de preenchimento do respetivo perfil.

## RN-AUTH-13 — Controlo do estado da conta

Apenas contas ativas e autorizadas podem estabelecer sessões e realizar operações protegidas.

## RN-AUTH-14 — Alteração do tipo de conta

O utilizador não pode alterar livremente o tipo da sua conta através do formulário de edição de perfil.

A eventual alteração do tipo de conta não faz parte do MVP.

---

# 3. Casos de Teste Propostos

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT01.1 | Registar estudante com dados válidos | Conta criada |
| CT01.2 | Registar empresa com dados válidos | Conta criada |
| CT01.3 | Registar email duplicado | Operação rejeitada |
| CT01.4 | Registar email inválido | Operação rejeitada |
| CT01.5 | Confirmar palavra-passe diferente | Operação rejeitada |
| CT01.6 | Selecionar tipo de conta inválido | Operação rejeitada |
| CT02.1 | Autenticar com credenciais válidas | Sessão estabelecida |
| CT02.2 | Autenticar com palavra-passe incorreta | Acesso negado |
| CT02.3 | Autenticar com conta inexistente | Acesso negado |
| CT02.4 | Aceder a recurso com sessão expirada | Acesso negado |
| CT02.5 | Exceder limite de tentativas de login | Limitação aplicada |
| CT03.1 | Terminar sessão autenticada | Sessão encerrada |
| CT03.2 | Aceder a recurso protegido após logout | Acesso negado |
| CT04.1 | Estudante tenta criar oportunidade | Acesso negado |
| CT04.2 | Empresa tenta criar projeto académico | Acesso negado |
| CT04.3 | Utilizador tenta editar perfil de terceiros | Acesso negado |
| CT04.4 | Empresa tenta editar oportunidade de outra empresa | Acesso negado |
| CT04.5 | Manipular o tipo de conta na requisição | Permissões mantidas |
| CT05.1 | Solicitar recuperação de palavra-passe | Solicitação processada |
| CT05.2 | Utilizar ligação de recuperação expirada | Operação rejeitada |
| CT05.3 | Redefinir palavra-passe validamente | Palavra-passe atualizada |
| CT05.4 | Reutilizar ligação de recuperação | Operação rejeitada |

Os casos CT05 dependem da implementação do requisito desejável RF05.

---

# 4. Estado do Módulo

**Total:** 5 requisitos funcionais.

**Essenciais (P0):** RF01, RF02, RF03 e RF04.

**Desejável (P1):** RF05.

**Estado:** Especificação pronta para revisão técnica e validação.

**Decisões pendentes para a arquitetura:**

- Estratégia de gestão de sessões e tokens.
- Política final de validade e renovação de sessões.
- Serviço responsável pelo envio de emails de recuperação.
- Necessidade de verificação de email ou identidade empresarial.
- Parâmetros definitivos da política de palavras-passe.