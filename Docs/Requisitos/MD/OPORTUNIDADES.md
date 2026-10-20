# UniVerse — Especificação de Requisitos Funcionais

**Versão:** 0.9  
**Módulo:** Gestão de Oportunidades Académicas e Profissionais  
**Atores:** Estudante e Empresa  
**Estado:** Proposta para validação

---

## RF19 — Publicação de Oportunidades

**Prioridade:** P0 — Essencial  
**Ator principal:** Empresa

### Descrição

O sistema deve permitir que utilizadores autenticados do tipo Empresa publiquem oportunidades académicas e profissionais destinadas aos estudantes da plataforma UniVerse.

As oportunidades podem incluir estágios, empregos, bolsas de estudo, concursos, programas de formação e desafios profissionais.

Cada oportunidade deve estar associada à empresa responsável pela sua publicação e disponibilizar pelo menos um meio externo de candidatura.

### Informações da oportunidade

| Campo | Obrigatoriedade |
|---|---|
| Título | Obrigatório |
| Descrição | Obrigatório |
| Tipo de oportunidade | Obrigatório |
| Empresa responsável | Automático |
| Email de candidatura | Opcional* |
| URL de candidatura | Opcional* |
| Localização | Opcional |
| Modalidade (presencial, remoto ou híbrido) | Opcional |
| Data-limite de candidatura | Opcional |
| Data de publicação | Automático |

*Pelo menos um dos campos de candidatura (email ou URL) deve ser preenchido.*

### Pré-condições

- O utilizador deve estar autenticado.
- A conta deve pertencer ao tipo Empresa.
- A empresa deve possuir um perfil empresarial válido.

### Critérios de aceitação

1. Uma empresa autenticada consegue criar uma oportunidade com os campos obrigatórios.
2. O sistema permite selecionar o tipo de oportunidade.
3. O sistema rejeita oportunidades sem título ou descrição válidos.
4. O sistema rejeita oportunidades sem email e sem URL de candidatura.
5. O sistema valida os formatos dos emails e URLs introduzidos.
6. A oportunidade é automaticamente associada ao perfil empresarial responsável.
7. A data de publicação é registada automaticamente.
8. A oportunidade é armazenada de forma persistente.
9. A oportunidade publicada fica disponível para consulta na plataforma.
10. Utilizadores do tipo Estudante não conseguem publicar oportunidades através deste módulo.

---

## RF20 — Edição e Eliminação de Oportunidades

**Prioridade:** P0 — Essencial  
**Ator principal:** Empresa

### Descrição

O sistema deve permitir que as empresas editem e eliminem exclusivamente as oportunidades publicadas pelas suas próprias contas.

A edição deve permitir atualizar as informações da oportunidade, incluindo os meios externos de candidatura.

### Pré-condições

- A empresa deve estar autenticada.
- A oportunidade deve existir.
- A oportunidade deve pertencer ao perfil empresarial autenticado.

### Critérios de aceitação

1. A empresa consegue consultar as oportunidades que publicou.
2. A empresa consegue alterar o título, a descrição e o tipo de oportunidade.
3. A empresa consegue atualizar o email ou a URL de candidatura.
4. O sistema valida os dados antes de guardar as alterações.
5. As alterações são armazenadas de forma persistente.
6. A empresa consegue eliminar uma oportunidade própria.
7. O sistema solicita confirmação antes da eliminação pela interface.
8. Uma oportunidade eliminada deixa de estar disponível para consulta normal.
9. Uma empresa não consegue editar ou eliminar oportunidades pertencentes a outra empresa.
10. O backend rejeita tentativas de alteração não autorizadas.

---

## RF21 — Consulta de Oportunidades

**Prioridade:** P0 — Essencial  
**Ator principal:** Estudante

### Descrição

O sistema deve permitir que estudantes autenticados consultem as oportunidades publicadas pelas empresas registadas na plataforma.

As oportunidades devem ser apresentadas através de uma listagem e de páginas individuais com informações detalhadas.

### Informações apresentadas

Cada oportunidade deverá apresentar:

- Título da oportunidade.
- Nome da empresa responsável.
- Tipo de oportunidade.
- Descrição.
- Localização, quando disponível.
- Modalidade, quando disponível.
- Data-limite de candidatura, quando disponível.
- Meio de candidatura externa.

### Pré-condições

- O estudante deve estar autenticado.
- A oportunidade deve existir e estar disponível para consulta.

### Critérios de aceitação

1. O estudante consegue consultar a lista de oportunidades disponíveis.
2. O sistema apresenta as oportunidades por ordem cronológica decrescente.
3. Cada oportunidade identifica a empresa responsável.
4. O estudante consegue abrir a página de detalhes.
5. O sistema apresenta corretamente as informações guardadas.
6. Uma oportunidade sem localização ou data-limite continua a poder ser consultada.
7. O sistema apresenta uma mensagem apropriada quando não existem oportunidades.
8. O sistema apresenta uma mensagem apropriada quando uma oportunidade solicitada não existe ou foi eliminada.

---

## RF22 — Pesquisa e Filtragem de Oportunidades

**Prioridade:** P1 — Desejável  
**Ator principal:** Estudante

### Descrição

O sistema deve permitir que os estudantes pesquisem e filtrem as oportunidades disponíveis, facilitando a identificação de oportunidades relevantes para os seus interesses.

### Funcionalidades

- Pesquisa por título.
- Filtragem por tipo de oportunidade.
- Combinação de pesquisa textual e filtro por tipo.
- Limpeza dos filtros aplicados.

### Critérios de aceitação

1. O estudante consegue pesquisar oportunidades pelo título.
2. O sistema apresenta oportunidades que correspondam ao termo pesquisado.
3. O estudante consegue filtrar oportunidades por tipo.
4. A pesquisa e a filtragem podem ser utilizadas em conjunto.
5. O estudante consegue remover os filtros e regressar à listagem geral.
6. Quando não existem resultados, o sistema apresenta uma mensagem informativa.

---

## RF23 — Acesso à Candidatura Externa

**Prioridade:** P0 — Essencial  
**Ator principal:** Estudante

### Descrição

O sistema deve permitir que estudantes acedam ao meio de candidatura externo indicado pela empresa responsável pela oportunidade.

A candidatura deve ocorrer fora da plataforma UniVerse, através de uma ligação URL ou de um endereço de email disponibilizado pela empresa.

O UniVerse não será responsável pela receção, armazenamento ou acompanhamento das candidaturas nesta versão.

### Formas de candidatura

**Candidatura por URL**

Quando a empresa disponibilizar uma ligação externa, o sistema deve apresentar uma opção que permita ao estudante abrir o endereço indicado.

**Candidatura por email**

Quando a empresa disponibilizar um endereço de email, o sistema deve apresentar uma opção que permita iniciar a composição de uma mensagem no cliente de correio eletrónico do estudante.

**Múltiplos meios**

Quando ambos os meios estiverem disponíveis, o sistema poderá apresentar as duas opções separadamente.

### Pré-condições

- O estudante deve estar autenticado.
- A oportunidade deve existir.
- A oportunidade deve possuir pelo menos um meio externo de candidatura.

### Critérios de aceitação

1. O estudante consegue identificar o meio de candidatura disponibilizado.
2. O sistema permite abrir uma URL externa válida.
3. O sistema permite iniciar a composição de um email através de uma ligação `mailto:`.
4. Quando ambos os meios estão disponíveis, o estudante consegue escolher entre eles.
5. O sistema não solicita o envio de currículos ou documentos de candidatura para a plataforma.
6. O sistema não regista automaticamente uma candidatura como efetuada.
7. O sistema não disponibiliza acompanhamento do estado das candidaturas externas.
8. O estudante é informado de que a candidatura ocorrerá fora do UniVerse.

---

# 2. Regras de Negócio

**RN01 — Permissão para publicação**

Apenas utilizadores autenticados com contas do tipo Empresa podem publicar oportunidades.

**RN02 — Associação empresarial**

Cada oportunidade deve estar associada a um perfil empresarial existente e válido.

**RN03 — Titularidade das oportunidades**

Apenas a empresa responsável pela publicação pode editar ou eliminar a respetiva oportunidade.

**RN04 — Dados obrigatórios**

Uma oportunidade deve possuir título, descrição e tipo de oportunidade válidos.

**RN05 — Meio obrigatório de candidatura**

Toda a oportunidade deve possuir pelo menos um meio externo de candidatura: email ou URL.

**RN06 — Validação dos meios de candidatura**

Os endereços de email devem apresentar formato válido, e as URLs de candidatura devem utilizar protocolos permitidos, nomeadamente HTTPS.

**RN07 — Candidaturas externas**

As candidaturas devem ser realizadas fora da plataforma UniVerse.

**RN08 — Ausência de gestão de candidaturas**

O sistema não deve gerir currículos, registos de candidaturas, estados de seleção ou processos de recrutamento nesta versão.

**RN09 — Multiplicidade das oportunidades**

Uma empresa pode publicar várias oportunidades.

**RN10 — Integridade dos dados**

Os dados submetidos devem ser validados antes do armazenamento, tanto no frontend como no backend.

**RN11 — Consulta das oportunidades**

As oportunidades publicadas devem estar disponíveis para consulta pelos estudantes autenticados.

**RN12 — Eliminação de oportunidades**

Uma oportunidade eliminada deve deixar de aparecer nas listagens e nas páginas de consulta normal.

**RN13 — Segurança das operações**

As operações de criação, atualização e eliminação devem estar protegidas por autenticação e autorização no backend.

**RN14 — Datas de candidatura**

Quando existir uma data-limite, esta deve representar uma data válida. O comportamento das oportunidades expiradas será definido antes da implementação, sem assumir automaticamente um sistema de encerramento de candidaturas.

**RN15 — Separação entre oportunidades e publicações**

As oportunidades académicas e profissionais devem ser geridas independentemente das publicações do feed, ainda que ambas estejam associadas a contas empresariais.

---

# 3. Casos de Teste Propostos

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT19.1 | Empresa cria oportunidade válida | Oportunidade criada |
| CT19.2 | Criar oportunidade sem título | Operação rejeitada |
| CT19.3 | Criar oportunidade sem email e sem URL | Operação rejeitada |
| CT19.4 | Criar oportunidade apenas com email válido | Operação permitida |
| CT19.5 | Criar oportunidade apenas com URL válida | Operação permitida |
| CT19.6 | Estudante tenta publicar oportunidade | Acesso negado |
| CT20.1 | Empresa edita oportunidade própria | Alterações guardadas |
| CT20.2 | Empresa elimina oportunidade própria | Oportunidade removida |
| CT20.3 | Empresa tenta editar oportunidade de terceiros | Acesso negado |
| CT21.1 | Consultar lista de oportunidades | Lista apresentada |
| CT21.2 | Consultar detalhes de oportunidade | Informações apresentadas |
| CT21.3 | Consultar oportunidade inexistente | Mensagem apropriada |
| CT22.1 | Pesquisar oportunidade pelo título | Resultados correspondentes |
| CT22.2 | Filtrar por tipo de oportunidade | Resultados filtrados |
| CT23.1 | Abrir candidatura por URL | Endereço externo aberto |
| CT23.2 | Iniciar candidatura por email | Cliente de email acionado |
| CT23.3 | Oportunidade com URL e email | Ambas as opções disponíveis |
| CT23.4 | Aceder ao meio externo | Nenhuma candidatura interna criada |

Os testes CT22.1 e CT22.2 dependem da implementação do requisito desejável RF22.

---

**Resumo:** 5 requisitos funcionais — 4 essenciais (P0) e 1 desejável (P1).

**Decisão aprovada:** Candidaturas realizadas externamente, por URL ou email, sem gestão interna de candidaturas.