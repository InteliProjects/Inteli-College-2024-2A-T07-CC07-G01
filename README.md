
<table>
<tr>
<td><a href="https://vivo.com.br/para-voce"><img src="https://logodownload.org/wp-content/uploads/2014/02/vivo-logo-0.png" alt="Vivo - Telefônica" border="0" width="20%"></a></td>
<td><a href="https://www.inteli.edu.br/"><img src="inteli-logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="50%"></a></td>
</tr>
</table>

# Sistema de Inventário Distribuído - VIVO
### Grupo: *Gerenciadores de Estoque*

## Integrantes:

- <a href="https://www.linkedin.com/in/andr%C3%A9-hutzler-60aa28277/">Andre Hutzler</a>
- <a href="https://www.linkedin.com/in/felipe-braga-69607126a/">Felipe Braga</a>
- <a href="https://www.linkedin.com/in/felipe-sabino-spina-b33372271/">Felipe Spina</a>
- <a href="https://www.linkedin.com/in/giovana-katsuki-murata-503a94264/">Giovana Katsuki Murata</a>
- <a href="https://www.linkedin.com/in/raissa-paula/">Raissa Paula</a>

## Professores:

### Orientador:

- <a href="https://www.linkedin.com/in/laizaribeiro/">Laíza Ribeiro Silva</a>

### Instrutores:

- <a href="https://www.linkedin.com/in/profandregodoi/?originalSubdomain=br">André Godoi</a>
- <a href="https://www.linkedin.com/in/gui-cestari/">Guilherme Cestari</a>
- <a href="https://www.linkedin.com/in/lisane-valdo/">Lisane Valdo</a>
- <a href="https://br.linkedin.com/in/monica-anastassiu-d-sc-2568522">Monica Anastassiu</a>
- <a href="https://www.linkedin.com/in/rodolfo-goya-6ab187/">Rodolfo Goya</a>
- <a href="https://www.linkedin.com/in/tmsasaki/">Tomaz Mikio Sasaki</a>

# Introdução

&emsp;&emsp;Este é um dos repositórios do projeto de alunos do Inteli em parceria com a Vivo Telefônica no 1º semestre de 2024. O objetivo do projeto é o desenvolvimento de uma solução de inventário distribuído de alta eficiência, focada em melhorar a gestão de estoques em múltiplos centros de distribuição e lojas, integrando dados em tempo real para otimizar a experiência do usuário e reduzir custos operacionais no e-commerce da Vivo.

# Descrição

&emsp;&emsp;A solução foi desenvolvida com base em uma arquitetura em nuvem utilizando serviços como AWS EC2, RDS e Auto Scaling para garantir alta disponibilidade e resiliência. A integração de APIs RESTful com a camada de frontend foi feita em Node.js, enquanto o backend se comunica diretamente com o banco de dados relacional para garantir sincronização em tempo real. O projeto visa superar os desafios de sincronização de estoques entre múltiplas localidades e períodos de alta demanda, como Black Friday, onde a precisão e a rapidez na entrega são essenciais para a satisfação do cliente.

# Tags

* **SPRINT 1 - 16/08/2024:**
    - Entendimento do Usuário;
    - Entendimento do Negócio;
    - MVP com deploy da aplicação com arquitetura básica;
    - Requisitos Funcionais e Não Funcionais.

* **SPRINT 2 - 30/08/2024:**
    - Artigo (versão 1);
    - Arquitetura corporativa;
    - Desenvolvimento do Back-end e Front-end;
    - Infraestrutura configurada no AWS.

* **SPRINT 3 - 13/09/2024:**
    - Artigo (versão 2);
    - Integração entre front-end e back-end;
    - Modelagem do sistema;
    - Relatório técnico inicial.

* **SPRINT 4 - 27/09/2024:**
    - Artigo (versão 3);
    - Definição final da aplicação;
    - Testes iniciais do sistema, incluindo performance e segurança.

* **SPRINT 5 - 13/10/2024:**
    - Aprimoramento dos testes de performance e segurança;
    - Artigo completo e finalizado;
    - Organização e documentação completa do repositório no GitHub.

# Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Banco de Dados:** Amazon RDS (MySQL)
- **Infraestrutura:** AWS (EC2, S3, CloudFront, RDS, Auto Scaling)
- **Ferramentas de Gerenciamento:** Git, GitHub, Docker

# Instalação e Configuração

**Para rodar o projeto localmente:**

1. Clone o repositório:
   ```bash
   git clone https://github.com/agodoi/sqlinjection.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente para acessar o banco de dados:
   ```bash
   DB_USER=user
   DB_PASSWORD=password
   DB_HOST=localhost
   DB_NAME=inventory_db
   ```

4. Execute o projeto:
   ```bash
   npm start
   ```

# Testes

**Para rodar os testes automatizados:**

1. Execute o comando abaixo para rodar os testes:
   ```bash
   npm test
   ```

2. Os testes incluem validações de integração, segurança e carga no sistema, garantindo que todas as funcionalidades do inventário distribuído operem corretamente.


 ## 📋 Licença/License

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">

<a property="dct:title" rel="cc:attributionURL">Grupo 1</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName">Inteli, <a href="https://www.linkedin.com/in/andr%C3%A9-hutzler-60aa28277/">Andre Hutzler</a>, <a href="https://www.linkedin.com/in/felipe-braga-69607126a/">Felipe Braga</a>, <a href="https://www.linkedin.com/in/felipe-sabino-spina-b33372271/">Felipe Spina</a>, <a href="https://www.linkedin.com/in/giovana-katsuki-murata-503a94264/">Giovana Katsuki Murata</a>, <a href="https://www.linkedin.com/in/raissa-paula/">Raissa Paula</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>