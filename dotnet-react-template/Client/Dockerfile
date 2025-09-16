# Используем официальный образ Node.js для сборки
FROM node:18-alpine AS build
WORKDIR /app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем исходный код
COPY . .

# Собираем приложение с Vite
RUN yarn build

# Используем nginx для раздачи статических файлов
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт
EXPOSE #{ReactPort}#

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
