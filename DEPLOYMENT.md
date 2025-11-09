# 萬橡和コーポレートサイト - デプロイガイド

## 🌐 本番環境

**ドメイン:** worthome-japan.com  
**プラットフォーム:** Cloudflare Pages  
**プロジェクト名:** worthome-japan

---

## 🚀 デプロイ方法

### 方法1: Cloudflare Dashboard（最も簡単）

1. **Cloudflare Dashboard にログイン**
   https://dash.cloudflare.com/

2. **Workers & Pages** → **Create application** → **Pages**

3. **GitHubリポジトリを接続**
   - リポジトリ: このプロジェクト
   - ブランチ: `main`

4. **ビルド設定:**
   ```
   Build command: npm run build
   Build output directory: dist
   Framework preset: None
   ```

5. **デプロイ実行**

6. **カスタムドメイン設定:**
   - Custom domains タブ
   - `worthome-japan.com` と `www.worthome-japan.com` を追加

---

### 方法2: GitHub Actions（自動デプロイ）

**前提条件:**
1. GitHubリポジトリにコードをプッシュ済み
2. Cloudflare API Token を取得

**セットアップ手順:**

1. **Cloudflare API Token を作成:**
   - Cloudflare Dashboard → My Profile → API Tokens
   - Create Token → Edit Cloudflare Workers テンプレート
   - 権限: Account.Cloudflare Pages (Edit)

2. **GitHub Secrets を設定:**
   - GitHubリポジトリ → Settings → Secrets and variables → Actions
   - 以下を追加:
     - `CLOUDFLARE_API_TOKEN`: 作成したAPIトークン
     - `CLOUDFLARE_ACCOUNT_ID`: CloudflareアカウントID

3. **mainブランチにプッシュで自動デプロイ:**
   ```bash
   git push origin main
   ```

---

### 方法3: wrangler CLI（手動デプロイ）

```bash
# 1. 依存関係インストール
npm install

# 2. ビルド
npm run build

# 3. Wranglerでログイン
npx wrangler login

# 4. プロジェクト作成（初回のみ）
npx wrangler pages project create worthome-japan \
  --production-branch main \
  --compatibility-date 2025-10-29

# 5. デプロイ
npx wrangler pages deploy dist --project-name worthome-japan

# 6. カスタムドメイン追加（初回のみ）
npx wrangler pages domain add worthome-japan.com --project-name worthome-japan
npx wrangler pages domain add www.worthome-japan.com --project-name worthome-japan
```

---

## 📁 プロジェクト構成

```
webapp/
├── src/
│   ├── index.tsx              # メインアプリケーション
│   ├── routes/
│   │   ├── pages.ts           # ホーム・会社情報ページ
│   │   ├── pages2.ts          # 事業内容・製品・お問い合わせ
│   │   └── products.ts        # 製品詳細ページ
│   └── templates/
│       └── layout.ts          # 共通レイアウト
├── public/
│   └── static/
│       ├── styles.css         # メインスタイルシート
│       ├── app.js             # フロントエンドJS
│       └── images/            # 画像アセット
├── dist/                      # ビルド出力（デプロイ対象）
├── wrangler.jsonc            # Cloudflare設定
├── package.json              # 依存関係
└── .github/workflows/
    └── deploy.yml            # GitHub Actions設定

```

---

## 🔧 環境変数

このプロジェクトは環境変数を使用していません。

---

## 📝 カスタムドメイン設定詳細

### DNSレコード（Cloudflare自動設定）

Cloudflare Pagesでカスタムドメインを追加すると、以下のレコードが自動設定されます：

```
worthome-japan.com         A/AAAA    → Cloudflare Pages IP
www.worthome-japan.com     CNAME     → worthome-japan.pages.dev
```

### SSL/TLS設定

Cloudflareが自動的にSSL証明書を発行・更新します。
- SSL/TLS モード: Full (strict) 推奨
- Always Use HTTPS: 有効化推奨

---

## 🔄 更新手順

### コード変更後の更新:

1. **ローカルで変更**
   ```bash
   # 開発サーバーでテスト
   npm run build
   pm2 start ecosystem.config.cjs
   ```

2. **コミット**
   ```bash
   git add .
   git commit -m "変更内容の説明"
   ```

3. **プッシュ（自動デプロイ）**
   ```bash
   git push origin main
   ```

4. **確認**
   - GitHub Actions でデプロイ状況確認
   - https://worthome-japan.com でサイト確認

---

## 📊 監視とメンテナンス

### Cloudflare Analytics
- Workers & Pages → worthome-japan → Analytics
- アクセス数、帯域幅、リクエスト数を確認

### ログ確認
```bash
npx wrangler pages deployment tail --project-name worthome-japan
```

---

## 🆘 トラブルシューティング

### デプロイが失敗する場合

1. **ビルドエラー:**
   ```bash
   npm install  # 依存関係再インストール
   npm run build
   ```

2. **認証エラー:**
   ```bash
   npx wrangler logout
   npx wrangler login
   ```

3. **キャッシュクリア:**
   Cloudflare Dashboard → Caching → Configuration → Purge Everything

---

## 📞 サポート

- **Cloudflare Docs:** https://developers.cloudflare.com/pages/
- **Hono Docs:** https://hono.dev/
- **Wrangler Docs:** https://developers.cloudflare.com/workers/wrangler/

---

## 📦 バックアップ

プロジェクトバックアップ: `worthome_website_final_2025-11-08.tar.gz`

復元方法:
```bash
tar -xzf worthome_website_final_2025-11-08.tar.gz
cd home/user/webapp
npm install
```

---

**最終更新:** 2025-11-08  
**バージョン:** 1.0.0
