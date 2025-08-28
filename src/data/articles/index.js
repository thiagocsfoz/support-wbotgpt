// Import all article data
import criandoConta from './primeiros-passos/criando-conta';
import conectandoWhatsapp from './primeiros-passos/conectando-whatsapp';
import configuracoesIniciais from './primeiros-passos/configuracoes-iniciais';

// Assistentes
import personalizandoInstrucoes from './assistentes/personalizando-instrucoes';
import criandoAssistente from './assistentes/criando-assistente';
import configurandoServicos from './assistentes/configurando-servicos';

// Conta e Faturamento
import gerenciandoPlano from './conta-faturamento/gerenciando-plano';
import dadosCadastrais from './conta-faturamento/dados-cadastrais';
import historicoPagamentos from './conta-faturamento/historico-pagamentos';

// Leads e Contatos
import gerenciandoLeads from './leads-contatos/gerenciando-leads';
import importandoContatos from './leads-contatos/importando-contatos';
import qualificacaoLeads from './leads-contatos/qualificacao-leads';

// Recursos e Funcionalidades
import agendaAgendamentos from './recursos-funcionalidades/agenda-agendamentos';
import automacoesAvancadas from './recursos-funcionalidades/automacoes-avancadas';
import campanhasMarketing from './recursos-funcionalidades/campanhas-marketing';

// Solução de Problemas
import botNaoResponde from './solucao-problemas/bot-nao-responde';
import errosComuns from './solucao-problemas/erros-comuns';
import problemasConexaoWhatsapp from './solucao-problemas/problemas-conexao-whatsapp';

// Create the article data structure
const articleData = {
  'primeiros-passos': {
    'criando-conta': criandoConta,
    'conectando-whatsapp': conectandoWhatsapp,
    'configuracoes-iniciais': configuracoesIniciais,
  },
  'assistentes': {
    'personalizando-instrucoes': personalizandoInstrucoes,
    'criando-assistente': criandoAssistente,
    'configurando-servicos': configurandoServicos,
  },
  'leads-contatos': {
    'gerenciando-leads': gerenciandoLeads,
    'importando-contatos': importandoContatos,
    'qualificacao-leads': qualificacaoLeads,
  },
  'recursos-funcionalidades': {
    'agenda-agendamentos': agendaAgendamentos,
    'automacoes-avancadas': automacoesAvancadas,
    'campanhas-marketing': campanhasMarketing,
  },
  'conta-faturamento': {
    'gerenciando-plano': gerenciandoPlano,
    'dados-cadastrais': dadosCadastrais,
    'historico-pagamentos': historicoPagamentos,
  },
  'solucao-problemas': {
    'bot-nao-responde': botNaoResponde,
    'erros-comuns': errosComuns,
    'problemas-conexao-whatsapp': problemasConexaoWhatsapp,
  }
};

export default articleData;
