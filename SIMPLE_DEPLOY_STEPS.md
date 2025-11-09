# 🚀 WORTHOMEウェブサイト 簡単デプロイ手順

**所要時間:** 約5分  
**難易度:** ★☆☆☆☆（とても簡単）

---

## 📦 必要な情報

すべて準備済みです！

✅ **Cloudflareアカウント:** kakukyusei@gmail.com  
✅ **Resend APIキー:** re_W9QmDcnn_GfKD6xjQPAG9R6EP7EgPVMr7  
✅ **プロジェクト名:** worthome-japan  
✅ **ビルド済みファイル:** 下記URLからダウンロード可能

---

## 🎯 デプロイ手順（5ステップ）

### ステップ1: バックアップファイルをダウンロード

以下のURLからプロジェクトファイルをダウンロード:

```
https://page.gensparksite.com/project_backups/worthome_japan_final_with_email.tar.gz
```

**ファイルサイズ:** 約66MB

### ステップ2: ファイルを解凍

ダウンロードしたファイルを解凍します。

**Windows:**
- 7-Zipなどの解凍ソフトを使用
- 右クリック → 「7-Zip」 → 「展開」

**Mac:**
- ダブルクリックで自動解凍

**Linux:**
```bash
tar -xzf worthome_japan_final_with_email.tar.gz
```

解凍後、`webapp/dist/` フォルダを探します。

### ステップ3: Cloudflare Pagesにログイン

1. https://dash.cloudflare.com/ にアクセス
2. メールアドレスでログイン: `kakukyusei@gmail.com`
3. 左メニューから「Workers & Pages」を選択

### ステップ4: プロジェクトを作成してアップロード

1. **「Create」ボタンをクリック**

2. **「Pages」タブを選択**

3. **「Upload assets」を選択**

4. **プロジェクト名を入力:**
   ```
   worthome-japan
   ```

5. **distフォルダをアップロード:**
   - 解凍したフォルダ内の `webapp/dist/` フォルダを見つける
   - `dist`フォルダ全体をドラッグ&ドロップ
   - または「Select from computer」をクリックして選択

6. **「Deploy」ボタンをクリック**

7. **デプロイ完了を待つ（約1-2分）**

### ステップ5: 環境変数を設定

デプロイ完了後:

1. **プロジェクトページで「Settings」タブをクリック**

2. **左メニューから「Environment variables」を選択**

3. **「Add variable」ボタンをクリック**

4. **以下を入力:**
   ```
   Variable name: RESEND_API_KEY
   Value: re_W9QmDcnn_GfKD6xjQPAG9R6EP7EgPVMr7
   Environment: Production
   ```

5. **✅ 「Encrypt」にチェックを入れる**（重要！）

6. **「Save」をクリック**

7. **再デプロイを実行:**
   - 「Deployments」タブに戻る
   - 最新のデプロイの「...」メニューをクリック
   - 「Retry deployment」を選択

---

## ✅ 動作確認

### 1. ウェブサイトにアクセス

デプロイ完了後、以下のURLが発行されます:

```
https://worthome-japan.pages.dev
```

### 2. お問合せフォームをテスト

1. `https://worthome-japan.pages.dev/contact` にアクセス

2. テスト情報を入力:
   - 会社名: テスト株式会社
   - お名前: テスト太郎
   - メールアドレス: 任意の有効なメールアドレス
   - 電話番号: 03-1234-5678（任意）
   - お問い合わせ種類: いずれかを選択
   - お問い合わせ内容: テストメッセージ

3. **「送信する」ボタンをクリック**

4. **成功メッセージが表示されることを確認:**
   ```
   お問い合わせいただき、誠にありがとうございます。
   担当者よりご連絡させていただきます。
   どうぞ宜しくお願い申し上げます。
   ```

5. **メールを確認:**
   - `kakukyusei@gmail.com` の受信トレイをチェック
   - 件名: 【お問い合わせ】...
   - 送信元: WORTHOME お問い合わせ

---

## 🌐 カスタムドメイン設定（オプション）

独自ドメイン（例: worthome-japan.com）を使用する場合:

### 1. カスタムドメインを追加

1. プロジェクトページで「Custom domains」タブをクリック
2. 「Set up a custom domain」をクリック
3. ドメイン名を入力（例: `worthome-japan.com`）
4. 「Continue」をクリック

### 2. DNS設定

Cloudflareが提供するCNAMEレコードをドメインレジストラに追加:

```
Type: CNAME
Name: @ (または worthome-japan.com)
Target: worthome-japan.pages.dev
```

### 3. SSL/TLS設定

CloudflareがSSL証明書を自動発行します（約10-15分）。

---

## 🎉 完了！

これでWORTHOMEウェブサイトが正式に公開されました！

### 📊 確認項目チェックリスト

- ✅ ウェブサイトが表示される
- ✅ 全ページが正常に動作
- ✅ お問合せフォームが送信できる
- ✅ メールが kakukyusei@gmail.com に届く
- ✅ レスポンシブデザインが動作（スマホでも確認）

---

## ⚠️ よくある問題と解決方法

### 問題1: メールが送信されない

**原因:** 環境変数が設定されていない

**解決策:**
1. Settings → Environment variables を確認
2. `RESEND_API_KEY` が存在するか確認
3. 値が正しいか確認: `re_W9QmDcnn_GfKD6xjQPAG9R6EP7EgPVMr7`
4. 再デプロイを実行

### 問題2: メールが届かない

**原因:** 迷惑メールフォルダに振り分けられている

**解決策:**
1. Gmailの迷惑メールフォルダを確認
2. 「プロモーション」タブも確認
3. Resendダッシュボードで送信履歴を確認: https://resend.com/emails

### 問題3: デプロイが失敗する

**原因:** distフォルダが正しくアップロードされていない

**解決策:**
1. バックアップファイルを再ダウンロード
2. 正しく解凍されているか確認
3. `dist`フォルダ内に `_worker.js` が存在するか確認
4. 再度アップロード

### 問題4: APIトークンエラー

**説明:** 
提供されたCloudflare APIトークンには権限が不足しています。
そのため、コマンドラインからのデプロイはできません。

**解決策:**
- **上記の手順（ダイレクトアップロード）を使用してください**
- この方法ならAPIトークンは不要です

---

## 📞 サポート情報

### 関連ドキュメント

- **APIトークン詳細:** `CLOUDFLARE_API_TOKEN_SETUP.md`
- **お問合せフォーム設定:** `CONTACT_FORM_SETUP.md`
- **メール送信確認:** `EMAIL_WORKING_CONFIRMATION.md`
- **完全デプロイガイド:** `QUICK_DEPLOY_GUIDE.md`

### Cloudflareサポート

- **Cloudflare Pages ドキュメント:**
  https://developers.cloudflare.com/pages/

- **Cloudflareコミュニティ:**
  https://community.cloudflare.com/

### Resendサポート

- **Resend ドキュメント:**
  https://resend.com/docs

- **送信履歴確認:**
  https://resend.com/emails

---

## 📋 重要な情報まとめ

### アカウント情報
```
Cloudflare: kakukyusei@gmail.com
Resend: kakukyusei@gmail.com
```

### APIキー（必須）
```
RESEND_API_KEY: re_W9QmDcnn_GfKD6xjQPAG9R6EP7EgPVMr7
```

### プロジェクト情報
```
プロジェクト名: worthome-japan
本番URL: https://worthome-japan.pages.dev
お問合せURL: https://worthome-japan.pages.dev/contact
送信先メール: kakukyusei@gmail.com
```

### バックアップファイル
```
最新版: https://page.gensparksite.com/project_backups/worthome_japan_final_with_email.tar.gz
サイズ: 約66MB
内容: 完全なウェブサイト + メール送信機能
```

---

**作成日:** 2025-11-09  
**バージョン:** Final with Email Integration  
**ステータス:** 本番環境デプロイ準備完了 ✅
