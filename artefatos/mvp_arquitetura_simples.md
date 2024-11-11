# MVP: Arquitetura Simples

## 1. **Introdução**
   &emsp;&emsp;Este documento foi criado para detalhar a arquitetura inicial do MVP (Produto Viável Mínimo) desenvolvido para o projeto de sistema de inventário distribuído da Vivo. Este MVP serve como uma base sólida sobre a qual o sistema será construído e expandido em futuras iterações. O objetivo deste MVP é demonstrar a viabilidade técnica da solução proposta, integrando componentes essenciais, como backend, banco de dados e frontend, todos operando em um ambiente AWS.
   
   &emsp;&emsp;Assim, esta seção específica documenta a implementação técnica inicial, descrevendo em detalhes a arquitetura da solução, a configuração dos componentes na AWS, e a execução de operações fundamentais (como operações CRUD) para garantir que os principais requisitos do sistema estejam atendidos. Este documento também inclui a validação dos componentes através de testes com Postman e demonstrações em vídeo, assegurando que o MVP está funcionando conforme esperado e pronto para suportar o desenvolvimento contínuo.

   &emsp;&emsp;E portanto, o MVP valida a arquitetura técnica, e serve como uma base de conhecimento para a equipe de desenvolvimento, stakeholders, e orientadores. Ele fornece uma visão clara de como os componentes do sistema interagem entre si e como a infraestrutura AWS suporta o funcionamento do sistema de inventário distribuído.

## 2. **Arquitetura da Solução**
   - **Visão Geral:**
     - O sistema é composto por três componentes principais:
       1. **Backend:** Implementado em Node.js, rodando em uma instância EC2.
       2. **Banco de Dados:** MySQL hospedado no AWS RDS.
       3. **Frontend:** Página web estática hospedada em AWS S3 ou EC2 (dependendo do tipo de conteúdo).

<div align="center">
<p><b>Figura 1 </b>- Diagrama de Arquitetura do Sistema de Inventário Distribuído </p> <img src=".\img\Diagrama_de_Arquitetura.png" alt="Representação visual dos grafos">
<p>Fonte: elaborado por GDE</p>
</div>


## 3. **Descrição Técnica**
   ### 3.1 **Backend**
   - **Tecnologia:** Node.js e Express rodando em EC2.
   - **Funcionalidade:**
     - Implementação de endpoints GET e POST para gerenciamento de lojas e CEPs.
     - Integração com o banco de dados MySQL no AWS RDS.
   - **Endpoints Implementados:**
     - **GET /stores:** Retorna todos os registros de lojas.
     - **POST /stores:** Insere um novo registro de loja com informações de CEPs e estimativa de entrega.
   - **Código Resumido:**
     - **Trecho de Código `app.js`:**
       ```javascript
       app.get('/stores', (req, res) => {
           const sql = 'SELECT * FROM stores';
           connection.query(sql, (err, results) => {
               if (err) {
                   console.error('Error executing query:', err);
                   res.status(500).send('Error executing query');
                   return;
               }
               res.json(results);
           });
       });

       app.post('/stores', (req, res) => {
           const { initialZipcode, finalZipcode, estimatedDays } = req.body;
           const sql = 'INSERT INTO stores (initialZipcode, finalZipcode, estimatedDays) VALUES (?, ?, ?)';
           connection.query(sql, [initialZipcode, finalZipcode, estimatedDays], (err, results) => {
               if (err) {
                   console.error('Error executing query:', err);
                   res.status(500).send('Error executing query');
                   return;
               }
               res.send('Data received');
           });
       });
       ```

   - **Explicação do código:** Este trecho de código faz parte do backend implementado em Node.js e Express. Ele inclui dois endpoints principais: um para **consultar lojas** cadastradas no banco de dados (`GET /stores`) e outro para **inserir novos dados de lojas** no banco de dados (`POST /stores`). 
     - O **endpoint GET** executa uma consulta SQL que seleciona todas as lojas na tabela `stores` e retorna os resultados em formato JSON.

     - O **endpoint POST** recebe dados enviados via formulário (CEP inicial, CEP final e dias estimados de entrega), insere esses dados no banco de dados usando uma query SQL de inserção, e retorna uma confirmação de que os dados foram recebidos.

     - **Importância:** Este código é essencial para a funcionalidade CRUD (Create, Read, Update, Delete) do sistema de inventário distribuído. Ele permite ao sistema gerenciar as informações de estoque e garantir que as lojas possam ser atualizadas e consultadas em tempo real. A arquitetura do backend permite uma integração direta com o banco de dados hospedado no AWS RDS, facilitando a comunicação rápida e eficiente.
  
      - [Link para o Backend no GitHub](https://github.com/Inteli-College/2024-2A-T07-CC07-G01/blob/develop/codigo/backend/app.js)

   ### 3.2 **Banco de Dados**
   - **Tecnologia:** MySQL no AWS RDS.
   - **Configuração:**
     - Tabelas para armazenar informações de lojas e suas localizações (CEPs).
     - Conexão com o backend para operações CRUD.
   - **Schema do Banco de Dados:** [Inserir aqui uma representação do schema, se possível com um diagrama].
   - **Exemplo de Query:**
     ```sql
     CREATE TABLE stores (
         id INT AUTO_INCREMENT PRIMARY KEY,
         initialZipcode VARCHAR(10),
         finalZipcode VARCHAR(10),
         estimatedDays INT
     );
     ```
   - **Explicação do código:** Este código SQL é responsável pela criação da tabela `stores` no banco de dados MySQL hospedado no AWS RDS. A tabela armazena informações importantes sobre as lojas, incluindo o CEP inicial, o CEP final e os dias estimados de entrega. O campo `id` é gerado automaticamente e serve como a chave primária da tabela, garantindo que cada loja seja identificada de forma única.
     - **Importância:** A estrutura dessa tabela é fundamental para o armazenamento e gerenciamento de dados de estoque no sistema de inventário distribuído. Ela permite que o backend execute operações CRUD de forma eficiente, mantendo os dados organizados e facilmente acessíveis para consulta e atualização.
   ### 3.3 **Frontend**
   - **Tecnologia:** HTML, CSS e JavaScript hospedado em AWS S3 ou EC2.
   - **Funcionalidade:**
     - Formulário simples para inserção de dados de CEPs e estimativa de entrega.
     - Botão para exibir os dados armazenados.
   - **Interação com Backend:**
     - Envio de dados via requisições AJAX para o backend.
     - Exibição dos resultados na página web.
   - **Código Resumido:**
     - **Trecho de Código `index.html`:**
       ```html
       <form id="dataForm">
           <input type="text" id="initialZipcode" placeholder="Initial Zipcode" required>
           <input type="text" id="finalZipcode" placeholder="Final Zipcode" required>
           <input type="number" id="estimatedDays" placeholder="Estimated Days" required>
           <div class="button-container">
               <button type="submit">Submit</button>
               <button type="button" id="showData">Show Data</button>
           </div>
       </form>
       ```
   - **Explicação do código:** Este trecho de código HTML representa o formulário simples que o usuário utiliza para inserir informações de CEPs e dias estimados de entrega. O formulário é conectado ao backend, permitindo que os dados sejam enviados via requisição POST para o servidor quando o botão "Submit" é pressionado. O botão "Show Data" é utilizado para fazer uma requisição GET e exibir os dados já armazenados no sistema.

     - **Importância:** Esta interface simples oferece aos usuários uma maneira fácil e intuitiva de interagir com o sistema de inventário. Com base nas informações inseridas, o sistema é capaz de atualizar o banco de dados e exibir as informações em tempo real, o que é fundamental para a manutenção e consulta de estoque distribuído. 
      - [Link para o Frontend no GitHub - `index.html`](https://github.com/Inteli-College/2024-2A-T07-CC07-G01/blob/develop/codigo/frontend/index.html)


## 4. **Testes e Validação**

- **Testes de API com Postman:**
  - Foram realizados testes para validar as operações GET e POST implementadas no backend. Os testes confirmam que o backend está corretamente conectado ao banco de dados e manipulando os dados conforme esperado.
  
  - **Exemplo de Teste POST:**
    - A requisição para o endpoint `/stores` envia dados de lojas, como o CEP inicial, CEP final, e dias estimados de entrega. O sistema insere esses dados no banco de dados RDS e retorna uma mensagem de sucesso confirmando que os dados foram recebidos e armazenados.
    
    - **Exemplo de Resposta JSON:**
    ```json
    [
      {"id": 1, "initialZipcode": "06470-000", "finalZipcode": "88808-000", "estimatedDays": 30},
      {"id": 2, "initialZipcode": "06470-890", "finalZipcode": "88899-000", "estimatedDays": 20},
      {"id": 3, "initialZipcode": "12345-000", "finalZipcode": "54321-000", "estimatedDays": 2},
      {"id": 4, "initialZipcode": "12345-678", "finalZipcode": "54321-234", "estimatedDays": 2},
      {"id": 5, "initialZipcode": "06470-000", "finalZipcode": "88808-000", "estimatedDays": 33},
      ...
      {"id": 18, "initialZipcode": "382741974", "finalZipcode": "1-37498709", "estimatedDays": 888}
    ]
    ```

    <div align="center">
    <p><b>Figura 2 </b>- Teste POST via Postman</p> <img src=".\img\Print_POST.png" alt="Teste de Requisição POST">
    <p>Fonte: elaborado por GDE</p>
    </div>

    - O print acima mostra a execução do teste POST bem-sucedido. O terminal confirma que o servidor Node.js está conectado ao banco de dados RDS e a resposta do Postman indica que os dados foram inseridos corretamente no banco de dados.

  - **Exemplo de Teste GET:**
    - A requisição para o endpoint `/stores` retorna os dados das lojas armazenadas, incluindo ID, CEP inicial, CEP final, e dias estimados de entrega. A resposta é recebida em formato JSON e confirma que o sistema está consultando os dados corretamente no banco de dados.

    <div align="center">
    <p><b>Figura 3 </b>- Teste GET via Postman</p> <img src=".\img\Print_GET.png" alt="Teste de Requisição GET">
    <p>Fonte: elaborado por GDE</p>
    </div>

    - O print acima mostra a execução do teste GET. O servidor Node.js está em execução na instância EC2, e a resposta do Postman retorna os dados de lojas armazenados no banco de dados, confirmando que a operação GET foi realizada com sucesso.

  - **Explicação do JSON:**
    - O JSON acima representa um **exemplo de dados retornados pela API** após a execução de uma requisição GET no endpoint `/stores`. Ele contém registros de lojas, incluindo campos como `id`, `initialZipcode`, `finalZipcode`, e `estimatedDays`. A inclusão deste exemplo de JSON na documentação tem o objetivo de fornecer uma **visão clara e prática** do tipo de dados que o sistema está retornando durante as operações de consulta, permitindo aos desenvolvedores e stakeholders visualizarem o formato e a estrutura dos dados que estão sendo manipulados pelo sistema.
    
    - **Motivo da Inclusão:** O JSON é um elemento crucial para demonstrar o sucesso da operação GET e garantir que as informações armazenadas no banco de dados estão sendo recuperadas corretamente. Ele serve como uma evidência prática de que o sistema está cumprindo as suas funções básicas de consulta e retorno de dados de maneira eficiente.

- **Vídeo 3: Demonstração de Operações CRUD via MySQL**
- **Operações CRUD Demonstradas no Terminal MySQL:**
  - O vídeo a seguir mostra a execução de operações de criação, leitura, atualização e exclusão (CRUD) no banco de dados MySQL, diretamente no terminal. Essas operações validam a conexão e integridade do banco de dados, demonstrando que as tabelas estão corretamente configuradas e que as queries SQL estão sendo executadas com sucesso.

      [Clique aqui para assistir ao vídeo 1](./img/ubuntu@ip-172-31-36-186_%20~%202024-08-18%2013-12-41.mp4)

    - Descrição do vídeo: O vídeo demonstra a criação de uma tabela, inserção de dados, consulta aos dados armazenados, atualização de registros e exclusão de um registro no banco de dados MySQL. As operações são realizadas utilizando comandos SQL diretamente no terminal, garantindo que o sistema está corretamente configurado e que as operações CRUD estão funcionando como esperado.
--- 

- **Vídeo 2: Demonstração de Operações CRUD no AWS Console**
- **Operações CRUD Demonstradas no AWS Console:**
  - Para validar as operações CRUD implementadas no backend, foi realizada uma demonstração no AWS Console. O vídeo a seguir mostra a execução de operações Create, Read, Update, Delete nas tabelas do banco de dados AWS RDS, comprovando que o sistema está funcionando conforme esperado.

      [Clique aqui para assistir ao vídeo 2](./img/Video_1.mp4)

    - *Descrição do vídeo:* Este vídeo mostra a execução de operações de inserção, consulta, atualização e exclusão de dados no banco de dados MySQL no AWS RDS. O backend responde corretamente às requisições, garantindo que as operações estão sincronizadas com o banco de dados e que a integridade dos dados está sendo mantida durante o processo.

---
- **Vídeo 3: Demonstração da Interface Frontend**
- **Demonstração do Frontend:**
  - Um vídeo foi gravado para mostrar a interface do frontend em operação. A interface permite que os usuários insiram dados de CEPs e dias estimados de entrega, e exibe os dados armazenados em tempo real.

  [Clique aqui para assistir ao demonstrando o Frontend (Vídeo 3)](./img/Video_2.mp4)

  

    - *Descrição do vídeo:* Este vídeo mostra o frontend do sistema, onde o usuário insere informações no formulário e envia os dados para o backend via uma requisição POST. A interface também exibe os dados já armazenados no sistema, retornados via requisição GET. O vídeo confirma que a integração entre o frontend e o backend está operando corretamente, utilizando AWS S3 ou EC2 para hospedar a interface.



## 5. **Conclusão**
   - **Próximos Passos:**
     - Este MVP serve como base para futuras iterações, onde funcionalidades adicionais serão implementadas e o sistema será escalado para suportar um ambiente de produção.
     - A partir daqui, o foco será na otimização do desempenho, implementação de segurança e integração com sistemas corporativos como o SAP ECC.