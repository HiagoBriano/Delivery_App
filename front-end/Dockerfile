# Informa a imagem que eu quero ultilizar
FROM node:16-alpine

# Pasta de trabalho no docker
WORKDIR /app/fontend

# Copia os arquivos do PC para o docker
COPY . ./

# Comando para instalar as dependências
RUN npm install

# Informa a porta que eu quero exportar para o PC acessar
EXPOSE 3000

# Comando para iniciar servidor
CMD ["npm", "start"]