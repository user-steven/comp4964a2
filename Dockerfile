FROM --platform=linux/amd64 node:18.15-slim
WORKDIR /app
ADD index.js ./
RUN npm install && npm init -y && npm install express
ENV PORT=8000
EXPOSE 8000
CMD ["node", "index.js"]
