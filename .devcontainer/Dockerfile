FROM mcr.microsoft.com/vscode/devcontainers/python:0-3

RUN curl -fsSL https://aka.ms/install-azd.sh | bash

ENV PYTHONUNBUFFERED 1

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends postgresql-client