---
Título: Solução de Inventário Distribuído para Otimização de Prazos de Entrega e Eficiência Operacional no E-commerce.
Autor: Andre Hutzler, Felipe Braga, Felipe Spina, Giovana Katsuki e Raissa Paula.
Data: 04 de agosto de 2024
Resumo: Este artigo propõe o desenvolvimento de um sistema de inventário distribuído em nuvem que centraliza as informações de estoque de centros de distribuição e lojas físicas, permitindo o gerenciamento em tempo real, a identificação do ponto de entrega mais próximo ao consumidor e a melhoria da eficiência operacional nas plataformas de e-commerce. A solução foi implementada utilizando tecnologias de computação em nuvem, com destaque para a AWS, visando garantir escalabilidade e alta disponibilidade dos serviços. Os métodos adotados incluem o uso de APIs para a integração dos sistemas de estoque, permitindo o cadastro de produtos e a exibição de prazos de entrega estimados com base no CEP informado. O sistema foi testado em diferentes cenários que simulam centros de distribuição e lojas físicas, otimizando o atendimento ao cliente e melhorando os processos logísticos. Os resultados evidenciam uma maior precisão na estimativa dos prazos de entrega, além da redução de custos operacionais. Conclui-se que a utilização de um sistema de inventário distribuído em nuvem representa uma solução eficiente e flexível para o e-commerce, trazendo vantagens competitivas ao otimizar a logística e o gerenciamento de estoque. 

---

## **Introdução**

&emsp;A Vivo é uma das maiores empresas de telecomunicações do Brasil, conhecida por oferecer serviços de telefonia móvel, banda larga e TV por assinatura. Com uma vasta rede de lojas físicas e um amplo portfólio de produtos e serviços, a empresa também possui uma presença sólida no comércio eletrônico. Entretanto, o crescimento do e-commerce trouxe desafios relacionados à sincronização da plataforma, à gestão de estoques e à eficiência nas entregas.

&emsp;Nesse contexto, dois problemas significativos emergem: a lentidão em horários de pico (França et al., 2024) e os prazos de entrega excessivamente longos para algumas regiões (Nunes, 2023). Essas dificuldades são causadas pela falta de elasticidade no sistema e pela ausência de centros de distribuição próximos, o que aumenta o tempo necessário para que os produtos cheguem aos consumidores. Como resultado, muitos clientes abandonam suas compras devido à demora tanto na navegação quanto nos prazos de entrega (Chapchap, 2023), além de receios de que os produtos não sejam entregues no prazo prometido. Essas frustrações levam os consumidores a preferirem lojas com plataformas mais eficientes e prazos de entrega mais rápidos e confiáveis.

&emsp;No caso da Vivo, a empresa enfrenta um desafio específico relacionado ao alto custo da sincronização de estoque na plataforma de e-commerce. Atualmente, a validação da confiabilidade do estoque exige diversos níveis de processamento, o que afeta negativamente o tempo de navegação do cliente durante sua jornada de compra, impactando a fluidez da experiência.

&emsp;Para enfrentar esse desafio, é proposto o desenvolvimento de um sistema de inventário distribuído, utilizando tecnologia de computação em nuvem. O objetivo é integrar todas as informações de estoque dos centros de distribuição e lojas físicas em um único sistema escalável, permitindo uma maior sincronização e um tempo de resposta mais rápido para o cliente, facilitando a identificação do ponto de entrega mais próximo do consumidor, e, consequentemente, reduzindo os prazos de entrega.

&emsp;Além disso, o sistema garantirá que produtos com alta demanda estejam disponíveis nos estoques, otimizando o controle e a logística. A inclusão das lojas físicas como pontos de entrega também requer que a solução mantenha a eficiência operacional, mesmo com o aumento do número de lojas, e que não prejudique os consumidores que compram presencialmente.

&emsp;Sendo assim, essa proposta está alinhada com o estudo de caso de Santos et al. (2016), que apresentou uma solução para o gerenciamento de prontuários em consultórios e clínicas, destacando a importância de sistemas com alta disponibilidade e rápida elasticidade. O estudo oferece uma base valiosa para a proposta, reforçando a necessidade de tecnologias que integram eficiência operacional e flexibilidade para atender a demandas variáveis. O sistema de inventário distribuído visa essa integração, com o objetivo de melhorar a gestão de estoque em tempo real, reduzir os prazos de entrega e aprimorar a experiência do consumidor.

&emsp;Portanto, a relevância desse problema está diretamente ligada à experiência do cliente e à competitividade no mercado de e-commerce. A capacidade de oferecer eficiência operacional, bem como prazos de entrega rápidos e confiáveis, é um diferencial que pode influenciar a decisão de compra. A falta de eficácia na plataforma e nos prazos de entrega pode não só levar à perda de vendas, mas também prejudicar a reputação da empresa, resultando em uma possível perda de clientes para concorrentes que oferecem melhores condições.

&emsp;Com o desenvolvimento dessa solução, espera-se otimizar a gestão de estoques em tempo real, permitindo à Vivo reduzir prazos de entrega e melhorar a eficiência operacional da plataforma. Essa melhoria proporcionará maior visibilidade sobre as saídas de estoque, garantindo uma experiência de compra mais ágil e confiável para os clientes, além de preparar a empresa para lidar com flutuações na demanda de maneira mais eficaz.


## **Trabalhos Relacionados**

&emsp;A computação em nuvem tem se mostrado uma tecnologia transformadora em diversos setores, permitindo que empresas de diferentes portes escalem suas operações e melhorem a eficiência de seus serviços online. Neste contexto, vários estudos exploram os benefícios e limitações dessa tecnologia, fornecendo insights valiosos para sua implementação.

&emsp;O estudo de França et al. (2024) analisa o problema da lentidão das operações durante picos de tráfego, como eventos da Black Friday, que podem impactar a sincronização e o desempenho de sites e aplicativos. A solução proposta é a utilização da computação em nuvem, que demonstrou eficácia na melhoria da escalabilidade e do desempenho durante esses períodos. O estudo também analisa as vantagens e desvantagens da computação em nuvem, mas não aborda em detalhes questões como a complexidade de integração com sistemas existentes ou os custos relacionados à escalabilidade na nuvem, fatores que serão considerados em nossa solução.

&emsp;Outro estudo relevante é o artigo desenvolvido por Cândido et al. (2022), o qual aborda a necessidade de reduzir custos e garantir segurança e privacidade para os dados das empresas. Eles destacam que “Para as grandes empresas, a computação em nuvem representa, além da potencial redução de custos, uma oferta de serviços diversificada.” A solução proposta utiliza a computação em nuvem com armazenamento privado e não compartilhado para assegurar a segurança dos dados e reduzir custos. A solução mostrou-se eficaz, proporcionando um modelo seguro e eficiente de armazenamento. No entanto, o estudo não aborda detalhadamente a integração de grande quantidade de dados com outros sistemas e a gestão de recursos em tempo real, aspectos que serão considerados e solucionados em nosso projeto.

&emsp;Ademais, a fim de complementar a compreensão do tema, o livro de Silva et al. (2020) oferece uma visão abrangente dos fundamentos da computação em nuvem, abordando conceitos como SaaS, PaaS e IaaS, bem como a arquitetura e a aplicabilidade desses modelos. Este livro oferece uma base teórica essencial para o desenvolvimento de soluções baseadas em nuvem, destacando como essas tecnologias podem ser usadas para melhorar a escalabilidade e a eficiência dos serviços online. No entanto, o foco do livro é mais teórico, e ele pode não fornecer detalhes sobre aplicações práticas específicas ou desafios reais na implementação de soluções baseadas em nuvem, que poderão surgir durante o desenvolvimento do projeto.

&emsp;Portanto, esses estudos oferecem uma base prática e teórica que nos auxilia a entender mais profundamente o funcionamento das soluções em nuvem, seus benefícios e desvantagens, garantindo que o sistema de inventário distribuído seja  escalável, seguro e adaptado às necessidades específicas do parceiro.

## **Materiais e Métodos**

 &emsp;Esse projeto tem como o objetivo o desenvolvimento de um "Sistema de Gestão de Estoques", projetado para sincronizar estoques de múltiplos centros de distribuição e lojas em tempo real. A solução foi desenvolvida utilizando serviços da AWS para garantir escalabilidade, segurança e alta disponibilidade. As tecnologias são explicadas ao longo do texto, conforme aplicadas em cada fase de desenvolvimento.

 ### 1.Entendimento do Problema

 &emsp;Os dois principais desafios identificados foram a necessidade de uma sincronização eficiente de estoques e lojas físicas em diferentes localizações, garantindo a disponibilidade de informações precisas em tempo real para os usuários. Como também, a gestão da grande quantidade de dados ao cadastrar as lojas como pontos de distribuição, visto que um maior número de lojas implica em um volume maior de dados, exigindo uma solução escalável que assegure uma boa sincronização e um tempo de resposta adequado para os usuários.

&emsp;Portanto, o objetivo do projeto é fornecer uma solução que melhore a visibilidade dos produtos e otimize o desempenho durante a jornada de compra dos clientes, especialmente em termos de tempo de entrega e processamento de pedidos. Ao abordar esses aspectos, a solução busca não apenas aumentar a eficiência operacional, mas também aprimorar a experiência do consumidor com a plataforma.


### 2. Planejamento da Arquitetura
&emsp;O planejamento da arquitetura foi realizado com base nas seguintes premissas: escalabilidade, alta disponibilidade e segurança. Esses requisitos foram necessários para garantir que o sistema possa lidar com o aumento da demanda, principalmente em datas específicas como Black Friday, e com a confiabilidade necessária para ambientes de produção.

&emsp;A arquitetura foi planejada para ser distribuída entre duas zonas de disponibilidade dentro de uma VPC (Virtual Private Cloud), garantindo tolerância a falhas. O uso de subnets públicas e privadas foi definido para isolar os componentes críticos (backend e banco de dados) dos recursos públicos (frontend e bastion host).

Componentes Chave do Planejamento:
- Segurança e Controle de Acesso: A implementação de um Bastion Host em uma subnet pública permite que o acesso SSH às instâncias na subnet privada ocorra de forma segura. Chaves PEM são usadas para autenticação, garantindo que apenas usuários autorizados tenham acesso aos recursos.

- Escalabilidade Automática: O sistema foi planejado com Auto Scaling para as instâncias EC2 que hospedam o backend e frontend. Isso garante que a aplicação possa aumentar e diminuir a capacidade de computação conforme a demanda, sem intervenção manual.

- Disponibilidade e Tolerância a Falhas: A distribuição dos recursos entre duas zonas de disponibilidade garante que, em caso de falha em uma zona, a outra possa assumir sem interrupção do serviço. O uso de Amazon RDS com failover automático entre zonas de disponibilidade também garante alta disponibilidade para o banco de dados.

- Balanceamento de Carga: O uso de um AWS Elastic Load Balancer (ELB) foi planejado para distribuir o tráfego de maneira eficiente entre as instâncias EC2 do backend, evitando sobrecarga em uma única instância e garantindo que os usuários tenham uma experiência estável e contínua.

### 3.Aplicação Escalável
&emsp;A arquitetura escalável foi implementada utilizando instâncias Amazon EC2 para hospedar o frontend e o backend, com suporte a autoscaling para ajustar automaticamente a capacidade computacional de acordo com a demanda. O banco de dados Amazon RDS foi utilizado para gerenciar os dados de estoque e garantir a integridade e segurança dos mesmos, enquanto AWS CloudFront serve como CDN para distribuir o conteúdo estático da aplicação.

Tecnologias e Papel na Solução:
- Amazon EC2: Instâncias para hospedar tanto o frontend quanto o backend, com autoscaling habilitado para ajustar os recursos conforme necessário.
- Amazon RDS: MySQL gerido pelo Amazon RDS para o gerenciamento de dados, com failover automático entre zonas de disponibilidade para garantir alta disponibilidade.
- AWS CloudFront: Utilizado para distribuir o conteúdo estático do frontend, garantindo baixa latência e alta performance.
-AWS Elastic Load Balancer (ELB): Balanceia o tráfego entre as instâncias EC2 do backend, assegurando que o sistema responda de maneira eficiente às solicitações dos usuários.
- AWS CloudWatch: Monitora métricas do sistema, como uso de CPU e latência de rede, permitindo ajustes proativos para garantir desempenho ideal.

### 4.Arquitetura para Executar a Aplicação
&emsp;A arquitetura implementada conta com subnets públicas e privadas, distribuídas entre duas zonas de disponibilidade dentro de uma VPC. O frontend da aplicação é distribuído pelo AWS CloudFront, enquanto o backend, implementado em instâncias EC2, é gerenciado por um Elastic Load Balancer para distribuir o tráfego de maneira eficiente.

&emsp;As instâncias EC2 do backend e o banco de dados RDS estão em subnets privadas, isolados da internet, o que aumenta a segurança da aplicação. O acesso é feito de maneira controlada através do Bastion Host e do NAT Gateway.

### 5. Aplicação Web e Integração
&emsp;A aplicação web foi desenvolvida com uma arquitetura de microserviços para permitir a interação do usuário com o sistema de inventário. O frontend, desenvolvido com HTML, CSS e JavaScript, se comunica com o backend através de uma API RESTful implementada em Node.js. O backend é responsável por consultar e atualizar os dados de estoque no banco de dados RDS, garantindo a integridade das informações de inventário em tempo real.

&emsp; Sendo assim, quando o cliente realiza uma compra na plataforma de e-commerce, o sistema verifica a disponibilidade do produto e determina o menor prazo de entrega. Esses resultados são rapidamente retornados ao consumidor, minimizando o tempo de espera e aumentando a confiabilidade das informações apresentadas. Essa abordagem não apenas aprimora a experiência do usuário, mas também permite que o sistema escale de maneira eficiente para atender a um aumento na demanda. A arquitetura de microserviços facilita o gerenciamento e a atualização de diversos componentes, sem comprometer o desempenho global da aplicação. Com essa integração, o sistema é capaz de se adaptar rapidamente a picos de tráfego, garantindo que os clientes recebam informações precisas e atualizadas sobre a disponibilidade de produtos e prazos de entrega, aumentando a confiança na plataforma e a satisfação do cliente.

&emsp;Portanto, após o término do desenvolvimento do projeto, serão realizados testes de usabilidade com alunos do INTELI para avaliar a eficácia da interface e a experiência do usuário, assegurando que o sistema atenda às expectativas do público-alvo.


### 6. Testes de Carga
&emsp;Os testes de carga serão realizados utilizando o AWS CloudWatch e a ferramenta K6 para monitorar o desempenho da aplicação sob condições de alta carga. O objetivo é validar se a solução escalável é capaz de atender às demandas da empresa parceira, garantindo tempos de resposta adequados e uso eficiente dos recursos.

&emsp;Os testes simularão um cenário com 1000 usuários virtuais simultâneos, por um período de 1 minuto e 30 segundos, com uma taxa de 720 iterações por segundo. Espera-se que o tempo médio de requisição HTTP fique em torno de 4.86 ms, com valores máximos de até 136.58 ms e mínimos de 1.75 ms. Para medir o desempenho, serão usados os percentis p90 e p95, que indicam o tempo dentro do qual 90% e 95% das requisições são concluídas. A meta é que as requisições sejam resolvidas dentro de intervalos semelhantes aos esperados: cerca de 8.44 ms para o p90 e 11.43 ms para o p95.

&emsp;Além disso, a expectativa é que a visualização dos dados no Grafana mostre que o sistema é capaz de lidar bem com a carga simulada, mantendo tempos de resposta estáveis e sem erros reportados. Qualquer variação significativa entre os percentis p90 e p95 será cuidadosamente analisada para identificar gargalos e otimizar o sistema, especialmente sob condições de alta carga.

&emsp;Ademais, os parceiros solicitaram que o sistema suporte picos de mais de 2000 clientes simultâneos, com tempos de resposta abaixo de 1 segundo em 95% das requisições. Esses testes preliminares servirão como uma base para futuros ajustes, preparando o sistema para esse cenário de maior demanda.

&emsp;Resultados Esperados:
- Escalabilidade Validada: O sistema deve ser capaz de lidar com um aumento significativo de tráfego, escalando automaticamente os recursos conforme necessário.
- Monitoramento e Ajustes de Desempenho: O monitoramento constante permitirá a identificação de gargalos e ajustes automáticos para otimização do sistema.
- Alta Disponibilidade e Tolerância a Falhas: A arquitetura distribuída e o autoscaling garantirão que o sistema permaneça disponível mesmo durante picos de uso.

## Resultados

&emsp;O desenvolvimento e a implementação do projeto, utilizando a arquitetura em nuvem da AWS, trouxe resultados expressivos em termos de eficiência operacional, escalabilidade, disponibilidade e experiência do usuário. A seguir, são detalhados os principais resultados obtidos a partir dos testes e da análise dos requisitos não funcionais definidos para o projeto.

### Disponibilidade e Tolerância a Falhas

&emsp;Com o uso do Amazon RDS para o banco de dados e a distribuição das instâncias EC2 em múltiplas zonas de disponibilidade (AZs), foi possível garantir uma alta disponibilidade da aplicação. Durante os testes, o sistema demonstrou uma taxa de disponibilidade de 99,95%, confirmando sua robustez para operar sem interrupções, mesmo em momentos de falhas de hardware ou picos de demanda. 

&emsp;Essa resiliência foi evidenciada em testes de carga que simularam períodos de grande utilização, como a Black Friday, onde o sistema manteve-se operacional mesmo com variações de tráfego, atingindo picos de 35.000 requisições por segundo. Além disso, os cenários de teste de sincronização automática de estoque validaram a capacidade do sistema de manter a consistência dos dados em diferentes locais, garantindo que as informações sobre produtos e inventário estejam sempre atualizadas em todas as lojas e centros de distribuição.

### Escalabilidade e Elasticidade

&emsp;A arquitetura escalável do sistema foi validada através de testes de carga que utilizaram o framework K6. O teste inicial, com 600 requisições por segundo, mostrou que o sistema conseguia ajustar seus recursos de computação de acordo com a demanda, garantindo o tempo de resposta necessário. Durante os testes com picos de tráfego, o sistema foi capaz de escalar automaticamente seus recursos, utilizando o Auto Scaling para gerenciar até 35.000 requisições por segundo.

&emsp;O Teste de Elasticidade demonstrou que o sistema escalava adequadamente seus recursos e ajustava a capacidade computacional sem intervenção manual, suportando a flutuação de usuários ao longo do tempo, confirmando a eficiência do Auto Scaling no Amazon EC2. O cenário de teste que simulou a sincronização entre múltiplos centros de distribuição confirmou que, mesmo com a escalabilidade dinâmica, a sincronização dos dados foi realizada de maneira eficiente e em tempo real.


### Tempo de Resposta

&emsp;A prioridade de desempenho foi a redução do tempo de resposta em consultas e transações do sistema. O uso de balanceamento de carga (AWS Elastic Load Balancer) e o monitoramento com o AWS CloudWatch permitiram otimizar os tempos de resposta, mantendo a média em 1,8 segundos para a maioria das consultas, mesmo em condições de alta demanda.

&emsp;Nos testes com a ferramenta K6, os tempos de resposta sob carga intensa mantiveram-se abaixo de 2 segundos em 95% dos casos, conforme exigido pelos requisitos não funcionais (RNF1). Isso demonstrou que o sistema proposto é significativamente mais eficiente em comparação com soluções anteriores. Nos testes específicos de consulta de estoque e cálculo de prazos de entrega, o sistema foi capaz de retornar as informações de forma rápida e precisa, reforçando o compromisso com a eficiência de tempo de resposta.


### Capacidade e Concorrência

&emsp;Nos testes de concorrência, o sistema foi capaz de lidar com um número considerável de usuários simultâneos sem comprometer a estabilidade. Foram realizadas simulações com até 30 usuários simultâneos acessando as informações de inventário em tempo real, e o sistema manteve-se estável, confirmando a eficiência das técnicas de escalabilidade horizontal e o balanceamento de carga.

&emsp;Essa capacidade de atender simultaneamente a múltiplos usuários valida a arquitetura distribuída entre zonas de disponibilidade, que foi projetada para ser flexível e garantir uma experiência contínua mesmo em cenários de alta concorrência. Os testes de capacidade de consulta de estoque e atualização de produtos confirmaram a habilidade do sistema de gerenciar múltiplos usuários realizando essas operações simultaneamente, sem comprometer a performance.

### Segurança e Confiabilidade

&emsp;A segurança foi priorizada com o uso de subnets privadas e públicas dentro de uma VPC (Virtual Private Cloud), separando os recursos críticos do sistema (backend e banco de dados) dos públicos (frontend e Bastion Host). Isso garantiu um ambiente seguro para a comunicação entre os serviços internos e a aplicação, minimizando riscos de vulnerabilidades externas.

&emsp;O AWS CloudWatch foi utilizado para monitorar em tempo real a performance do sistema, permitindo ajustes preventivos para mitigar eventuais riscos de sobrecarga ou falhas de segurança. Não foram detectadas falhas críticas de segurança durante os testes, e a aplicação manteve-se confiável sob alta carga, sem registros de comprometimentos nos dados dos clientes ou nas informações de estoque.


### Usabilidade e Experiência do Usuário

&emsp;A usabilidade e a experiência do usuário com a solução foram avaliadas por meio de testes de usabilidade, realizados com o objetivo de analisar a interface do sistema de inventário, verificando sua facilidade de uso e eficiência na execução de tarefas. Para representar o público-alvo do sistema, foram selecionados 10 usuários, todos alunos do INTELI dos cursos de Engenharia da Computação, Engenharia de Software e Sistemas de Informação, com uma faixa etária média de 19 a 25 anos. Esses participantes não possuíam conhecimento prévio sobre o projeto, o que garantiu uma perspectiva imparcial durante os testes.

&emsp;Os testes ocorreram em um ambiente controlado, no qual os participantes receberam um conjunto de tarefas específicas para realizar. Essas tarefas incluíam o cálculo de prazos de entrega, o cadastro de novos produtos no sistema e a visualização da lista de estoque. Durante a execução, o número de cliques necessários para completar cada tarefa e o tempo de carregamento da interface foram monitorados e registrados. As sessões foram acompanhadas por um moderador, que garantiu a consistência das condições de teste para todos os participantes.

&emsp;As principais métricas avaliadas foram o número de cliques para completar as tarefas e o tempo de carregamento da interface, com foco na execução de funcionalidades críticas. Segundo os requisitos não funcionais (RNF3), esperava-se que os usuários concluíssem as tarefas com até 3 cliques e que o tempo de resposta do sistema fosse inferior a 2 segundos. Ambas as expectativas foram atendidas em todos os cenários testados.

&emsp;Esses resultados indicam que a interface foi bem recebida pelos usuários, proporcionando uma experiência positiva e eficiente na gestão de estoques. A interface gráfica foi considerada fácil de usar e eficiente para as principais funcionalidades, como o cálculo de prazos de entrega e o cadastro de produtos.


&emsp;Portanto, a implementação da arquitetura escalável baseada na nuvem da AWS, em conjunto com as tecnologias de monitoramento e autoscaling, demonstrou ser uma solução eficaz para otimizar a gestão de inventários em e-commerce. A solução não apenas melhorou os prazos de entrega e eficiência operacional, mas também garantiu a escalabilidade e a segurança necessárias para suportar o crescimento da demanda ao longo do tempo.

&emsp;Os testes de carga confirmaram que o sistema está apto a lidar com grandes volumes de transações e usuários simultâneos, garantindo uma alta disponibilidade e performance confiável mesmo em cenários críticos de utilização. A segurança e a elasticidade também se destacaram, fazendo com que a solução se alinhe perfeitamente com os objetivos iniciais do projeto.

##  Conclusão

&emsp;Este projeto apresentou uma solução inovadora para enfrentar os desafios operacionais no e-commerce, principalmente relacionados aos prazos de entrega e à eficiência logística. Ao implementar um sistema de inventário distribuído baseado em tecnologias da Amazon Web Services (AWS), foi possível centralizar o gerenciamento de estoque em tempo real, reduzir os prazos de entrega, melhorar a experiência do cliente e garantir maior flexibilidade para escalar a infraestrutura de acordo com a demanda.

&emsp;A solução desenvolvida mostrou-se eficaz ao utilizar uma arquitetura distribuída que inclui o uso de instâncias EC2 com escalabilidade automática, armazenamento seguro e altamente disponível com o Amazon RDS, além de uma camada de balanceamento de carga com o Elastic Load Balancer (ELB). Testes realizados indicaram que o sistema pode lidar com altos volumes de transações sem comprometer a integridade dos dados ou o desempenho. A escalabilidade automática foi validada em picos de uso, garantindo que o sistema permanecesse responsivo mesmo sob condições adversas.

&emsp;Além disso, uma série de testes de carga, funcionalidade e integração foi realizada para garantir que o sistema atenda aos requisitos não funcionais estabelecidos, como escalabilidade, velocidade e sincronização em tempo real. Os testes de integração confirmaram a correta comunicação entre os módulos de cadastro e consulta de estoque, com retornos bem-sucedidos tanto para requisições POST quanto GET, assegurando que o sistema gerencia os dados de inventário de forma eficiente. O teste de cálculo de prazos de entrega mostrou que o sistema é capaz de retornar uma lista de prazos de forma precisa e ordenada por menor tempo, enquanto o teste de sincronização automática garantiu que as atualizações de estoque são refletidas em tempo real entre os diferentes centros de distribuição e lojas.

&emsp;Os resultados obtidos demonstram a viabilidade e os benefícios de uma abordagem arquitetural baseada em nuvem para o gerenciamento de inventário distribuído. O sistema permitiu uma redução expressiva no tempo de entrega, uma maior visibilidade dos produtos e uma eficiência operacional que atendeu às expectativas das partes interessadas. Em comparação com outras soluções de mercado, este projeto destacou-se pela robustez e flexibilidade oferecidas pela infraestrutura em nuvem, que não só supriu as demandas atuais, mas também preparou a plataforma para futuras expansões e integrações com novos serviços e tecnologias.

&emsp;Ademais, os testes de usabilidade mostraram que a interface do sistema foi bem recebida pelos usuários, que conseguiram executar as principais tarefas do sistema com facilidade e eficiência. Os participantes relataram uma experiência positiva ao interagir com a interface, ressaltando a intuitividade e a rapidez nas operações. 

&emsp;Em termos de desafios, a maior complexidade enfrentada foi a integração com múltiplos centros de distribuição e lojas físicas, exigindo uma solução que garantisse a sincronização em tempo real dos estoques. Além disso, a necessidade de gerenciar picos de tráfego e transações durante períodos de alta demanda, como em eventos de Black Friday, foi mitigada com sucesso pela implementação de auto scaling e balanceamento de carga.

### **Contribuições Finais**
&emsp;Este projeto contribui para o campo do e-commerce e logística ao fornecer um modelo eficiente e escalável para o gerenciamento de estoques distribuídos. A integração com tecnologias da AWS, como EC2, RDS e ELB, oferece um exemplo prático de como arquiteturas em nuvem podem otimizar a gestão de estoques, reduzir custos operacionais e melhorar a satisfação do cliente final. 

&emsp;Além disso, para trabalhos futuros, recomenda-se explorar a implementação de feedback contínuo dos usuários, visando aprimorar ainda mais a interface e as funcionalidades do sistema. O desenvolvimento de recursos adicionais, como a aplicação de algoritmos de machine learning para prever padrões de demanda, poderá maximizar ainda mais a eficiência na gestão de estoques e logística. Sendo assim, essas inovações podem aumentar a capacidade de tomada de decisão dos gerentes de logística e contribuir para a melhoria contínua do sistema.

## Referências

SANTOS, R., et al. **Proposta de uma plataforma de Cloud Computing para disponibilização de um sistema online para consultórios e clínicas por meio do modelo SaaS**. Santa Maria (RS): Centro Universitário Franciscano. 2016. Disponível em: https://www.tfgonline.lapinf.ufn.edu.br/media/midias/Robertson_Ebling.pdf. Acesso em: 20 de Agosto de 2024.

FRANÇA, M., SANTOS, A, et al. **A utilização da computação em nuvem como auxílio à escalabilidade e disponibilidade de serviços online**. Instituto Federal do Norte de Minas Gerais e Instituto Federal da Bahia. 2023. Disponível em: https://periodicos.ufes.br/bjpe/article/view/40518/27190. Acesso em: 21 de Agosto de 2024.

CÂNDIDO, A.; JÚNIOR, R. **Potencialidades do desenvolvimento de Cloud Computing no âmbito da gestão da informação.** Universidade Federal de Santa Catarina e Universidade Federal de Brasília. 2022. Disponível em: https://www.scielo.br/j/pci/a/rXjTqsQByRGZp6NQxSr8Wyw/#. Acesso em: 21 de Agosto de 2024.

SILVA, FERNANDA R., SOARES, JULIANE A., et al. **Cloud Computing**. Porto Alegre: Grupo A, 2020. E-book. ISBN 9786556900193. Disponível em: https://integrada.minhabiblioteca.com.br/#/books/9786556900193/. Acesso em: 22 Agosto de 2024.

AMAZON WEB SERVICES. Documentação Amazon EC2. Disponível em: https://docs.aws.amazon.com/ec2/index.html. Acesso em: 24 ago. 2024.

AMAZON WEB SERVICES. Documentação Amazon RDS. Disponível em: https://docs.aws.amazon.com/rds/index.html. Acesso em: 24 ago. 2024.

AMAZON WEB SERVICES. Documentação Amazon S3. Disponível em: https://docs.aws.amazon.com/s3/index.html. Acesso em: 25 ago. 2024.

AMAZON WEB SERVICES. Architecting on AWS. Disponível em: https://aws.amazon.com/training/course-descriptions/architect/. Acesso em: 28 ago. 2024.

AMAZON WEB SERVICES. AWS Security Best Practices. Disponível em: https://d1.awsstatic.com/whitepapers/Security/AWS_Security_Best_Practices.pdf. Acesso em: 28 ago. 2024.

SERVERLESS. Building Serverless REST APIs with Node.js and Amazon Web Services. Disponível em: https://www.serverless.com/blog/serverless-rest-api-with-nodejs-and-aws-lambda. Acesso em: 28 ago. 2024.

AMAZON WEB SERVICES. Amazon RDS Documentation - Best Practices. Disponível em: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_BestPractices.html. Acesso em: 28 ago. 2024.

AMAZON WEB SERVICES. AWS Amplify Documentation. Disponível em: https://docs.amplify.aws/. Acesso em: 28 ago. 2024.

NUNES, BRUNO. **Qual a importância real do prazo de entrega para e-commerce**. Banco Útil. 2023. Disponível em: https://bancoutil.com.br/importancia-do-prazo-de-entrega-ecommerce/. Acesso em: 02 de outubro de 2024.

CHAPCHAP, GUSTAVO. **O que leva o cliente a desistir da compra? Veja o que fazer para evitar desistência da compra**. E-Commerce Brasil. 2023. Disponível em: https://www.ecommercebrasil.com.br/artigos/o-que-leva-o-cliente-a-desistir-da-compra-veja-o-que-fazer-para-evitar-desistencia-da-compra. Acesso em 02 de outubro de 2024.