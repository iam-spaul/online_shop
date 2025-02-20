FROM node:18-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app


ENV PORT=${PORT}

EXPOSE ${PORT}
CMD ["sh", "-c", "npm run dev -- --host --port $PORT"]