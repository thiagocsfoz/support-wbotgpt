export default {
  title: 'Importando Contatos',
  description: 'Aprenda a importar seus contatos de outras plataformas e fontes para o WhatsBotGPT',
  content: `
# Importando Contatos

O WhatsBotGPT permite que você importe seus contatos e leads de outras plataformas ou fontes, facilitando a migração e centralização da sua base de clientes. Este guia explica os diferentes métodos de importação disponíveis.

## Benefícios de Importar Contatos

Importar seus contatos para o WhatsBotGPT oferece várias vantagens:

- **Centralização**: Mantenha todos os seus contatos em um único lugar
- **Segmentação**: Organize contatos com etiquetas e listas personalizadas
- **Automação**: Configure fluxos automatizados para engajar contatos importados
- **Análise unificada**: Obtenha insights sobre todos os seus leads em um só dashboard
- **Continuidade**: Mantenha o histórico de relacionamento ao migrar de outra plataforma

## Antes de Começar

Antes de iniciar a importação, prepare-se adequadamente:

1. **Verifique seu plano**: Certifique-se de que seu plano comporta o número de contatos que deseja importar
2. **Organize seus dados**: Limpe sua base, removendo duplicatas e informações desatualizadas
3. **Prepare as informações**: Identifique quais dados você deseja transferir além do nome e telefone
4. **Verifique a formatação**: Números de telefone devem estar no formato internacional (+55DDDNÚMERO)

## Métodos de Importação

O WhatsBotGPT oferece diferentes formas de importar contatos:

### 1. Importação via Planilha

O método mais comum e flexível para importar grandes volumes de contatos:

1. Acesse o painel do WhatsBotGPT
2. No menu lateral, clique em **Leads e Contatos**
3. Clique no botão **Importar** no canto superior direito
4. Selecione a opção **Importar via Planilha**
5. Baixe o modelo de planilha clicando em **Baixar Modelo**
6. Preencha a planilha com seus dados, seguindo o formato do modelo
7. Salve a planilha em formato CSV ou XLSX
8. Clique em **Escolher Arquivo** e selecione sua planilha
9. Clique em **Próximo**

#### Mapeando Campos

Após o upload, você precisará mapear as colunas da sua planilha com os campos do sistema:

1. Para cada coluna da sua planilha, selecione o campo correspondente no WhatsBotGPT
2. Campos obrigatórios:
   - **Nome**: Nome do contato
   - **Telefone**: Número de WhatsApp no formato internacional
3. Campos opcionais que você pode mapear:
   - E-mail
   - Empresa
   - Cargo
   - Cidade
   - Estado
   - Origem
   - Observações
   - Campos personalizados
4. Clique em **Próximo**

#### Configurações Adicionais

Configure como os contatos serão importados:

1. **Etiquetas**: Adicione etiquetas a todos os contatos importados
2. **Lista**: Adicione os contatos a uma lista existente ou crie uma nova
3. **Status**: Defina o status inicial dos contatos (Novo, Qualificado, etc.)
4. **Tratamento de duplicatas**:
   - Ignorar contatos duplicados
   - Atualizar informações de contatos existentes
   - Manter ambos (não recomendado)
5. Clique em **Iniciar Importação**

Uma barra de progresso mostrará o status da importação. Dependendo do volume, o processo pode levar alguns minutos.

### 2. Importação de Outras Plataformas

O WhatsBotGPT oferece conectores diretos para importar contatos de plataformas populares:

#### Google Contacts

1. Na tela de importação, selecione **Importar do Google Contacts**
2. Clique em **Conectar com Google**
3. Faça login na sua conta Google quando solicitado
4. Autorize o acesso aos seus contatos
5. Selecione os contatos que deseja importar ou clique em **Selecionar Todos**
6. Configure etiquetas, listas e status como na importação via planilha
7. Clique em **Iniciar Importação**

#### HubSpot

1. Na tela de importação, selecione **Importar do HubSpot**
2. Clique em **Conectar com HubSpot**
3. Faça login na sua conta HubSpot
4. Autorize o acesso
5. Selecione as listas de contatos que deseja importar
6. Mapeie os campos personalizados do HubSpot para os campos do WhatsBotGPT
7. Configure etiquetas, listas e status
8. Clique em **Iniciar Importação**

#### Outras Integrações Disponíveis

O WhatsBotGPT também suporta importação direta de:
- Salesforce
- RD Station
- Pipedrive
- Mailchimp
- Zoho CRM

O processo é semelhante ao descrito acima, com pequenas variações específicas de cada plataforma.

### 3. Importação via API

Para usuários avançados ou integrações personalizadas:

1. Na tela de importação, selecione **Importar via API**
2. Você verá sua chave de API e instruções detalhadas
3. Use a documentação fornecida para integrar com seu sistema atual
4. Teste a integração com alguns contatos antes de fazer a importação completa

## Importando Conversas Anteriores

Além dos dados de contato, você pode importar históricos de conversas:

1. Na tela de importação, marque a opção **Importar histórico de conversas**
2. Selecione o formato do histórico:
   - Exportação do WhatsApp (.txt)
   - Exportação de outra plataforma (.csv, .json)
3. Faça upload do arquivo de histórico
4. Mapeie os números de telefone nas conversas com os contatos importados
5. Clique em **Importar Conversas**

**Nota**: A importação de conversas está disponível apenas em planos específicos e pode ter limitações quanto ao formato e volume de dados.

## Verificação Pós-Importação

Após concluir a importação, é importante verificar se tudo foi importado corretamente:

1. Acesse a lista de contatos
2. Use os filtros para visualizar apenas os contatos recém-importados
3. Verifique uma amostra de contatos para confirmar se todos os dados estão corretos
4. Confira se as etiquetas e listas foram aplicadas adequadamente

Se encontrar problemas, você pode:
- Corrigir manualmente os contatos com problemas
- Excluir os contatos importados e tentar novamente com os ajustes necessários
- Contatar o suporte para assistência

## Limitações e Boas Práticas

### Limitações

- **Volume**: Cada plano tem um limite máximo de contatos
- **Formato de telefone**: Apenas números no formato internacional são aceitos
- **Tamanho do arquivo**: Arquivos de importação não podem exceder 10MB
- **Campos personalizados**: Máximo de 20 campos personalizados por contato

### Boas Práticas

- **Importe em lotes**: Para grandes volumes, divida em múltiplas importações
- **Teste primeiro**: Faça um teste com poucos contatos antes da importação completa
- **Mantenha backups**: Sempre mantenha uma cópia da sua base original
- **Obtenha consentimento**: Certifique-se de ter permissão para contatar as pessoas importadas
- **Segmente imediatamente**: Aplique etiquetas e organize os contatos durante a importação

## Enviando Mensagem de Boas-vindas

Após importar seus contatos, você pode enviar uma mensagem de boas-vindas:

1. Na tela de confirmação de importação, você verá a opção **Enviar mensagem de boas-vindas**
2. Clique para ativar esta opção
3. Escreva sua mensagem ou selecione um modelo
4. Configure:
   - **Programação**: Envio imediato ou agendado
   - **Personalização**: Inclua campos dinâmicos como {nome}
   - **Mídia**: Adicione imagens ou documentos se necessário
5. Clique em **Confirmar Envio**

**Importante**: Respeite as políticas de spam e termos de uso do WhatsApp. Envie mensagens apenas para contatos que deram consentimento prévio.

## Solução de Problemas Comuns

### Erros de Formato de Telefone

Se muitos números não forem importados devido a erros de formato:

1. Verifique se os números estão no formato internacional (+55DDDNÚMERO)
2. Remova caracteres especiais como parênteses, traços e espaços
3. Certifique-se de que o código do país está incluído
4. Use a função de formatação em massa na planilha antes de importar

### Duplicatas Não Identificadas

Se o sistema não identificar duplicatas corretamente:

1. Verifique se os números estão exatamente no mesmo formato
2. Considere fazer uma limpeza prévia na sua planilha
3. Use ferramentas de deduplicação antes da importação

### Falha na Importação

Se a importação falhar completamente:

1. Verifique o tamanho do arquivo (deve ser menor que 10MB)
2. Confirme se o formato do arquivo é suportado (CSV, XLSX)
3. Remova formatações especiais e fórmulas da planilha
4. Divida em arquivos menores e tente novamente

## Integrações Contínuas

Além da importação única, você pode configurar sincronizações contínuas:

1. Acesse **Configurações** > **Integrações**
2. Selecione a plataforma desejada
3. Configure a sincronização bidirecional
4. Defina a frequência de sincronização
5. Selecione quais dados devem ser sincronizados em cada direção

Isso mantém suas bases de dados atualizadas automaticamente em ambas as plataformas.

Para mais informações sobre como gerenciar seus contatos após a importação, consulte nosso guia sobre [Gerenciando Leads](/leads-contatos/gerenciando-leads) e [Qualificação de Leads](/leads-contatos/qualificacao-leads).
  `
};