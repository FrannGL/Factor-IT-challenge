# Etapa 1: build
FROM node:18-alpine AS builder

WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm

COPY pnpm-lock.yaml ./
COPY package.json ./

# Instalar dependencias con pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# Etapa 2: servir con un servidor web estático (nginx)
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
