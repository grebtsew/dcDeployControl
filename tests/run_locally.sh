# run this from root folder!

# Lint
pylint ./backend
npx eslint ./frontend

# Format
black .
prettier -write .

# Unit Tests
pytest
npm test

# Coverage
pytest --cov=. --cov-report=xml

npm test -- --coverage