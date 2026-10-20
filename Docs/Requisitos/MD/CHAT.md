# UniVerse — Especificação de Requisitos Funcionais

**Versão:** 1.0 — Proposta para validação  
**Módulo:** Chat Privado e Mensagens  
**Atores:** Estudante e Empresa  
**Prioridade do módulo:** P1 — Desejável (condicional)

---

## RF24 — Criação e Gestão de Conversas Privadas

**Prioridade:** P1 — Desejável  
**Atores principais:** Estudante e Empresa

### Descrição

O sistema deve permitir que utilizadores autenticados iniciem conversas privadas com outros utilizadores registados na plataforma UniVerse.

Cada conversa deve envolver exclusivamente dois participantes, podendo estes ser estudantes ou empresas.

O sistema deve disponibilizar uma área de mensagens na qual o utilizador possa consultar as suas conversas existentes e aceder ao respetivo conteúdo.

### Funcionalidades

O sistema deve permitir:

- Iniciar uma conversa privada através do perfil de outro utilizador.
- Consultar uma lista das conversas existentes.
- Aceder a uma conversa previamente iniciada.
- Identificar o outro participante através do nome e da imagem de perfil, quando disponível.
- Apresentar as conversas por ordem da última atividade.
- Retomar uma conversa existente sem criar outra conversa duplicada entre os mesmos participantes.

### Pré-condições

- O utilizador deve estar autenticado.
- A conta do destinatário deve existir e estar ativa.
- Os dois participantes devem possuir contas distintas.

### Critérios de aceitação

1. Um estudante consegue iniciar uma conversa com outro estudante.
2. Um estudante consegue iniciar uma conversa com uma empresa.
3. Uma empresa consegue iniciar uma conversa com um estudante.
4. Uma empresa consegue iniciar uma conversa com outra empresa.
5. O sistema impede que um utilizador inicie uma conversa consigo próprio.
6. Quando já existe uma conversa entre os mesmos participantes, o sistema recupera essa conversa em vez de criar uma duplicada.
7. Cada utilizador consegue consultar a lista das conversas em que participa.
8. As conversas são ordenadas pela data da última mensagem.
9. O sistema não apresenta conversas pertencentes a terceiros.
10. Uma conta não autenticada não consegue iniciar nem consultar conversas.

---

## RF25 — Envio e Receção de Mensagens em Tempo Real

**Prioridade:** P1 — Desejável  
**Atores principais:** Estudante e Empresa

### Descrição

O sistema deve permitir que os participantes de uma conversa privada enviem e recebam mensagens de texto em tempo real.

As mensagens enviadas devem ser armazenadas de forma persistente e disponibilizadas ao destinatário, sem necessidade de atualizar manualmente a página quando este estiver ligado à aplicação.

### Informações da mensagem

| Campo | Obrigatoriedade |
|---|---|
| Conteúdo textual | Obrigatório |
| Remetente | Automático |
| Conversa associada | Automático |
| Data e hora de envio | Automático |
| Identificador da mensagem | Automático |

### Funcionalidades

O sistema deve permitir:

- Escrever e enviar mensagens de texto.
- Receber automaticamente novas mensagens.
- Apresentar mensagens enviadas e recebidas com identificação visual distinta.
- Apresentar a data e hora de envio.
- Atualizar a conversa quando chega uma nova mensagem.
- Informar o utilizador quando ocorre uma falha no envio.

### Pré-condições

- O utilizador deve estar autenticado.
- A conversa deve existir.
- O utilizador deve ser participante autorizado da conversa.

### Critérios de aceitação

1. O utilizador consegue enviar mensagens de texto válidas.
2. O sistema rejeita mensagens vazias ou compostas exclusivamente por espaços.
3. Cada mensagem é associada automaticamente ao remetente autenticado.
4. Cada mensagem é armazenada na conversa correspondente.
5. O destinatário recebe novas mensagens automaticamente enquanto estiver ligado à aplicação.
6. As mensagens são apresentadas por ordem cronológica.
7. O sistema apresenta a data e hora de envio.
8. O utilizador não consegue enviar mensagens para conversas das quais não participa.
9. O sistema rejeita tentativas de falsificação da identidade do remetente.
10. Uma falha no envio não deve ser apresentada como envio bem-sucedido.
11. O sistema não deve criar mensagens duplicadas devido a tentativas repetidas de envio da mesma operação.

---

## RF26 — Consulta do Histórico de Mensagens

**Prioridade:** P1 — Desejável  
**Atores principais:** Estudante e Empresa

### Descrição

O sistema deve permitir que os participantes de uma conversa privada consultem o histórico das mensagens anteriormente enviadas e recebidas.

O histórico deve permanecer disponível após o encerramento da sessão e posterior autenticação do utilizador.

### Funcionalidades

O sistema deve permitir:

- Consultar mensagens de conversas existentes.
- Recuperar mensagens após uma nova autenticação.
- Apresentar mensagens por ordem cronológica.
- Identificar o remetente de cada mensagem.
- Carregar mensagens antigas progressivamente.
- Impedir o acesso ao histórico por utilizadores não autorizados.

### Pré-condições

- O utilizador deve estar autenticado.
- A conversa deve existir.
- O utilizador deve pertencer à conversa.

### Critérios de aceitação

1. O utilizador consegue consultar o histórico das suas conversas.
2. As mensagens persistem após o encerramento da sessão.
3. O sistema apresenta as mensagens na ordem correta.
4. O utilizador consegue identificar quais mensagens enviou e quais recebeu.
5. O histórico é carregado de forma progressiva, evitando recuperar desnecessariamente todas as mensagens.
6. Um utilizador não consegue consultar mensagens de conversas de terceiros.
7. Uma conversa sem mensagens apresenta um estado vazio apropriado.
8. O sistema apresenta uma mensagem adequada quando não é possível recuperar o histórico.

---

# 2. Regras de Negócio

**RN-CHAT-01 — Autenticação obrigatória**

Apenas utilizadores autenticados podem iniciar conversas, enviar mensagens e consultar históricos.

**RN-CHAT-02 — Participação individual**

Cada conversa privada deve possuir exatamente dois participantes distintos.

**RN-CHAT-03 — Participantes autorizados**

Apenas os participantes de uma conversa podem consultar e enviar mensagens através dela.

**RN-CHAT-04 — Unicidade das conversas**

Deve existir, no máximo, uma conversa individual entre o mesmo par de utilizadores.

**RN-CHAT-05 — Identificação automática do remetente**

O remetente deve ser identificado através da autenticação, não sendo permitido atribuir mensagens a outros utilizadores.

**RN-CHAT-06 — Integridade das mensagens**

As mensagens devem possuir conteúdo textual válido, respeitando o limite máximo de caracteres definido pelo sistema.

**RN-CHAT-07 — Persistência**

As mensagens devem ser guardadas de forma persistente, permitindo a recuperação posterior do histórico.

**RN-CHAT-08 — Ordenação cronológica**

As mensagens devem ser apresentadas por ordem de envio, utilizando um critério estável quando necessário.

**RN-CHAT-09 — Segurança e privacidade**

O sistema deve impedir que utilizadores não participantes acedam às mensagens ou aos dados privados de uma conversa, incluindo através de requisições diretas à API ou à base de dados.

**RN-CHAT-10 — Atualização em tempo real**

As mensagens novas devem ser disponibilizadas automaticamente aos participantes ligados à conversa.

**RN-CHAT-11 — Controlo de duplicação**

O sistema deve prevenir a criação de conversas duplicadas e o armazenamento repetido da mesma operação de envio.

**RN-CHAT-12 — Gestão de falhas**

As falhas de comunicação ou armazenamento devem ser tratadas sem apresentar mensagens não confirmadas como definitivamente enviadas.

**RN-CHAT-13 — Privacidade dos participantes**

As conversas e os respetivos conteúdos não devem estar disponíveis publicamente no feed nem nos perfis dos utilizadores.

**RN-CHAT-