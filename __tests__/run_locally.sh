#!/bin/bash
# run this from root folder!

# Lint
pylint ./backend
npx eslint ./frontend/utils

# Format
black .
prettier --write .

# Unit Tests
pytest
npm test

# Coverage
pytest --cov=./backend --cov-report=xml

npm test -- --coverage