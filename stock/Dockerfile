FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install --only=production

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3001

CMD ["node", "index.js"]
