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
  { name: 'Personalização', description: 'Possibilidades de personalização de mensagens, produtos e serviços para se adaptarem às necessidades de clientes.' },
  { name: 'Customer Experience', description: 'Utilização de tecnologias de coleta e armazenamento de dados para compreensão holística da jornada de cliente.' },
  { name: 'Crescimento Guiado por Dados', description: 'Uma maneira mais ágil e eficiente de trabalhar com dados produzidos por uma organização e/ou suas clientes.' },
  { name: 'Transformação Digital', description: 'Transformação de modelos de negócio, processos e a experiência do cliente por meio de tecnologias digitais.' },
  { name: 'Crescimento Habilitado pela Tecnologia', description: 'Utilização da tecnologia para impulsionar negócios, ampliando possibilidades e permitindo a expansão para novas frentes.' },
  { name: 'O2O - Online to Offline', description: 'Integração de serviços on e offline, permitindo que clientes solicitem serviços do mundo físico por meio de aplicações online.' },
  { name: 'Plataformas Colaborativas', description: 'Modelo de negócio baseado em permitir e incentivar que clientes ou pessoas usuárias também criem valor, ao invés de só consumir.' },
  { name: 'Economia Compartilhada', description: 'Prática de dividir o uso ou a compra de serviços, frequentemente facilitada por aplicativos que possibilitam interação entre as pessoas.' },
  { name: 'Machine Learning', description: 'Método de automatização do desenvolvimento de modelos analíticos, usando algoritmos que aprendem a partir de dados.' },
  { name: 'Blockchain', description: 'Tecnologia que visa a descentralização como medida de segurança, por meio de bases de registros e dados distribuídos e compartilhados.' },
  { name: 'Internet das Coisas', description: 'Conexão de dispositivos eletrônicos utilizados no dia-a-dia (aparelhos eletrodomésticos, eletroportáteis, etc.) à internet.' },
  { name: 'Pessoas e Inteligência Artificial', description: 'Colaboração entre pessoas e Inteligência Artificial para desenvolver soluções e produzir de forma mais rápida e eficiente.' },
  { name: 'Gamification', description: 'Práticas de incentivo e recompensa para ensinar, treinar e engajar pessoas e clientes em atividades específicas.' },
  { name: 'Plataforma como Serviço (PaaS)', description: 'As possibilidades de aumentar a eficiência da TI usando plataformas para criação de soluções de Omnichannel, Análises Preditivas, entre outras.' },
  { name: 'Assistentes Virtuais e Bots', description: 'Utilização de machine learning para criação de assistentes virtuais e BOTs que interagem com as pessoas.' },
  { name: 'Novas Interfaces de Interação', description: 'Novas formas de interação entre pessoas e máquinas, por meio de voz, sensores de movimento e até mesmo leitura de ondas cerebrais.' },
  { name: 'Diversidade e Inclusão', description: 'Construção de uma cultura organizacional de diversidade e inclusão, para criar comunidades mais inovadoras por meio da justiça social.' },
  { name: 'Liderança Adaptativa', description: 'Desvincular a atividade da liderança ao status ou autoridade, incentivando a capacidade de mobilizar pessoas para atacar desafios.' },
  { name: 'Maternidade/Paternidade na Carreira', description: 'Novas formas de pensar e abordar maternidade e paternidade dentro das organizações.' },
  { name: 'Autogestão', description: 'Prática que incentiva a gestão de empresas pelas próprias pessoas, de forma descentralizada.' },
  { name: 'Aprendizado Contínuo', description: 'Prática de busca e compartilhamento constantes de novos conhecimentos e habilidades.' },
  { name: 'Gestão menos Hierarquizada', description: 'Eliminação de uma hierarquia vertical rígida e compartilhamento da responsabilidade sobre os resultados organizacionais.' },
  { name: 'Habilidades para trabalhos do futuro', description: 'Conhecimentos e competências necessários para ter sucesso em atividades profissionais nos próximos anos.' },
  { name: 'Performance com Propósito', description: 'Investimentos em práticas que promovam propósitos individuais e o bem estar das pessoas para aumentar a performance coletiva.' },
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
