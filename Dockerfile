# 使用轻量 Node.js 18 官方镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制依赖清单
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目全部代码
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 设置生产环境
ENV NODE_ENV=production

# 容器对外暴露端口（Next.js 默认 3000）
EXPOSE 3000

# 启动 Next.js SSR 服务
CMD ["npm", "run", "start"]
