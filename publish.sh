#!/bin/bash
# ホームページを GitHub Pages に公開するスクリプト
# 公開されるのは index.html と assets/ のみ（admin.html は公開されません）
set -e
cd "$(dirname "$0")"
rm -rf .publish-tmp
mkdir -p .publish-tmp/assets
cp index.html .publish-tmp/
cp assets/*.js .publish-tmp/assets/
[ -f CNAME ] && cp CNAME .publish-tmp/
cd .publish-tmp
git init -q -b gh-pages
 git config user.name "ybaba-coder"
 git config user.email "y.baba@hublinx.jp"
git add -A
git commit -q -m "publish $(date '+%Y-%m-%d %H:%M')"
git push -f "https://github.com/ybaba-coder/asunaro.git" gh-pages
cd .. && rm -rf .publish-tmp
echo "公開完了"
