# 🚀 萬橡和サイト 簡単デプロイガイド

## worthome-japan.com への最速デプロイ方法

---

## 方法1: Cloudflare Pages Direct Upload（最も簡単・推奨）⭐

**所要時間: 5分**

### ステップ1: バックアップをダウンロード

以下のURLからダウンロード：
```
https://page.gensparksite.com/project_backups/worthome_japan_production_ready.tar.gz
```

### ステップ2: ファイルを展開

**Windowsの場合:**
- 7-Zip、WinRAR、または標準の解凍機能で展開
- `home/user/webapp` フォルダが出てきます

**Mac/Linuxの場合:**
```bash
tar -xzf worthome_japan_production_ready.tar.gz
cd home/user/webapp
```

### ステップ3: 依存関係をインストールしてビルド

```bash
# Node.js がインストールされていない場合
# https://nodejs.org/ からダウンロード＆インストール

# プロジェクトフォルダで実行
npm install
npm run build
```

これで `dist/` フォルダが作成されます。

### ステップ4: Cloudflare Dashboardでアップロード

1. **Cloudflare Dashboard にログイン**
   https://dash.cloudflare.com/

2. 左メニューから **Workers & Pages** を選択

3. **Create application** ボタンをクリック

4. **Pages** タブ → **Upload assets** を選択

5. **Project name:** `worthome-japan` を入力

6. **dist フォルダ全体をドラッグ＆ドロップ**
   - `dist` フォルダ内のファイルをすべて選択してアップロード
   - または `dist` フォルダ自体をドロップ

7. **Deploy site** ボタンをクリック

8. デプロイ完了を待つ（約1-2分）

### ステップ5: カスタムドメインを設定

1. デプロイ完了後、プロジェクトページで **Custom domains** タブをクリック

2. **Set up a custom domain** ボタン

3. ドメインを入力:
   - `worthome-japan.com`
   - **Add domain**

4. もう一度追加:
   - `www.worthome-japan.com`
   - **Add domain**

5. DNSレコードが自動設定されます（Cloudflareでドメイン管理している場合）

### 完了！🎉

数分後に以下のURLでサイトが公開されます：
- https://worthome-japan.com
- https://www.worthome-japan.com

---

## 方法2: Wrangler CLI でデプロイ

**所要時間: 10分**

### ステップ1-3: 上記と同じ（バックアップダウンロード～ビルド）

### ステップ4: Wrangler でログイン

```bash
npx wrangler login
```

ブラウザが開くのでCloudflareにログイン

### ステップ5: デプロイ

```bash
npx wrangler pages deploy dist --project-name worthome-japan
```

### ステップ6: カスタムドメイン追加

```bash
npx wrangler pages domain add worthome-japan.com --project-name worthome-japan
npx wrangler pages domain add www.worthome-japan.com --project-name worthome-japan
```

---

## 方法3: GitHub経由でデプロイ（自動更新対応）

**所要時間: 15分（初回のみ、以降は自動）**

### ステップ1: GitHubリポジトリを作成

1. https://github.com/ にログイン
2. 右上の「+」→「New repository」
3. Repository name: `worthome-japan`（任意の名前でOK）
4. Private または Public を選択
5. **「Initialize this repository with a README」のチェックを外す**
6. 「Create repository」をクリック

### ステップ2: バックアップを展開してGitHubにプッシュ

```bash
# バックアップを展開
tar -xzf worthome_japan_production_ready.tar.gz
cd home/user/webapp

# GitHubリポジトリを接続（URLは自分のものに変更）
git remote add origin https://github.com/YOUR_USERNAME/worthome-japan.git

# プッシュ
git push -u origin main
```

### ステップ3: Cloudflare PagesでGitHubリポジトリを接続

1. **Cloudflare Dashboard** → **Workers & Pages**
2. **Create application** → **Pages** → **Connect to Git**
3. **GitHub** を選択（初回は認証が必要）
4. リポジトリを選択: `worthome-japan`
5. **Begin setup** をクリック

6. **ビルド設定:**
   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: (空欄)
   ```

7. **Save and Deploy**

8. デプロイ完了後、**Custom domains** タブでドメイン追加

### 今後の更新

コードを変更したら：
```bash
git add .
git commit -m "変更内容"
git push
```

自動的にCloudflareにデプロイされます！

---

## 🔍 トラブルシューティング

### ビルドエラーが出る

```bash
# node_modules を削除して再インストール
rm -rf node_modules
npm install
npm run build
```

### デプロイ後にサイトが表示されない

1. Cloudflare Dashboard で **Workers & Pages** → `worthome-japan` を確認
2. **Deployments** タブでデプロイ状況を確認
3. **Custom domains** タブでドメイン設定を確認
4. DNSレコードが正しく設定されているか確認

### カスタムドメインが反映されない

- DNSの反映には最大24時間かかる場合があります（通常は数分～数時間）
- Cloudflareでドメインを管理している場合は自動設定されます
- 他社でドメインを管理している場合は、ネームサーバーをCloudflareに変更

---

## 📞 サポートリンク

- **Cloudflare Pages ドキュメント:** https://developers.cloudflare.com/pages/
- **Wrangler ドキュメント:** https://developers.cloudflare.com/workers/wrangler/
- **GitHub ヘルプ:** https://docs.github.com/

---

## 📦 バックアップファイル

**最新版:**
https://page.gensparksite.com/project_backups/worthome_japan_production_ready.tar.gz

**ファイルサイズ:** 約65MB

**内容:**
- 全ソースコード
- 画像ファイル（50枚）
- 設定ファイル
- デプロイ用ワークフロー

---

**作成日:** 2025-11-08  
**プロジェクト:** 萬橡和コーポレートサイト  
**ドメイン:** worthome-japan.com
