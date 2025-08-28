export default {
  title: 'Erros Comuns',
  description: 'Guia para identificar e resolver os erros mais comuns encontrados na plataforma WhatsBotGPT',
  content: `
# Erros Comuns

Este guia apresenta os erros mais frequentes que os usuários encontram na plataforma WhatsBotGPT e fornece soluções passo a passo para resolvê-los rapidamente.

## Erros de Conexão do WhatsApp

### Erro: "QR Code expirado"

**Sintomas:**
- O QR code na tela de conexão mostra a mensagem "Expirado"
- Não é possível escanear o código com o WhatsApp

**Solução:**
1. Clique no botão **Atualizar QR Code** para gerar um novo código
2. Escaneie o novo código imediatamente
3. Certifique-se de que seu telefone está com internet estável
4. Se o problema persistir, limpe o cache do navegador e tente novamente

### Erro: "Telefone não conectado"

**Sintomas:**
- Mensagem de erro "Telefone não conectado" no painel
- Assistentes não conseguem enviar ou receber mensagens

**Solução:**
1. Verifique se o WhatsApp está aberto no seu telefone
2. Confirme se o telefone está conectado à internet
3. No painel do WhatsBotGPT, vá para **Configurações** > **Conexões**
4. Clique em **Reconectar WhatsApp**
5. Siga as instruções para reconectar seu dispositivo

### Erro: "Múltiplas sessões detectadas"

**Sintomas:**
- Mensagem de erro indicando que o WhatsApp está conectado em múltiplos lugares
- Desconexão automática do WhatsBotGPT

**Solução:**
1. Abra o WhatsApp no seu telefone
2. Vá para **Configurações** > **WhatsApp Web/Desktop**
3. Clique em **Desconectar de todos os dispositivos**
4. Volte ao WhatsBotGPT e inicie uma nova conexão
5. Escaneie o QR code com seu telefone

## Erros de Assistentes

### Erro: "Assistente não responde"

**Sintomas:**
- O assistente recebe mensagens, mas não envia respostas
- Status do assistente aparece como "Ativo", mas não há interação

**Solução:**
1. Verifique se o assistente está realmente ativado (botão verde)
2. Confirme se a conexão do WhatsApp está funcionando
3. Vá para **Assistentes** > selecione o assistente > **Configurações**
4. Verifique se as instruções não contêm contradições
5. Reinicie o assistente: desative e ative novamente
6. Para uma solução mais detalhada, consulte [Meu bot não está respondendo](/solucao-problemas/bot-nao-responde)

### Erro: "Respostas inadequadas ou fora de contexto"

**Sintomas:**
- O assistente responde, mas com informações irrelevantes
- Respostas não seguem as instruções configuradas

**Solução:**
1. Revise as instruções do assistente:
   - Vá para **Assistentes** > selecione o assistente > **Configurações**
   - Verifique se as instruções são claras e específicas
2. Simplifique as instruções, removendo ambiguidades
3. Adicione exemplos concretos de como o assistente deve responder
4. Se estiver usando base de conhecimento, verifique se os documentos são relevantes
5. Teste o assistente com perguntas simples para verificar o comportamento básico

### Erro: "Limite de tokens excedido"

**Sintomas:**
- Mensagem de erro sobre limite de tokens
- Assistente para de responder em conversas longas

**Solução:**
1. Reduza o tamanho das instruções do assistente
2. Configure o assistente para resumir conversas longas
3. Se estiver usando base de conhecimento, otimize os documentos:
   - Divida documentos grandes em partes menores
   - Remova conteúdo irrelevante ou redundante
4. Considere fazer upgrade do seu plano para obter limites maiores

## Erros de Faturamento e Conta

### Erro: "Pagamento recusado"

**Sintomas:**
- Notificação de falha no pagamento
- Impossibilidade de renovar assinatura

**Solução:**
1. Verifique se o cartão de crédito está válido e com saldo
2. Confirme se os dados de faturamento estão corretos:
   - Vá para **Conta** > **Plano e Faturamento** > **Métodos de Pagamento**
   - Verifique e atualize as informações se necessário
3. Tente adicionar um método de pagamento alternativo
4. Se o problema persistir, entre em contato com seu banco para verificar se há restrições

### Erro: "Conta suspensa"

**Sintomas:**
- Impossibilidade de acessar recursos da plataforma
- Mensagem indicando suspensão da conta

**Solução:**
1. Verifique se há faturas pendentes:
   - Vá para **Conta** > **Plano e Faturamento** > **Histórico de Pagamentos**
   - Procure por pagamentos com status "Pendente" ou "Falha"
2. Regularize qualquer pendência financeira
3. Verifique se houve violação dos termos de uso:
   - Uso inadequado da plataforma
   - Envio de conteúdo proibido
   - Excesso de reclamações de usuários
4. Entre em contato com o suporte através do e-mail [contato@whatsbotgpt.store](mailto:contato@whatsbotgpt.store)

### Erro: "Limite de uso atingido"

**Sintomas:**
- Notificações sobre limite de uso
- Impossibilidade de criar novos assistentes ou conexões

**Solução:**
1. Verifique seu uso atual:
   - Vá para **Conta** > **Uso e Limites**
   - Analise quais limites foram atingidos
2. Considere as seguintes opções:
   - Fazer upgrade para um plano superior
   - Otimizar o uso removendo assistentes ou conexões não utilizadas
   - Aguardar a renovação do ciclo de faturamento
3. Para necessidades temporárias, verifique se há opções de expansão pontual de limites

## Erros de Importação e Exportação

### Erro: "Falha na importação de contatos"

**Sintomas:**
- Mensagem de erro durante o processo de importação
- Contatos não aparecem na lista após tentativa de importação

**Solução:**
1. Verifique o formato do arquivo:
   - Confirme se está usando CSV ou XLSX
   - Verifique se o arquivo não está corrompido
2. Confirme a formatação dos dados:
   - Números de telefone devem estar no formato internacional (+55DDDNÚMERO)
   - Remova caracteres especiais e formatações
3. Reduza o tamanho do arquivo:
   - Divida arquivos grandes em partes menores
   - Importe em lotes de até 1000 contatos
4. Para mais detalhes, consulte [Importando Contatos](/leads-contatos/importando-contatos)

### Erro: "Falha na exportação de relatórios"

**Sintomas:**
- Mensagem de erro ao tentar exportar relatórios
- Download do arquivo não inicia ou arquivo corrompido

**Solução:**
1. Reduza o período de dados selecionado
2. Selecione menos métricas para exportação
3. Tente um formato de arquivo diferente (tente CSV se PDF falhar)
4. Verifique a conexão de internet
5. Limpe o cache do navegador e tente novamente

## Erros de Integrações

### Erro: "Falha na conexão com serviço externo"

**Sintomas:**
- Mensagens de erro ao tentar usar integrações
- Funcionalidades integradas não respondem

**Solução:**
1. Verifique o status da conexão:
   - Vá para **Configurações** > **Integrações**
   - Verifique se o status está como "Conectado"
2. Reconecte o serviço:
   - Clique em **Reconectar**
   - Siga o processo de autenticação novamente
3. Verifique se o serviço externo está funcionando normalmente
4. Confirme se as permissões concedidas são suficientes
5. Para mais detalhes, consulte [Configurando Serviços e Integrações](/assistentes/configurando-servicos)

### Erro: "API Key inválida"

**Sintomas:**
- Mensagem específica sobre API Key inválida
- Integrações param de funcionar repentinamente

**Solução:**
1. Gere uma nova API Key no serviço externo
2. Atualize a chave nas configurações do WhatsBotGPT:
   - Vá para **Configurações** > **Integrações** > selecione o serviço
   - Atualize o campo de API Key
   - Salve as alterações
3. Teste a integração para confirmar que está funcionando
4. Verifique se há limites de uso na API do serviço externo

## Erros de Performance

### Erro: "Lentidão no painel de controle"

**Sintomas:**
- Interface responde lentamente
- Carregamento demorado de páginas e listas

**Solução:**
1. Limpe o cache do navegador
2. Feche outras abas e aplicativos que consomem memória
3. Tente usar um navegador diferente (recomendamos Chrome ou Firefox)
4. Reduza o volume de dados visualizados:
   - Use filtros para mostrar menos registros
   - Reduza o período de tempo nas visualizações
5. Verifique sua conexão de internet

### Erro: "Assistente com tempo de resposta lento"

**Sintomas:**
- Assistente demora muito para responder
- Clientes reclamam de espera prolongada

**Solução:**
1. Simplifique as instruções do assistente
2. Reduza o tamanho da base de conhecimento
3. Verifique se há integrações que podem estar causando atrasos
4. Otimize o fluxo de conversa para reduzir a necessidade de processamento complexo
5. Considere dividir um assistente complexo em múltiplos assistentes com funções específicas

## Erros de Segurança e Acesso

### Erro: "Não foi possível fazer login"

**Sintomas:**
- Mensagem de erro na tela de login
- Impossibilidade de acessar a conta mesmo com credenciais corretas

**Solução:**
1. Verifique se está usando o e-mail correto
2. Use a opção "Esqueci minha senha" para redefinir a senha
3. Verifique se o CAPS LOCK está desativado
4. Limpe os cookies do navegador
5. Se estiver usando autenticação de dois fatores:
   - Confirme se está usando o código correto
   - Verifique se o horário do seu dispositivo está sincronizado
6. Se o problema persistir, entre em contato com o suporte

### Erro: "Acesso negado a recurso"

**Sintomas:**
- Mensagem "Acesso negado" ou "Permissão insuficiente"
- Impossibilidade de acessar certas áreas ou funcionalidades

**Solução:**
1. Verifique seu nível de acesso:
   - Vá para **Conta** > **Usuários e Permissões**
   - Confirme qual é o seu perfil de acesso
2. Se você é administrador, verifique se sua assinatura inclui o recurso
3. Para usuários adicionais, peça ao administrador para revisar suas permissões
4. Tente sair e entrar novamente na plataforma

## Erros de Compatibilidade

### Erro: "Navegador não suportado"

**Sintomas:**
- Mensagem indicando que o navegador não é suportado
- Funcionalidades que não carregam corretamente

**Solução:**
1. Atualize seu navegador para a versão mais recente
2. Use um dos navegadores recomendados:
   - Google Chrome (versão 90 ou superior)
   - Mozilla Firefox (versão 88 ou superior)
   - Microsoft Edge (versão 90 ou superior)
   - Safari (versão 14 ou superior)
3. Desative extensões que possam interferir no funcionamento da plataforma

### Erro: "Incompatibilidade com dispositivo móvel"

**Sintomas:**
- Layout quebrado em dispositivos móveis
- Funcionalidades que não respondem corretamente em smartphones ou tablets

**Solução:**
1. Use a versão desktop para funcionalidades administrativas complexas
2. Para acesso móvel, use dispositivos com telas maiores (tablets em vez de smartphones)
3. Gire a tela para modo paisagem para melhor visualização
4. Considere usar o aplicativo móvel WhatsBotGPT (se disponível para seu dispositivo)

## Como Reportar Erros Não Listados

Se você encontrar um erro que não está listado neste guia:

1. Documente o problema:
   - Anote a mensagem de erro exata
   - Registre os passos que levaram ao erro
   - Faça capturas de tela se possível
   - Anote data e hora da ocorrência

2. Entre em contato com o suporte:
   - E-mail: [contato@whatsbotgpt.store](mailto:contato@whatsbotgpt.store)
   - Chat ao vivo: Disponível no canto inferior direito do painel
   - WhatsApp: [+55 11 97123-9515](https://wa.me/5511971239515)

3. Forneça informações detalhadas:
   - Sua conta (e-mail cadastrado)
   - Navegador e sistema operacional utilizados
   - Descrição detalhada do problema
   - Capturas de tela ou gravações de tela, se possível

Nossa equipe de suporte está disponível de segunda a sexta, das 9h às 18h, e responderá sua solicitação o mais rápido possível.

## Prevenindo Erros Futuros

Para minimizar a ocorrência de erros:

- **Mantenha tudo atualizado**: Navegadores, sistema operacional e aplicativo do WhatsApp
- **Faça backup regularmente**: Exporte seus dados importantes periodicamente
- **Monitore o uso**: Fique atento aos limites do seu plano
- **Siga as melhores práticas**: Consulte nossa documentação para implementações recomendadas
- **Treine sua equipe**: Certifique-se de que todos os usuários sabem utilizar a plataforma corretamente

Para problemas específicos com a conexão do WhatsApp, consulte nosso guia detalhado sobre [Problemas de Conexão com WhatsApp](/solucao-problemas/problemas-conexao-whatsapp).
  `
};