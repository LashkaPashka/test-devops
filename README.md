# Тестовое задание: Простая DevOps-инфраструктура с CI/CD

[![MIT License](https://img.shields.io/github/license/serega404/TestTaskForDevOps)](https://github.com/serega404/TestTaskForDevOps/blob/main/LICENSE)

## Цель

Разработать и развернуть `Docker Compose`-стек из трёх контейнеров, а также настроить CI/CD с использованием **GitHub Actions** (или **Gitea Actions**).

## Требования к проекту

* Публичный репозиторий
* Фронтенд и бэкенд части в одном репозитории:
    * Фронтенд — в папке /front.
    * Бэкенд — в папке /api.

## Архитектура Docker Compose

Стек должен состоять из следующих сервисов:

1. **Nginx (frontend)**
   * Последняя версия.
   * Отдаёт одну HTML-страницу (`/front/html/index.html`) по корневому URL.
   * Проксирует запросы на `/api` к бэкенду.

2. **Node.js (backend)**
   * Готовое приложение расположено в папке [`/api`](/api).
   * Подключается к базе данных PostgreSQL.

   Инструкция по запуску приложения лежит в файле [`/api/README.md`](/api/README.md).

3. **PostgreSQL (database)**
   * Последняя версия.

## CI (Continuous Integration)

* Использовать **GitHub Actions** или **Gitea Actions**.
* При каждом коммите:
  * Собрать Docker-образы для фронтенда и бэкенда.
  * Опубликовать их в **[ghcr.io](https://ghcr.io)**.
  * Отправить уведомление в **Telegram** о результате сборки.

## CD (Continuous Deployment)

Реализовывать необязательно, но будет плюсом.
Если не реализовано - описать как это должно работать.

## Где выполнять?

* В виртуальной машине.
* На личном сервере или локальной машине.
* С помощью **[Docker Desktop](https://www.docker.com/products/docker-desktop/)**.

## Использованные технологии

* **Docker** и **Docker Compose** для контейнеризации.
* **GitHub Actions** или **Gitea Actions** для CI/CD.
* **PostgreSQL** для хранения данных.
* **Nginx** для проксирования запросов и раздачи статических файлов.
* **Node.js+Express.js** для бэкенда.
* **GNU/Linux** для виртуальной машины или сервера.

## Лицензия

Распространяется под лицензией MIT. Дополнительные сведения смотрите в файле [`LICENSE`](./LICENSE).
