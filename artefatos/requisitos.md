## **Especificação de Requisitos**

A especificação de requisitos é uma etapa fundamental no desenvolvimento do projeto. Esta seção visa detalhar as funcionalidades essenciais que o sistema deve atender para assegurar que todas as necessidades operacionais, logísticas e de negócios da Vivo sejam contempladas de maneira eficiente e eficaz. Os requisitos funcionais foram definidos em conjunto com o parceiro durante o workshop inicial, refletindo as expectativas e demandas específicas para a gestão de estoque em múltiplos centros de distribuição e lojas.

### **Requisitos Funcionais**

**Gestão de Estoque**  
Os requisitos funcionais relacionados à gestão de estoque são cruciais para a operação bem-sucedida do sistema. Eles asseguram que a sincronização e atualização dos dados de estoque ocorram de forma eficiente, permitindo uma visão integrada e precisa dos inventários distribuídos entre diferentes locais, como centros de distribuição e lojas. Isso é vital para otimizar a logística, melhorar a experiência do cliente e reduzir custos operacionais.

#### RF1: Consulta de Estoque
- **Descrição:** O sistema deve permitir a consulta de estoque, fornecendo uma visão clara e precisa dos itens disponíveis nos diferentes centros de distribuição e lojas.
  
- **Plano de Teste:** Simular a consulta de itens do estoque em diferentes locais e verificar se os dados estão corretos e atualizados.

#### RF2: Atualização de Estoque
- **Descrição:** O sistema deve permitir a atualização do estoque, garantindo que os dados sejam inseridos de forma precisa e sincronizados em todos os pontos de contato, como centros de distribuição e lojas.
  
- **Plano de Teste:** Simular a adição e retirada de itens do estoque em diferentes locais e verificar se as atualizações são refletidas corretamente nas interfaces de consulta.

#### RF3: Sincronização Automática de Dados de Estoque
- **Descrição:** O sistema deve sincronizar automaticamente os dados de estoque entre os centros de distribuição e as lojas, garantindo que as informações estejam atualizadas em todos os pontos de contato.
  
- **Plano de Teste:** Realizar operações de movimentação de estoque em um centro de distribuição e verificar a atualização automática nos sistemas das lojas.

#### RF4: Integração com SAP ECC para Importação e Validação de Estoque
- **Descrição:** O sistema deve integrar-se com o SAP ECC para realizar a importação e validação de estoque, assegurando que os dados estejam sincronizados e disponíveis para verificação durante o processo de compra.
  
- **Plano de Teste:** Simular uma compra e verificar se a importação e validação do estoque ocorrem corretamente através da integração com o SAP ECC.

#### RF5: Relatórios de Inventário
- **Descrição:** O sistema deve gerar relatórios detalhados de inventário, que incluam movimentações de estoque, status atual, e previsões de necessidade de reposição. Esses relatórios são fundamentais para a tomada de decisões estratégicas.
  
- **Plano de Teste:** Gerar diferentes relatórios e verificar a precisão e utilidade das informações apresentadas.

#### RF6: Interface de Usuário para Gestão de Estoque
- **Descrição:** O sistema deve fornecer uma interface de usuário intuitiva que permita aos operadores de logística e gestores de loja monitorar e ajustar o estoque conforme necessário. A interface deve ser de fácil navegação e oferecer todas as funcionalidades essenciais para a gestão de estoque.
  
- **Plano de Teste:** Avaliar a interface com usuários reais, coletar feedback e garantir que todas as funcionalidades sejam acessíveis e fáceis de usar.

#### RF7: Consulta de Disponibilidade de Produtos
- **Descrição:** O sistema deve permitir aos clientes finais consultar a disponibilidade de produtos com base no CEP informado durante a jornada de compra.
  
- **Plano de Teste:** Testar a consulta de disponibilidade para diferentes CEPs e verificar a precisão das informações retornadas.

#### RF8: Notificações de Baixa de Estoque
- **Descrição:** O sistema deve enviar notificações automáticas para os gestores quando o nível de estoque de um determinado item atingir um limite crítico, permitindo que ações de reposição sejam tomadas de forma proativa.
  
- **Plano de Teste:** Simular uma baixa de estoque e verificar se as notificações são enviadas corretamente e de forma oportuna.

### **Considerações Finais**
Os requisitos funcionais listados acima foram estabelecidos para garantir que o Sistema de Inventário Distribuído atenda às necessidades do parceiro, melhorando a eficiência operacional e a experiência do cliente. Cada requisito foi identificado com uma codificação única (RF1, RF2, etc.) para facilitar o rastreamento e a verificação ao longo do ciclo de desenvolvimento. Os planos de teste descritos asseguram que cada funcionalidade será validada de acordo com as especificações.

---

### **Requisitos Não Funcionais (RNFs)**

Os requisitos não funcionais são critérios fundamentais para o funcionamento eficiente e seguro do sistema, influenciando diretamente na qualidade e no desempenho. Conforme a norma ISO 25010, esses requisitos são divididos em categorias que abordam diferentes aspectos da qualidade do sistema.

#### RNF1: Tempo de Resposta
- **Descrição:** O sistema deve garantir tempos de resposta menores que 2 segundo durante consultas de estoque, mantendo alta performance mesmo sob condições de alta carga.
  
- **Plano de Teste:** Testes de carga e stress serão conduzidos utilizando o framework K6 para medir os tempos de resposta sob 600 requisições por segundo

#### RNF2: Compatibilidade
- **Descrição:** O sistema deve garantir integração fluida com várias plataformas de e-commerce, como Shopify e Magento, além de interoperabilidade com sistemas internos como o SAP ECC.
  
- **Plano de Teste:** Testes de integração serão realizados com plataformas específicas para verificar a compatibilidade.

#### RNF3: Usabilidade
- **Descrição:** O sistema deve fornecer uma interface de usuário intuitiva, acessível em múltiplos dispositivos, e permitir que as tarefas sejam realizadas com, no máximo, 3 cliques.
  
- **Plano de Teste:** Serão realizadas sessões de teste de usabilidade, com missões específicas na plataforma com usuários reais e coletado feedback pós-uso.

#### RNF4: Disponibilidade
- **Descrição:** O sistema deve operar com uma disponibilidade mínima de 99,9%, garantindo que as informações de estoque estejam sempre sincronizadas e acessíveis.
  
- **Plano de Teste:** Testes de simulação de falhas serão realizados para garantir que o sistema seja capaz de se recuperar rapidamente de erros.

#### RNF5: Segurança
- **Descrição:** O sistema deve proteger os dados sensíveis, implementando autenticação multifator e criptografia dos dados em trânsito e em repouso.
  
- **Plano de Teste:** Auditorias de segurança serão realizadas, incluindo testes de penetração para verificar a robustez da segurança.

#### RNF6: Velocidade da aplicação em picos de tráfego
- **Descrição:** O sistema deve ser construído de forma a garantir que 90% das páginas da aplicação de loja virtual devem ser carregadas para os usuários em, no máximo, 4 segundos em casos de pico de tráfego, que seriam cenários de 35 mil acessos por segundo
  
- **Plano de Teste:** Para testar o cumprimento desse requisito, serão realizados testes de carga que simulam o acesso simultâneo de múltiplos usuários. Testes de carga e stress serão conduzidos utilizando o framework K6 para medir os tempos de resposta com 35 mil acessos por segundo

#### RNF7: Elasticidade
- **Descrição**: O sistema deve ser capaz de alocar recursos, como processadores e banco de dados, de maneira elástica. Nesse sentido, o uso de recursos deve aumentar ou diminuir dinamicamente visando suportar o que está sendo exigido e economizar custos, conforme o necessário.

-**Plano de Teste**: Testes com o framework K6 com a taxa de crescimento das requisições cresce linearmente de 0 até 35000 requisições por segundo.

#### RNF8: Escalabilidade
- **Descrição:** O sistema deve ser capaz de escalar horizontalmente para suportar o aumento no volume de dados e no número de transações, sem perda de desempenho.
  
- **Plano de Teste:** Serão realizados testes de escalabilidade utilizando o K6 para simular cenários de alta carga, testando o comportamento do sistema sob diferentes volumes de dados e transações.

### **Considerações Finais**

Os Requisitos Não Funcionais (RNFs) são essenciais para garantir que o "Sistema de Inventário Distribuído" atenda às demandas operacionais enquanto adere a padrões de qualidade como a norma ISO 25010, assegurando eficiência, segurança e usabilidade. A implementação destes requisitos é vital para a satisfação dos usuários e a integridade operacional em um contexto de rápida evolução tecnológica. Complementando os Requisitos Funcionais, os RNFs formam um conjunto holístico que deve ser regularmente revisado e validado com todas as partes interessadas para manter o alinhamento com as metas do projeto e as necessidades emergentes do negócio.


## Teste RFN2
**Objetivo:**
Verificar a compatibilidade do sistema com plataformas de e-commerce como Shopify e Magento, além de garantir a interoperabilidade com sistemas internos como o SAP ECC.

**Descrição:**
O sistema deve permitir integração sem falhas com diversas plataformas e garantir que os dados de produtos, pedidos e estoque sejam trocados corretamente entre o sistema da loja e essas plataformas externas.

**Impedimentos:
Infelizmente, não foi possível realizar os testes de integração com as plataformas de e-commerce Shopify e Magento, nem com o sistema SAP ECC. Isso se deu pela indisponibilidade dos ambientes necessários para essas integrações no momento dos testes.