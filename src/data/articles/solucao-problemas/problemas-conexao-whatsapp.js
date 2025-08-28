export default {
  title: 'Problemas de Conexão com WhatsApp',
  description: 'Guia completo para diagnosticar e resolver problemas de conexão entre o WhatsBotGPT e o WhatsApp',
  content: `
# Problemas de Conexão com WhatsApp

A conexão estável entre o WhatsBotGPT e o WhatsApp é fundamental para o funcionamento dos seus assistentes virtuais. Este guia aborda os problemas mais comuns de conexão e oferece soluções detalhadas para cada situação.

## Entendendo como funciona a conexão

Antes de resolver problemas, é importante entender como a conexão funciona:

1. O WhatsBotGPT utiliza a API oficial do WhatsApp Business ou o protocolo WhatsApp Web para se conectar à sua conta
2. A conexão depende de:
   - Seu dispositivo móvel (para WhatsApp Web)
   - Sua conexão com a internet
   - O servidor do WhatsApp
   - A plataforma WhatsBotGPT

Qualquer problema em um desses elementos pode afetar a conexão.

## Diagnóstico Rápido

Se você está enfrentando problemas de conexão, verifique rapidamente:

1. **Seu telefone está online?** Verifique se tem acesso à internet
2. **O WhatsApp está aberto no telefone?** Deve estar em execução
3. **Há bateria suficiente?** Telefones com pouca bateria podem desconectar para economizar energia
4. **O WhatsApp está atualizado?** Versões antigas podem causar incompatibilidade
5. **Você está usando um número de WhatsApp Business?** Algumas funcionalidades exigem a versão Business

## Problemas Comuns e Soluções

### 1. Não Consegue Escanear o QR Code

**Sintomas:**
- A câmera não reconhece o QR code
- O aplicativo WhatsApp abre, mas não inicia o escaneamento
- Mensagem de erro ao tentar escanear

**Soluções:**

#### Problema com o QR Code:
1. Clique em **Atualizar QR Code** para gerar um novo
2. Aumente o brilho da tela do computador
3. Aproxime o telefone da tela para melhor leitura
4. Certifique-se de que a câmera do telefone está limpa e sem obstruções

#### Problema com o WhatsApp:
1. No WhatsApp, vá para **Menu** (três pontos) > **WhatsApp Web**
2. Se já houver muitas sessões ativas, clique em **Desconectar de todos os dispositivos**
3. Tente novamente escanear o QR code
4. Se o problema persistir, reinicie o aplicativo WhatsApp

#### Problema com o Navegador:
1. Tente usar outro navegador (Chrome, Firefox, Edge)
2. Limpe o cache e cookies do navegador
3. Desative extensões que possam interferir
4. Verifique se o JavaScript está habilitado

### 2. Desconexões Frequentes

**Sintomas:**
- A conexão cai repetidamente
- Mensagens de "Reconectando..." aparecem com frequência
- Assistentes param de responder periodicamente

**Soluções:**

#### Problemas de Internet:
1. Verifique a estabilidade da sua conexão com a internet
2. Se estiver usando Wi-Fi:
   - Aproxime-se do roteador
   - Verifique se outros dispositivos estão consumindo muita banda
   - Reinicie o roteador
3. Se estiver usando dados móveis, verifique a qualidade do sinal

#### Problemas com o Dispositivo:
1. Desative modos de economia de bateria no telefone
2. Verifique se o WhatsApp tem permissão para rodar em segundo plano
3. Certifique-se de que o telefone não está entrando em modo de suspensão
4. Mantenha o telefone carregado ou conectado a uma fonte de energia

#### Problemas com Múltiplas Sessões:
1. Verifique se o WhatsApp está conectado em outros dispositivos
2. Desconecte sessões não utilizadas
3. Evite usar o mesmo número em múltiplas instâncias do WhatsBotGPT

### 3. Erro "Telefone Não Conectado"

**Sintomas:**
- Mensagem de erro "Telefone não conectado" no painel
- Impossibilidade de enviar ou receber mensagens
- Status de conexão mostra "Desconectado"

**Soluções:**

#### Reconexão Básica:
1. No painel do WhatsBotGPT, vá para **Configurações** > **Conexões**
2. Clique em **Reconectar WhatsApp**
3. Siga as instruções para escanear o QR code novamente
4. Aguarde até que o status mude para "Conectado"

#### Se a Reconexão Falhar:
1. Verifique se o WhatsApp está aberto no seu telefone
2. Certifique-se de que o telefone tem conexão com a internet
3. Reinicie o aplicativo WhatsApp
4. Reinicie o telefone
5. Tente a reconexão novamente

#### Reconexão Completa:
Se os métodos acima não funcionarem:
1. No WhatsApp, vá para **Configurações** > **WhatsApp Web/Desktop**
2. Clique em **Desconectar de todos os dispositivos**
3. No WhatsBotGPT, vá para **Configurações** > **Conexões**
4. Clique em **Remover Conexão**
5. Inicie o processo de conexão do zero

### 4. Erro "Múltiplas Sessões Detectadas"

**Sintomas:**
- Mensagem indicando que o WhatsApp está conectado em múltiplos lugares
- Desconexão automática do WhatsBotGPT
- Impossibilidade de manter a conexão estável

**Soluções:**

#### Gerenciamento de Sessões:
1. No WhatsApp, vá para **Configurações** > **WhatsApp Web/Desktop**
2. Você verá uma lista de todas as sessões ativas
3. Mantenha apenas a sessão do WhatsBotGPT
4. Desconecte todas as outras sessões

#### Evitando o Problema:
1. Não use o mesmo número de WhatsApp em múltiplos assistentes
2. Evite conectar o mesmo WhatsApp em outros dispositivos ou navegadores
3. Se precisar de múltiplos assistentes, considere usar números diferentes

### 5. Erro "Versão do WhatsApp não Suportada"

**Sintomas:**
- Mensagem indicando incompatibilidade de versão
- Impossibilidade de estabelecer conexão
- Falha ao escanear o QR code

**Soluções:**

#### Atualização do WhatsApp:
1. Abra a loja de aplicativos do seu dispositivo (Play Store ou App Store)
2. Busque por "WhatsApp" ou "WhatsApp Business"
3. Se houver atualizações disponíveis, instale-as
4. Reinicie o telefone após a atualização
5. Tente conectar novamente

#### Verificação de Compatibilidade:
1. Confirme se está usando a versão correta do WhatsApp:
   - WhatsApp regular para contas pessoais
   - WhatsApp Business para contas comerciais
2. Verifique se seu dispositivo é compatível com as versões mais recentes
3. Se estiver usando uma versão beta, considere mudar para a versão estável

### 6. Problemas com WhatsApp Business API

Se você está usando a API oficial do WhatsApp Business (não o WhatsApp Web):

**Sintomas:**
- Erros de autenticação
- Mensagens não entregues
- Limitações no envio de mensagens

**Soluções:**

#### Verificação de Credenciais:
1. Verifique se as credenciais da API estão corretas
2. Confirme se o número está aprovado pela Meta/Facebook
3. Verifique se o template de mensagem foi aprovado (para mensagens iniciais)

#### Limites e Restrições:
1. Verifique se você atingiu o limite diário de mensagens
2. Confirme se está respeitando a janela de 24 horas para respostas
3. Verifique se o conteúdo das mensagens está de acordo com as políticas

#### Suporte Especializado:
1. Entre em contato com o suporte do WhatsBotGPT para problemas específicos da API
2. Consulte a documentação oficial da API do WhatsApp Business
3. Verifique o status do serviço em [status.whatsapp.com](https://status.whatsapp.com)

## Soluções Avançadas

### Reconexão Completa (Método Detalhado)

Se os métodos básicos não resolverem o problema, tente este procedimento completo:

1. **Desconecte todas as sessões:**
   - No WhatsApp, vá para **Configurações** > **WhatsApp Web/Desktop**
   - Clique em **Desconectar de todos os dispositivos**
   - Confirme a ação

2. **Limpe os dados do navegador:**
   - Abra as configurações do navegador
   - Vá para "Privacidade e Segurança" > "Limpar dados de navegação"
   - Selecione "Cookies e dados do site" e "Imagens e arquivos em cache"
   - Escolha "Todo o período" no menu de tempo
   - Clique em "Limpar dados"

3. **Reinicie os dispositivos:**
   - Desligue e ligue novamente seu telefone
   - Reinicie seu computador
   - Reinicie seu roteador de internet

4. **Remova a conexão no WhatsBotGPT:**
   - Vá para **Configurações** > **Conexões**
   - Selecione a conexão do WhatsApp
   - Clique em **Remover Conexão**
   - Confirme a ação

5. **Estabeleça uma nova conexão:**
   - Ainda em **Configurações** > **Conexões**
   - Clique em **Adicionar Conexão**
   - Selecione **WhatsApp**
   - Siga o processo de conexão do início

### Verificação de Firewall e Rede

Se você está em um ambiente corporativo ou usa VPN:

1. **Verifique as configurações de firewall:**
   - Certifique-se de que os domínios do WhatsApp não estão bloqueados
   - Verifique se as portas necessárias estão abertas (443/TCP)

2. **Teste com outra rede:**
   - Desconecte-se da VPN, se estiver usando
   - Tente conectar usando outra rede (dados móveis, por exemplo)
   - Se funcionar, o problema está na sua rede principal

3. **Configurações de proxy:**
   - Se sua rede usa proxy, verifique se está configurado corretamente no navegador
   - Considere usar um navegador sem configurações de proxy para teste

## Prevenção de Problemas

Para evitar problemas de conexão no futuro:

### Melhores Práticas para Dispositivos

1. **Mantenha o telefone sempre carregado** ou conectado à energia
2. **Desative modos de economia de bateria** que possam limitar o WhatsApp
3. **Mantenha o WhatsApp atualizado** para a versão mais recente
4. **Não force o fechamento do WhatsApp** no gerenciador de aplicativos
5. **Evite usar o mesmo número** em múltiplos dispositivos ou serviços

### Melhores Práticas para Conexão

1. **Use uma conexão de internet estável** e rápida
2. **Prefira Wi-Fi** em vez de dados móveis para maior estabilidade
3. **Evite redes públicas** ou com muitas restrições
4. **Mantenha seu roteador atualizado** e bem posicionado
5. **Considere um plano de internet dedicado** para uso comercial intenso

### Monitoramento Proativo

1. **Configure alertas de desconexão** no WhatsBotGPT
2. **Verifique regularmente** o status da conexão
3. **Tenha um número de backup** para casos de falha crítica
4. **Documente os procedimentos de reconexão** para sua equipe
5. **Mantenha contato com o suporte** para casos recorrentes

## Quando Contatar o Suporte

Se você tentou todas as soluções acima e ainda enfrenta problemas, é hora de contatar o suporte:

1. **Prepare as seguintes informações:**
   - Modelo e sistema operacional do seu telefone
   - Versão do WhatsApp que está usando
   - Navegador e versão utilizados
   - Descrição detalhada do problema
   - Capturas de tela de mensagens de erro
   - Horário aproximado em que o problema começou
   - Ações que já tentou para resolver

2. **Entre em contato através de:**
   - E-mail: [contato@whatsbotgpt.store](mailto:contato@whatsbotgpt.store)
   - Chat ao vivo: Disponível no canto inferior direito do painel
   - WhatsApp: [+55 11 97123-9515](https://wa.me/5511971239515)

Nossa equipe de suporte está disponível de segunda a sexta, das 9h às 18h, e responderá sua solicitação o mais rápido possível.

## Perguntas Frequentes

### O WhatsApp pode ser conectado em múltiplos assistentes?
Não é recomendado. Cada número de WhatsApp deve ser usado em apenas um assistente para evitar conflitos de conexão.

### Preciso manter o telefone ligado o tempo todo?
Sim, se estiver usando o método WhatsApp Web. Se estiver usando a API oficial do WhatsApp Business, o telefone não é necessário após a configuração inicial.

### Posso usar um emulador de Android em vez de um telefone físico?
Tecnicamente é possível, mas não é recomendado nem suportado oficialmente, pois pode levar a instabilidades e até mesmo ao banimento da sua conta do WhatsApp.

### O que acontece se meu telefone ficar sem bateria?
A conexão será perdida e seus assistentes não poderão enviar ou receber mensagens até que você reconecte.

### Posso usar o mesmo WhatsApp no meu computador e no WhatsBotGPT?
Não é recomendado, pois pode causar conflitos de sessão. Dedique um número exclusivamente para o WhatsBotGPT.

Para outros problemas comuns na plataforma, consulte nosso guia sobre [Erros Comuns](/solucao-problemas/erros-comuns).
  `
};