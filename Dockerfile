FROM node:boron

ADD dist /

RUN npm install express

ENV PORT=5000

EXPOSE 5000

CMD ["node", "server.js"]
