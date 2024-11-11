FROM node:14

WORKDIR /app

COPY ./backend/package*.json ./

RUN npm install

COPY ./backend .

RUN ls -la ./frontend/

COPY ./frontend/listadeestoque.html ./public/listadeestoque.html
COPY ./frontend/calculadora.html ./public/calculadora.html
COPY ./frontend/cadastrar.html ./public/cadastrar.html
COPY ./frontend/stylecadastrar.css ./public/stylecadastrar.css
COPY ./frontend/stylecalculadora.css ./public/stylecalculadora.css
COPY ./frontend/styleestoque.css ./public/styleestoque.css

EXPOSE 3001

CMD ["node", "server.js"]
