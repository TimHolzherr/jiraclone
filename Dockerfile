# Build api
FROM mcr.microsoft.com/dotnet/core/sdk:3.0.100-preview5-buster AS build-api-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY api/JiraClone.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build client
FROM node:12.4.0-alpine as build-client-env
WORKDIR /app
COPY client ./
RUN npm install \ 
    && npm run build 

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.0.0-preview5-buster-slim
WORKDIR /app
COPY --from=build-api-env /app/out .
COPY --from=build-client-env /app/build ./wwwroot
ENTRYPOINT ["dotnet", "JiraClone.dll"]