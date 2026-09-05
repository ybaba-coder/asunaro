# 独自ドメイン設定手順（www.warms-isahaya.com）

## 前提
- ドメイン管理：Squarespace（旧Google Domainsから移管）
- メール：Google Workspace（MXレコード = smtp.google.com）
  → **MXレコードは絶対に削除・変更しないでください。メールが止まります。**

## Squarespaceでの操作

1. https://account.squarespace.com/domains にアクセス
   （Googleアカウントでログインできる場合があります）
2. `warms-isahaya.com` を選択
3. 「DNS」または「DNS Settings」を開く

### 変更するレコード

**① 既存の www レコードを削除**
   - ホスト `www` / タイプ `CNAME` / 値 `ext-sq.squarespace.com` → 削除

**② 新しい CNAME を追加**
   | ホスト | タイプ | 値 |
   |--------|--------|-----|
   | www | CNAME | ybaba-coder.github.io |

**③（任意）ルートドメインも転送する場合**
   `warms-isahaya.com`（www無し）でもアクセスできるようにする場合、
   既存のAレコード4件（198.185.159.x / 198.49.23.x）を削除し、
   以下の4件を追加：

   | ホスト | タイプ | 値 |
   |--------|--------|-----|
   | @ | A | 185.199.108.153 |
   | @ | A | 185.199.109.153 |
   | @ | A | 185.199.110.153 |
   | @ | A | 185.199.111.153 |

### 触ってはいけないレコード
- MX レコード（smtp.google.com）… メール
- TXT レコード（SPF / DKIM / google-site-verification など）… メール認証

## 設定後
DNSの反映に10分〜数時間かかります。反映後、HTTPS（鍵マーク）の有効化を
こちらで行いますので、設定が終わったらお知らせください。
