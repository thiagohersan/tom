# This file should contain all the record creation needed to seed
# the database with its default values.
# The data can then be loaded with the rails db:seed command
# (or created alongside the database with db:setup).
#
# Examples:
#
#   movies =
#   Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
Trend.create([
  { name: 'Os três Rs de segurança', description: 'Estratégia de segurança que aproveita a automação de infraestrutura para diminuir oportunidades de ataque. Involve Rotacionar credenciais com frequencia, Reparar o sistema com patches de segurança, e a capacidade de Recriar o sistema a partir de imagens confiáveis e seguras.' },
  { name: 'Hyperledger Composer', description: 'Framework que acelera o processo de implementação de software de contratos seguros, facilitando a configuração da infraestrutura antes de escrever qualquer código de blockchain.' },
  { name: 'Flutter', description: 'Framework multiplataforma que permite escrever aplicativos móveis nativos em Dart. Pode ser compilado em código nativo, se comunicando com a plataforma final sem ponte nem trocas de contexto.' },
  { name: 'CVXPY', description: 'Linguagem de modelagem de código aberto incorporada em Python para problemas de otimização convexa.' },
  { name: 'Gerenciamento de identidades hospedado como serviço', description: 'Acreditamos que provedores hospedados de primeira linha, como Auth0 e Okta podem fornecer melhores tempos de atividade e SLAs de segurança.' },
  { name: 'AWS Fargate', description: 'Serviço recente da Amazon no espaço de Docker como serviço. AWS Fargate é uma boa alternativa ao EC2 sem a necessidade de gerenciar, provisionar e configurar quaisquer instâncias ou clusters.' },
  { name: 'Mongoose OS', description: 'Sistema operacional de microcontrolador que vem com um conjunto de bibliotecas e um framework de desenvolvimento para suportar aplicações típicas de Internet das Coisas (IoT).' },
  { name: 'Registros de decisões de arquiteturas leves', description: 'Substituir documentação extensa por códigos e testes legíveis.' },
  { name: 'Engenharia de Caos de Segurança', description: 'Técnica para testar a resiliência de infraestrutura que introduz falsos positivos em redes de produção para verificar se os procedimentos em vigor são capazes de identificar falhas de segurança sob condições controladas.' },
  { name: 'Polycloud', description: 'Estratégia para passar diferentes tipos de carga de trabalho para diferentes provedores com base em estratégia de negócio e tecnologia.' },
  { name: 'Scout2', description: 'Ferramenta de auditoria de segurança para ambientes AWS. ' },
  { name: 'Web Bluetooth', description: 'Implementação da especificação de Bluetooth para a web, que permite controlar qualquer dispositivo Bluetooth LTE diretamente pelo navegador. ' },
  { name: '13', description: '13.' },
  { name: '14', description: '14.' },
  { name: '15', description: '15.' },
  { name: 'Engenharia de Caos', description: 'Técnica de executar experimentos em sistemas distribuídos em produção, com o objetivo de criar confiança de que esses sistemas funcionam como esperado em condições de turbulência.' },
  { name: 'RIBs', description: 'Sigla para roteador, interator e compilador (builder) — é um framework de arquitetura multiplataforma móvel que garante que o aplicativo seja orientado pela lógica de negócios.' },
  { name: 'Solidity', description: 'Linguagem de programação de alto nível, orientada a contratos, com a sintaxe parecida com a de JavaScript e desenhada para ser executada na Máquina Virtual Ethereum (EVM).' },
  { name: 'ArchUnit', description: 'Biblioteca de testes Java para checagem de características de arquitetura, como dependências de pacotes e classes. ' },
  { name: '20', description: '20.' },
  { name: 'Patroni', description: 'Controlador PostgreSQL baseado em Python que utiliza um armazenamento distribuído de configurações (como etcd, ZooKeeper ou Consul) para gerenciar o estado do cluster de PostgreSQL.' },
  { name: 'OpenZeppelin', description: 'Framework para ajudar a criar contratos inteligentes seguros em Solidity.' },
  { name: 'Godot', description: 'Ferramenta de código aberto para a criação de mundos virtuais imersivos. Embora não tão completo quanto os grandes motores comerciais, oferece um design mais moderno e menos desorganizado.' },
  { name: 'Uso genérico da nuvem', description: 'Utilização genérica de recursos presentes na maioria dos provedores para evitar "lock in".' },
])

Industry.create([
  { name: 'Agricultura e Mineração' },
  { name: 'Assistência Médica, Indústria Farmacêutica e Biotecnologia' },
  { name: 'Atacado e Distribuição' },
  { name: 'Computadores e Eletrônicos' },
  { name: 'Educação' },
  { name: 'Energia e Serviços Públicos' },
  { name: 'Engenharia, Pesquisa e Desenvolvimento' },
  { name: 'Governo' },
  { name: 'Manufatura' },
  { name: 'Mercado Imobiliário e Construções' },
  { name: 'Mídia, Publicação e Entretenimento' },
  { name: 'Sem Finalidade Lucrativa' },
  { name: 'Serviços de Consumo' },
  { name: 'Serviços Empresariais' },
  { name: 'Serviços Financeiros e Seguradoras' },
  { name: 'Software e Internet' },
  { name: 'Telecomunicações' },
  { name: 'Transporte e Estocagem' },
  { name: 'Varejo' },
  { name: 'Viagem, Lazer e Recreação' },
  { name: 'Outro' }])

Role.create([
  { name: 'Executivo C-Level' },
  { name: 'VP ou Diretor(a)' },
  { name: 'Gerente de Projeto' },
  { name: 'Gerente de Produto' },
  { name: 'Gerente - Outro' },
  { name: 'Arquiteto(a)' },
  { name: 'Desenvolvedor(a)' },
  { name: 'Analista' },
  { name: 'Tester' },
  { name: 'Consultor(a)' },
  { name: 'Estudante' },
  { name: 'Outro' }])
