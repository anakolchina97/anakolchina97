FROM node

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .next ./.next

# Устанавливаем переменные среды для хоста и порта
ENV HOST=0.0.0.0
ENV PORT=80

CMD ["npm", "run", "dev"]