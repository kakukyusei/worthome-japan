# Cloudflare APIトークン設定ガイド

## ⚠️ 現在の問題

提供されたCloudflare APIトークンには**適切な権限が設定されていません**。

**エラー内容:**
```
Unable to authenticate request [code: 10001]
```

これは、APIトークンにPages管理の権限が不足していることを意味します。

---

## 🔧 解決方法

### 方法1: 適切な権限を持つAPIトークンを再作成（推奨）

#### ステップ1: Cloudflareダッシュボードにアクセス

1. https://dash.cloudflare.com/ にログイン
2. 右上のアカウントアイコンをクリック
3. 「マイプロフィール」を選択
4. 左メニューから「APIトークン」を選択

#### ステップ2: 既存のトークンを確認・削除

1. 現在のトークン `uDxm2Sh0sy6wcwmQDOVWEYp1ancCrV3HvLloA-uz` を探す
2. このトークンの「権限」を確認
3. 必要に応じて削除

#### ステップ3: 新しいAPIトークンを作成

1. 「APIトークンを作成」ボタンをクリック
2. 「カスタムトークン」を選択（または「Cloudflare Pagesの編集」テンプレートを使用）

3. **必要な権限を設定:**

   **アカウント:**
   ```
   Cloudflare Pages - 編集
   Account Settings - 読み取り
   ```

   **ゾーン:**（ドメインを使用する場合）
   ```
   DNS - 編集
   Zone - 読み取り
   ```

4. **アカウントリソース:**
   - すべてのアカウント、または
   - 特定のアカウント: Kakukyusei@gmail.com's Account

5. 「続行」をクリック
6. トークン名を入力（例: `worthome-pages-deploy`）
7. 「作成」をクリック
8. **新しいトークンをコピー**（後で確認できません！）

---

### 方法2: Cloudflareダッシュボードで直接設定（最も簡単）

APIトークンの権限設定が複雑な場合、Cloudflareダッシュボードで直接設定する方が簡単です。

#### ステップ1: プロジェクトにアクセス

1. https://dash.cloudflare.com/ にログイン
2. 左メニューから「Workers & Pages」を選択
3. `worthome-japan` プロジェクトを探す
   - **存在する場合:** プロジェクトをクリック
   - **存在しない場合:** 後述の「プロジェクト作成手順」を参照

#### ステップ2: 環境変数を設定

1. プロジェクトページで「Settings」タブをクリック
2. 左メニューから「Environment variables」を選択
3. 「Add variable」ボタンをクリック
4. 以下を入力:
   ```
   変数名: RESEND_API_KEY
   値: re_W9QmDcnn_GfKD6xjQPAG9R6EP7EgPVMr7
   環境: Production（本番環境）
   ```
5. ✅ **「Encrypt」にチェックを入れる**（重要！）
6. 「Save」をクリック

---

## 📦 プロジェクト作成手順（プロジェクトが存在しない場合）

### オプションA: ダイレクトアップロード（推奨）

1. https://dash.cloudflare.com/ にログイン
2. 左メニュー「Workers & Pages」→「Create」
3. 「Pages」タブを選択
4. 「Upload assets」を選択

5. プロジェクト名を入力: `worthome-japan`

6. **distフォルダをアップロード:**
   - サンドボックスから `/home/user/webapp/dist/` フォルダをダウンロード
   - または以下のバックアップからダウンロード:
     ```
     https://page.gensparksite.com/project_backups/worthome_japan_production_ready.tar.gz
     ```
   - 解凍後、`dist`フォルダをCloudflareにドラッグ&ドロップ

7. 「Deploy」をクリック

8. デプロイ完了後、Settings → Environment variables で環境変数を設定

### オプションB: GitHub連携（自動デプロイ）

1. GitHubリポジトリを作成
2. コードをプッシュ:
   ```bash
   cd /home/user/webapp
   git remote add origin https://github.com/YOUR_USERNAME/worthome-japan.git
   git push -u origin main
   ```

3. Cloudflareダッシュボード:
   - Workers & Pages → Create
   - 「Connect to Git」を選択
   - GitHubリポジトリを選択
   - プロジェクト名: `worthome-japan`
   - ビルドコマンド: `npm run build`
   - ビルド出力ディレクトリ: `dist`

4. 「Save and Deploy」をクリック

5. Settings → Environment variables で環境変数を設定

---

## ✅ 設定完了後の確認

### 1. デプロイURL確認

プロジェクト作成後、以下のURLが発行されます:
```
https://worthome-japan.pages.dev
```

### 2. お問合せフォームテスト

1. `https://worthome-japan.pages.dev/contact` にアクセス
2. テストデータを入力して送信
3. 成功メッセージが表示されることを確認
4. `kakukyusei@gmail.com` でメール受信を確認

### 3. カスタムドメイン設定（オプション）

1. プロジェクトページ → Custom domains
2. 「Set up a custom domain」をクリック
3. ドメイン名を入力（例: `worthome-japan.com`）
4. DNS設定を確認・更新

---

## 🔍 トラブルシューティング

### 問題1: APIトークンエラー "Unable to authenticate request"

**原因:** APIトークンの権限が不足

**解決策:**
1. 新しいAPIトークンを適切な権限で作成
2. または、Cloudflareダッシュボードで直接設定（推奨）

### 問題2: プロジェクトが見つからない

**原因:** `worthome-japan` プロジェクトが未作成

**解決策:**
- 上記の「プロジェクト作成手順」を参照

### 問題3: メール送信が動作しない

**原因:** 環境変数 `RESEND_API_KEY` が未設定

**解決策:**
1. プロジェクト Settings → Environment variables
2. `RESEND_API_KEY` を追加
3. 値: `re_W9QmDcnn_GfKD6xjQPAG9R6EP7EgPVMr7`
4. ✅ Encrypt にチェック

---

## 📋 必要な情報まとめ

### Cloudflareアカウント情報
```
アカウント: kakukyusei@gmail.com
アカウントID: 590b43c2b46972e43103a874e9f6bf08
APIトークン: uDxm2Sh0sy6wcwmQDOVWEYp1ancCrV3HvLloA-uz (権限不足)
```

### プロジェクト情報
```
プロジェクト名: worthome-japan
ビルド出力: dist/
ビルドコマンド: npm run build
```

### 環境変数（必須）
```
変数名: RESEND_API_KEY
値: re_W9QmDcnn_GfKD6xjQPAG9R6EP7EgPVMr7
暗号化: ✅ Yes
```

### Resendアカウント情報
```
送信先: kakukyusei@gmail.com
APIキー: re_W9QmDcnn_GfKD6xjQPAG9R6EP7EgPVMr7
プラン: 無料（月100通）
```

---

## 🎯 推奨される手順

### 最も簡単な方法（5分で完了）

1. **Cloudflareダッシュボードにログイン**
   - https://dash.cloudflare.com/

2. **Workers & Pages → Create → Pages → Upload assets**

3. **プロジェクト名入力:** `worthome-japan`

4. **distフォルダをアップロード**
   - サンドボックスの `/home/user/webapp/dist/` をダウンロード
   - またはバックアップから取得

5. **デプロイ完了後、環境変数を設定**
   - Settings → Environment variables
   - `RESEND_API_KEY` = `re_W9QmDcnn_GfKD6xjQPAG9R6EP7EgPVMr7`
   - ✅ Encrypt

6. **テスト**
   - `https://worthome-japan.pages.dev/contact`
   - フォーム送信テスト
   - メール受信確認

---

## 📞 サポート

### 参考リンク

- **Cloudflare Pages ドキュメント:**
  https://developers.cloudflare.com/pages/

- **APIトークン作成ガイド:**
  https://developers.cloudflare.com/fundamentals/api/get-started/create-token/

- **環境変数設定:**
  https://developers.cloudflare.com/pages/configuration/build-configuration/#environment-variables

### その他のガイド

- **完全デプロイガイド:** `QUICK_DEPLOY_GUIDE.md`
- **お問合せフォーム設定:** `CONTACT_FORM_SETUP.md`
- **メール送信確認:** `EMAIL_WORKING_CONFIRMATION.md`

---

**作成日:** 2025-11-09  
**アカウント:** kakukyusei@gmail.com  
**プロジェクト:** worthome-japan
