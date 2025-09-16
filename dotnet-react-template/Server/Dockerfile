# Используем официальный образ .NET 8 SDK для сборки
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Копируем файлы проекта и восстанавливаем зависимости
COPY ["MyProject.Server.csproj", "./"]
RUN dotnet restore "MyProject.Server.csproj"

# Копируем весь исходный код
COPY . .

# Собираем приложение
RUN dotnet build "MyProject.Server.csproj" -c Release -o /app/build

# Публикуем приложение
FROM build AS publish
RUN dotnet publish "MyProject.Server.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Используем образ .NET 8 runtime для запуска
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Открываем порт
EXPOSE #{DotNetPort}#

# Запускаем приложение
ENTRYPOINT ["dotnet", "MyProject.Server.dll"]
