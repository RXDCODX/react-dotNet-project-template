# .NET Web API + React 19 Template

Этот шаблон создает полнофункциональное приложение с .NET 8 Web API и React 19 с TypeScript и SASS.

## Особенности

- **.NET 8 Web API** с настройками CORS для работы с React
- **SpaYarp** для реверс проксирования запросов в development режиме
- **React 19** с TypeScript для типобезопасности
- **SASS модули** для изолированных стилей
- **React Router** для навигации между страницами
- **Абсолютные пути** в TypeScript (@/components, @/services и т.д.)
- **ESLint + Prettier** для качества кода
- **Yarn** как менеджер пакетов по умолчанию
- **ESBuild проект** (.esproj) для React приложения
- **EditorConfig** для единообразного форматирования кода
- **Настраиваемые порты** для обоих приложений
- **Опциональная поддержка Docker** с docker-compose
- **Swagger UI** для тестирования API
- **Готовый пример** с WeatherForecast API

## Установка шаблона

1. Установите шаблон из локальной папки:

```bash
dotnet new install ./
```

2. Создайте новый проект:

```bash
dotnet new dotnet-react -n MyProject
```

## Параметры шаблона

При создании проекта вы можете указать следующие параметры:

- `--DotNetPort` - Порт для .NET Web API (по умолчанию: 5000)
- `--ReactPort` - Порт для React приложения (по умолчанию: 3000)
- `--IncludeDocker` - Включить Docker файлы (по умолчанию: false)
- `--IncludeEditorConfig` - Включить .editorconfig файл (по умолчанию: true)

### Примеры использования

```bash
# Создать проект с портами по умолчанию
dotnet new dotnet-react -n MyProject

# Создать проект с кастомными портами
dotnet new dotnet-react -n MyProject --DotNetPort 5001 --ReactPort 3001

# Создать проект с Docker файлами
dotnet new dotnet-react -n MyProject --IncludeDocker true

# Создать проект с кастомными портами и Docker
dotnet new dotnet-react -n MyProject --DotNetPort 5001 --ReactPort 3001 --IncludeDocker true

# Создать проект без .editorconfig файла
dotnet new dotnet-react -n MyProject --IncludeEditorConfig false

# Создать проект с Docker, но без .editorconfig
dotnet new dotnet-react -n MyProject --IncludeDocker true --IncludeEditorConfig false
```

**Примечание:** Имя проекта, указанное в параметре `-n`, будет использоваться для создания папок `Server` и `Client` в корне проекта.

## Запуск приложения

### Без Docker

**Вариант 1: Только .NET приложение (рекомендуется)**
SpaYarp автоматически запустит React приложение:

```bash
cd Server
dotnet run
```

**Вариант 2: Отдельный запуск**
Если нужно запускать приложения отдельно:

1. Запустите React приложение:

```bash
cd Client
yarn install
yarn start
```

2. В новом терминале запустите .NET Web API:

```bash
cd Server
dotnet run
```

### С Docker

```bash
docker-compose up --build
```

## Структура проекта

```
MyProject/
├── Server/                    # .NET Web API
│   ├── Controllers/           # API контроллеры
│   ├── Models/                # Модели данных
│   ├── Services/              # Бизнес-логика
│   ├── Properties/            # Настройки запуска
│   ├── Dockerfile             # Docker для API
│   ├── MyProject.Server.csproj
│   └── ...
├── Client/                    # React приложение
│   ├── src/
│   │   ├── components/        # React компоненты
│   │   ├── services/          # API сервисы
│   │   ├── types/             # TypeScript типы
│   │   ├── utils/             # Утилиты
│   │   └── ...
│   ├── public/                # Статические файлы
│   ├── Dockerfile             # Docker для React
│   ├── MyProject.Client.esproj  # ESBuild проект
│   └── ...
├── docker-compose.yml         # Docker Compose (опционально)
└── README.md
```

## API Endpoints

- `GET /api/WeatherForecast` - Получить прогноз погоды (пример)

## Технологии

### Backend

- .NET 8
- ASP.NET Core Web API
- Swagger/OpenAPI
- CORS

### Frontend

- React 19
- TypeScript
- SASS модули
- Axios для HTTP запросов

### DevOps

- Docker
- Docker Compose
- Nginx (для React в production)

## Разработка

1. API доступно по адресу: `http://localhost:{DotNetPort}`
2. React приложение доступно по адресу: `http://localhost:{ReactPort}`
3. Swagger UI доступен по адресу: `http://localhost:{DotNetPort}/swagger`

### SpaYarp Integration

В development режиме .NET приложение автоматически проксирует запросы к React приложению через SpaYarp:

- Все запросы к React приложению автоматически перенаправляются на `http://localhost:{ReactPort}`
- React приложение запускается автоматически при старте .NET приложения
- В production режиме используется статическая раздача файлов

### Полезные команды

```bash
# Линтинг кода
yarn lint

# Автоисправление ошибок линтера
yarn lint:fix

# Форматирование кода
yarn format

# Проверка форматирования
yarn format:check
```

## Удаление шаблона

```bash
dotnet new uninstall ./
```
