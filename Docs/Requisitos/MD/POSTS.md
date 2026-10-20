# UniVerse — Especificação de Requisitos Funcionais

**Versão:** 0.8  
**Módulo:** Gestão de Publicações e Comunidade  
**Atores:** Estudante e Empresa  
**Estado:** Atualizado — publicações com texto obrigatório e uma imagem opcional

---

## RF14 — Criação de Publicações

**Prioridade:** P0 — Essencial  
**Atores principais:** Estudante e Empresa

### Descrição

O sistema deve permitir que estudantes e empresas autenticados criem publicações destinadas à partilha de conhecimentos, experiências académicas, novidades institucionais e outros conteúdos relevantes para a comunidade UniVerse.

Cada publicação deve conter obrigatoriamente conteúdo textual e pode incluir, opcionalmente, uma única imagem.

A publicação deve estar associada automaticamente à conta do utilizador responsável pela sua criação.

### Informações da publicação

| Campo | Obrigatoriedade |
|---|---|
| Conteúdo textual | Obrigatório |
| Imagem | Opcional — máximo de uma |
| Autor | Automático |
| Data e hora de criação | Automático |
| Data e hora de atualização | Automático |

### Funcionalidades relativas às imagens

O sistema deve permitir ao utilizador:

- Selecionar uma imagem do dispositivo.
- Pré-visualizar a imagem antes da publicação.
- Remover a imagem selecionada antes de publicar.
- Criar publicações sem imagem.
- Criar publicações com texto e uma imagem.
- Consultar a imagem associada à publicação no feed.

### Pré-condições

- O utilizador deve estar autenticado.
- A conta deve estar ativa e autorizada a publicar.

### Critérios de aceitação

1. Um estudante consegue criar uma publicação com texto válido.
2. Uma empresa consegue criar uma publicação com texto válido.
3. O utilizador consegue criar uma publicação apenas com texto.
4. O utilizador consegue associar uma imagem ao conteúdo textual.
5. O sistema permite, no máximo, uma imagem por publicação.
6. O sistema rejeita publicações sem conteúdo textual válido, mesmo quando existe uma imagem.
7. O sistema rejeita ficheiros de imagem com formatos não permitidos.
8. O sistema valida o tamanho máximo permitido para as imagens.
9. O utilizador consegue pré-visualizar e remover a imagem antes de publicar.
10. A imagem é armazenada e associada à publicação correspondente.
11. O sistema associa automaticamente a publicação à conta autenticada.
12. O sistema regista a data e hora de criação.
13. A publicação é apresentada no feed com o texto e a imagem, quando existente.
14. Utilizadores não autenticados não conseguem criar publicações.
15. Se o envio da imagem falhar, o sistema informa o utilizador e não apresenta a publicação como concluída.

---

## RF15 — Consulta do Feed de Publicações

**Prioridade:** P0 — Essencial  
**Atores:** Estudante e Empresa

### Descrição

O sistema deve disponibilizar um feed com as publicações realizadas pelos membros da comunidade UniVerse.

As publicações devem ser apresentadas por ordem cronológica decrescente, das mais recentes para as mais antigas.

### Informações apresentadas

- Nome de apresentação do autor.
- Imagem de perfil, quando disponível.
- Tipo de perfil do autor.
- Conteúdo textual da publicação.
- Imagem associada, quando existente.
- Data de publicação.
- Interações disponíveis, caso sejam implementadas.

### Critérios de aceitação

1. Os utilizadores autenticados conseguem consultar o feed.
2. O feed apresenta publicações de estudantes e empresas.
3. As publicações são ordenadas cronologicamente.
4. Cada publicação identifica corretamente o seu autor.
5. O sistema apresenta a imagem associada quando existente.
6. Publicações sem imagem são apresentadas normalmente.
7. O sistema apresenta uma mensagem adequada quando não existem publicações.
8. Publicações eliminadas deixam de aparecer no feed.

---

## RF16 — Edição e Eliminação de Publicações

**Prioridade:** P0 — Essencial  
**Atores:** Estudante e Empresa

### Descrição

O sistema deve permitir que os autores editem e eliminem as suas próprias publicações.

A edição deve permitir modificar o conteúdo textual e gerir a imagem associada.

### Critérios de aceitação

1. O autor consegue editar o texto da publicação.
2. O autor consegue adicionar uma imagem a uma publicação que ainda não possui imagem.
3. O autor consegue substituir a imagem existente por outra válida.
4. O autor consegue remover uma imagem, mantendo o texto.
5. O sistema impede que uma publicação fique sem conteúdo textual válido.
6. As alterações são guardadas de forma persistente.
7. O sistema regista a data e hora da atualização sem modificar a data de criação.
8. O autor consegue eliminar uma publicação mediante confirmação.
9. O sistema trata adequadamente a imagem associada quando a publicação é eliminada.
10. Outros utilizadores não conseguem editar ou eliminar publicações de terceiros.
11. As operações não autorizadas são rejeitadas pelo backend.

---

## RF17 — Gestão de Comentários

**Prioridade:** P1 — Desejável  
**Atores:** Estudante e Empresa

### Descrição

O sistema deve permitir que utilizadores autenticados adicionem comentários textuais às publicações, promovendo a troca de conhecimentos e a interação entre os membros da comunidade.

### Critérios de aceitação

1. O utilizador consegue comentar uma publicação existente.
2. O sistema rejeita comentários vazios.
3. Cada comentário é associado à publicação e ao respetivo autor.
4. Os comentários são armazenados de forma persistente.
5. Os utilizadores conseguem consultar os comentários.
6. O autor consegue eliminar os seus comentários.
7. Um utilizador não consegue eliminar comentários de terceiros.
8. Não é possível comentar publicações inexistentes ou eliminadas.

Nesta versão, não serão implementados comentários com imagens, respostas encadeadas ou menções automáticas.

---

## RF18 — Gestão de Gostos em Publicações

**Prioridade:** P1 — Desejável  
**Atores:** Estudante e Empresa

### Descrição

O sistema deve permitir que utilizadores autenticados manifestem apreciação por uma publicação através da funcionalidade de gosto (*like*).

### Critérios de aceitação

1. O utilizador consegue adicionar um gosto a uma publicação.
2. O sistema atualiza a contagem de gostos.
3. O utilizador consegue remover um gosto anteriormente atribuído.
4. Cada utilizador pode ter apenas um gosto ativo por publicação.
5. O estado do gosto permanece guardado entre sessões.
6. A quantidade de gostos é apresentada corretamente.
7. Utilizadores não autenticados não conseguem reagir.
8. Não é possível reagir a publicações inexistentes ou eliminadas.

---

# 2. Regras de Negócio

**RN31 — Autoria das publicações**

Cada publicação deve estar associada a uma única conta de utilizador responsável pela sua criação.

**RN32 — Permissão para publicar**

Estudantes e empresas com contas autenticadas e autorizadas podem criar publicações.

**RN33 — Obrigatoriedade do conteúdo textual**

Toda a publicação deve possuir conteúdo textual válido. A presença de uma imagem não substitui esta obrigatoriedade.

**RN34 — Identificação automática do autor**

O autor deve ser identificado através da identidade autenticada, sem permitir que o cliente atribua arbitrariamente a autoria a outra conta.

**RN35 — Titularidade das publicações**

Apenas o autor pode editar ou eliminar a respetiva publicação.

**RN36 — Ordenação do feed**

As publicações devem ser apresentadas por ordem cronológica decrescente, utilizando um critério secundário estável quando as datas de criação forem iguais.

**RN37 — Persistência e atualização**

As publicações e respetivas alterações devem ser persistidas, mantendo a data original de criação.

**RN38 — Associação dos comentários**

Cada comentário deve estar associado a uma publicação existente e a uma conta responsável.

**RN39 — Gestão dos comentários**

Apenas o autor de um comentário pode eliminá-lo através das funcionalidades previstas para o MVP.

**RN40 — Unicidade dos gostos**

Cada utilizador pode ter, no máximo, um gosto associado a cada publicação.

**RN41 — Remoção dos gostos**

O utilizador pode remover um gosto anteriormente atribuído.

**RN42 — Eliminação de publicações**

A eliminação de uma publicação deve tratar os comentários, gostos e recursos associados, garantindo a integridade dos dados.

**RN43 — Independência entre publicações e projetos**

Uma publicação do feed constitui uma entidade independente dos projetos académicos do portfólio.

**RN44 — Segurança do conteúdo**

O sistema deve apresentar o conteúdo introduzido pelos utilizadores sem permitir a execução de scripts ou código potencialmente malicioso.

**RN45 — Limite de imagens por publicação**

Cada publicação pode possuir zero ou uma imagem associada.

**RN46 — Validação de imagens**

O sistema deve aceitar apenas formatos autorizados, como JPEG, PNG e WebP, respeitando o limite de tamanho estabelecido na configuração da aplicação. A validação deve ocorrer também no backend.

**RN47 — Associação e titularidade da imagem**

A imagem deve estar associada à publicação correspondente e só pode ser alterada ou removida através de uma operação autorizada do respetivo autor.

**RN48 — Armazenamento das imagens**

Os ficheiros devem ser guardados num serviço de armazenamento apropriado. A base de dados deve manter apenas as referências necessárias para identificar e recuperar os recursos.

**RN49 — Substituição e eliminação de imagens**

A substituição ou remoção de imagens deve atualizar a associação correspondente e prever a limpeza dos ficheiros que deixarem de ser utilizados, evitando recursos órfãos.

**RN50 — Falhas no processamento de imagens**

O sistema deve tratar falhas de carregamento ou armazenamento sem apresentar ao utilizador operações incompletas como bem-sucedidas.

---

# 3. Casos de Teste Propostos

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT14.1 | Criar publicação com texto válido | Publicação criada |
| CT14.2 | Criar publicação com texto e imagem | Publicação e imagem guardadas |
| CT14.3 | Criar publicação sem imagem | Operação permitida |
| CT14.4 | Criar publicação sem texto, mas com imagem | Operação rejeitada |
| CT14.5 | Enviar imagem com formato inválido | Operação rejeitada |
| CT14.6 | Enviar imagem acima do limite permitido | Operação rejeitada |
| CT14.7 | Tentar adicionar duas imagens | Limite de uma imagem aplicado |
| CT14.8 | Criar publicação sem autenticação | Acesso negado |
| CT15.1 | Consultar publicação com imagem | Texto e imagem apresentados |
| CT15.2 | Consultar publicação sem imagem | Texto apresentado normalmente |
| CT15.3 | Consultar feed vazio | Mensagem informativa |
| CT16.1 | Editar texto de publicação própria | Alteração guardada |
| CT16.2 | Adicionar imagem a publicação existente | Imagem associada |
| CT16.3 | Substituir imagem existente | Nova imagem apresentada |
| CT16.4 | Remover imagem de publicação | Imagem removida e texto mantido |
| CT16.5 | Eliminar publicação com imagem | Publicação removida e recurso tratado |
| CT16.6 | Tentar editar publicação de terceiros | Acesso negado |
| CT17.1 | Adicionar comentário válido | Comentário criado |
| CT17.2 | Eliminar comentário de terceiros | Acesso negado |
| CT18.1 | Adicionar gosto | Gosto registado |
| CT18.2 | Repetir gosto | Duplicação impedida |
| CT18.3 | Remover gosto | Gosto removido |

Os testes de comentários e gostos dependem da implementação dos requisitos desejáveis RF17 e RF18.

---

**Resumo do módulo:** 5 requisitos funcionais — 3 essenciais (P0) e 2 desejáveis (P1).

**Decisão aprovada:** Publicações com texto obrigatório e, no máximo, uma imagem opcional. A criação, consulta, edição e eliminação devem contemplar esta funcionalidade.