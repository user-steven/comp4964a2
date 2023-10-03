FROM --platform=linux/amd64 node:18.15-slim
WORKDIR /app
RUN npm init -y && npm install && npm install express
ADD "https://raw.githubusercontent.com/user-steven/comp4964a2/main/index.js" ./index.js
ENV PORT=8000
EXPOSE 8000
CMD ["node", "index.js"]
