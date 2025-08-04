#!/bin/bash

# 部署脚本
set -e

echo "🚀 开始构建和部署 Yuki App..."

# 构建生产镜像
echo "📦 构建 Docker 镜像..."
docker build -t yuki-app:latest .

# 停止并删除旧容器（如果存在）
echo "🛑 停止旧容器..."
docker stop yuki-app || true
docker rm yuki-app || true

# 运行新容器
echo "▶️  启动新容器..."
docker run -d \
  --name yuki-app \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_TELEMETRY_DISABLED=1 \
  yuki-app:latest

echo "✅ 部署完成！"
echo "🌐 应用运行在 http://localhost:3000"
echo ""
echo "📊 查看容器状态："
docker ps | grep yuki-app
echo ""
echo "📝 查看日志："
echo "docker logs -f yuki-app" 