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
  { name: 'Capitalismo Consciente', description: 'Empresas guiadas por valores que promovem a prosperidade e a interligação de toda a cadeia de valor para atingir metas mais amplas.' },
  { name: 'Maternidade e Paternidade na Carreira', description: 'Novas formas de pensar e abordar maternidade e paternidade dentro das organizações.' },
  { name: 'Computação Cognitiva', description: 'Expansão da capacidade de uma máquina para que esta consiga pensar (quase) como seres humanos.' },
  { name: 'Customer Experience', description: 'Utilização de tecnologias de coleta e armazenamento de dados para compreensão holística da jornada do consumidor.' },
  { name: 'Economia Circular', description: 'Prática de eliminar o conceito de lixo, enxergando cada material dentro de um fluxo cíclico em um processo de design de produtos e sistemas.' },
  { name: 'Diversidade e Inclusão', description: 'Construção de uma cultura organizacional de diversidade e inclusão, para criar comunidades mais inovadoras através da justiça social.' },
  { name: 'Pessoas e IA', description: 'Colaboração entre humanos e Inteligência Artificial para desenvolver soluções e produzir de forma mais rápida e eficiente.' },
  { name: 'Felicidade e Performance', description: 'Investimentos em práticas que promovam a felicidade individual dos colaboradores para aumentar a performance coletiva.' },
  { name: 'Gamification', description: 'Práticas de incentivo e recompensa para ensinar, treinar e engajar colaboradores e consumidores.' },
  { name: 'Morte dos APPs', description: 'O desenvolvimento de novas formas de interação e assistentes virtuais torna alguns aplicativos obsoletos e desnecessários.' },
  { name: 'Gestão Horizontal ou Colaborativa', description: 'Eliminação de uma hierarquia vertical rígida e compartilhamento entre colaboradores da responsabilidade sobre os resultados organizacionais.' },
  { name: 'Internet das Coisas', description: 'Conexão de dispositivos eletrônicos utilizados no dia-a-dia (aparelhos eletrodomésticos, eletroportáteis, etc.) à internet.' },
  { name: 'Intrapreneur', description: 'Processo de incentivo à criação de novos negócios, atividades e produtos dentro de uma organização já consolidada.' },
  { name: 'Novas Formas de Trabalho', description: 'Relações flexíveis, trabalho remoto e coletivo, colaboradores buscando mais autonomia e propósito do que um salário ou um grande cargo.' },
  { name: 'Voz como Interface', description: 'Utilização da voz como principal interface para a interação entre pessoas e tecnologia.' },
  { name: 'Plataformas Colaborativas', description: 'Modelo de negócio baseado em permitir e incentivar que os clientes ou consumidores também criem valor, ao invés de só consumir.' },
  { name: 'Plataforma como Serviço (PaaS)', description: 'As possibilidades de aumentar a eficiência da TI usando plataformas para criação de soluções de Omnichannel, Análises Preditivas, entre outras.' },
  { name: 'Assistentes Virtuais e BOTs', description: 'Utilização de machine learning para criação de assistentes virtuais e BOT\'s que interagem com os consumidores.' },
  { name: 'Realidade Virtual e Aumentada', description: 'Tecnologias que ampliam as possibilidades da realidade e podem ser utilizadas para entretenimento, educação, consumo, entre outros.' },
  { name: 'Personalização', description: 'Possibilidades de personalização de mensagens, produtos e serviços para se adaptarem às necessidades do consumidor.' },
  { name: 'Agile Analytics', description: 'Uma maneira mais ágil e eficiente de trabalhar com dados produzidos por uma organização e/ou seus clientes.' },
  { name: 'Liderança Adaptativa', description: 'Desvincular a atividade da liderança ao status ou autoridade, incentivando a capacidade de mobilizar pessoas para atacar desafios.' }
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

Occupation.create([
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
