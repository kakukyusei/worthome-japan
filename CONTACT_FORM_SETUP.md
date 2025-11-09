# お問い合わせフォーム設定ガイド

## 📧 概要

WORTHOMEウェブサイトのお問い合わせフォームは、**Resend**メール送信サービスを使用して`kakukyusei@gmail.com`にメールを送信します。

## 🔧 設定手順

### 1. Resendアカウント作成（無料）

1. [Resend](https://resend.com/)にアクセス
2. 「Sign Up」をクリックしてアカウント作成
3. メールアドレス認証を完了

**無料プラン:**
- 月間100通まで送信可能
- APIアクセス完全対応
- クレジットカード不要

### 2. APIキー取得

1. Resendダッシュボードにログイン
2. 左メニュー「API Keys」をクリック
3. 「Create API Key」をクリック
4. 名前を入力（例: `worthome-production`）
5. 「Full access」を選択
6. 「Add」をクリック
7. **生成されたAPIキーをコピー**（後で確認できません）

### 3. ローカル開発環境での設定

`.dev.vars`ファイルに実際のAPIキーを設定:

```bash
# .dev.vars
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. 本番環境での設定

#### 方法A: Wrangler CLIを使用

```bash
cd /home/user/webapp

# Resend APIキーを設定
npx wrangler secret put RESEND_API_KEY
# プロンプトが表示されたらAPIキーを貼り付け

# 確認
npx wrangler secret list --project-name worthome-japan
```

#### 方法B: Cloudflareダッシュボードを使用

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)にログイン
2. 「Workers & Pages」→ 「worthome-japan」を選択
3. 「Settings」タブ → 「Environment variables」
4. 「Add variable」をクリック
5. 変数名: `RESEND_API_KEY`
6. 値: コピーしたAPIキーを貼り付け
7. 「Encrypt」をチェック（推奨）
8. 「Save」をクリック

### 5. ドメイン認証（推奨）

Resendの無料プランでは`onboarding@resend.dev`からメールが送信されます。
カスタムドメイン（例: `noreply@worthome-japan.com`）を使用したい場合:

1. Resendダッシュボード → 「Domains」
2. 「Add Domain」をクリック
3. `worthome-japan.com`を入力
4. DNSレコードを追加（MX、TXT、DKIM）
5. 認証完了後、`src/index.tsx`を修正:

```typescript
from: 'WORTHOME お問い合わせ <noreply@worthome-japan.com>',
```

## 📝 フォームの動作

### 送信されるメール内容

```
【WORTHOMEウェブサイトからのお問い合わせ】

会社名: 〇〇株式会社
お名前: 山田太郎
メールアドレス: yamada@example.com
電話番号: 03-1234-5678
お問い合わせ種類: 製品に関するお問い合わせ

お問い合わせ内容:
[ユーザーが入力した内容]

---
このメールはWORTHOME Japanウェブサイトのお問い合わせフォームから送信されました。
送信日時: 2025/11/09 14:30:45
```

### 送信先メールアドレス

- **現在:** `kakukyusei@gmail.com`
- **変更方法:** `src/index.tsx`の85行目を編集

```typescript
to: ['your-new-email@example.com'],
```

複数の宛先に送信する場合:

```typescript
to: ['kakukyusei@gmail.com', 'sales@worthome-japan.com'],
```

## 🧪 テスト方法

### ローカル環境でテスト

1. `.dev.vars`に実際のAPIキーを設定
2. プロジェクトをビルド&起動:

```bash
cd /home/user/webapp
npm run build
pm2 restart all
```

3. ブラウザで`http://localhost:3000/contact`を開く
4. フォームに入力して送信
5. `kakukyusei@gmail.com`でメール受信を確認

### 本番環境でテスト

1. デプロイ完了後、`https://worthome-japan.pages.dev/contact`にアクセス
2. テストデータを入力して送信
3. メール受信を確認

## ⚠️ トラブルシューティング

### エラー: "メール送信設定が完了していません"

**原因:** `RESEND_API_KEY`が設定されていない

**解決策:**
- ローカル: `.dev.vars`ファイルを確認
- 本番: Cloudflareダッシュボードで環境変数を設定

### エラー: "メール送信に失敗しました"

**原因:** 
1. APIキーが無効
2. Resendの送信上限超過（月100通）
3. メールアドレスが無効

**解決策:**
1. ResendダッシュボードでAPIキーを確認
2. Resendダッシュボードで送信履歴を確認
3. 送信先メールアドレスを確認

### メールが届かない

**確認事項:**
1. 迷惑メールフォルダを確認
2. Resendダッシュボードで送信ログを確認
3. `kakukyusei@gmail.com`が正しいか確認

## 💰 料金について

**Resend 無料プラン:**
- 月間100通まで無料
- APIアクセス制限なし
- カスタムドメイン対応

**月100通を超える場合:**
- Proプラン: $20/月（月間50,000通まで）
- または別のメールサービスに切り替え（SendGrid、Mailgunなど）

## 📚 参考リンク

- [Resend公式ドキュメント](https://resend.com/docs)
- [Resend APIリファレンス](https://resend.com/docs/api-reference/emails/send-email)
- [Cloudflare Workers Secrets](https://developers.cloudflare.com/workers/configuration/secrets/)

## 🔐 セキュリティ注意事項

1. **APIキーを公開しない:** `.dev.vars`は`.gitignore`に含まれています
2. **本番環境では必ず暗号化:** Cloudflareの「Encrypt」オプションを使用
3. **APIキーの定期更新:** セキュリティのため定期的に再生成を推奨
4. **スパム対策:** 必要に応じてreCAPTCHAなどを追加検討

---

**最終更新:** 2025-11-09
