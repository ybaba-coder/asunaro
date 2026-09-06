#!/bin/bash
# ホームページを GitHub Pages に公開するスクリプト
# 公開されるのは index.html と assets/ のみ（admin.html は公開されません）
set -e
cd "$(dirname "$0")"

# ▼ 公開URL（独自ドメインに切り替える時はここだけ変更）
SITE_URL="https://ybaba-coder.github.io/asunaro/"

rm -rf .publish-tmp
mkdir -p .publish-tmp/assets
cp index.html .publish-tmp/
cp assets/*.js .publish-tmp/assets/
cp assets/*.png .publish-tmp/assets/
cp favicon.ico .publish-tmp/
[ -f CNAME ] && cp CNAME .publish-tmp/

cd .publish-tmp

# canonical と og:url を実際の公開URLに書き換え
sed -i '' "s|<link rel=\"canonical\" href=\"[^\"]*\">|<link rel=\"canonical\" href=\"${SITE_URL}\">|" index.html
sed -i '' "s|<meta property=\"og:url\" content=\"[^\"]*\">|<meta property=\"og:url\" content=\"${SITE_URL}\">|" index.html
sed -i '' "s|\"url\": \"https://www.warms-isahaya.com/\"|\"url\": \"${SITE_URL}\"|" index.html

# robots.txt（検索エンジンにクロールを許可し、sitemapの場所を伝える）
cat > robots.txt <<EOF
User-agent: *
Allow: /

Sitemap: ${SITE_URL}sitemap.xml
EOF

# sitemap.xml（Googleにページの場所を伝える）
cat > sitemap.xml <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>$(date '+%Y-%m-%d')</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
EOF

git init -q -b gh-pages
git config user.name "ybaba-coder"
git config user.email "y.baba@hublinx.jp"
git add -A
git commit -q -m "publish $(date '+%Y-%m-%d %H:%M')"
git push -f "https://github.com/ybaba-coder/asunaro.git" gh-pages
cd .. && rm -rf .publish-tmp
echo "公開完了: ${SITE_URL}"
