FROM node:7.9

COPY package.json /app/
WORKDIR /app
RUN npm install
COPY index.js /app/

ENV PORT 80
EXPOSE 80
CMD ["node", "/app/index.js"]
