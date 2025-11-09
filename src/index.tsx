import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'
import { Resend } from 'resend'
import { getPageLayout } from './templates/layout'
import { 
  homeContent, 
  aboutContent, 
  philosophyContent, 
  messageContent 
} from './routes/pages'
import { 
  partnershipContent, 
  businessModelContent, 
  productsContent, 
  contactContent 
} from './routes/pages2'
import {
  ankouSteelContent,
  bengangSteelContent,
  bengangSpecialContent,
  ankouThickPlateContent,
  pangangSpecialContent,
  pangangTitaniumContent
} from './routes/products'

type Bindings = {
  RESEND_API_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()

// CORS設定 (APIエンドポイント用)
app.use('/api/*', cors())

// 静的ファイル配信
app.use('/static/*', serveStatic({ root: './public' }))

// 首页
app.get('/', (c) => {
  return c.html(getPageLayout('ホーム', homeContent, 'home'))
})

// 会社情報
app.get('/about', (c) => {
  return c.html(getPageLayout('株式会社萬橡和について', aboutContent, 'company-about'))
})

app.get('/philosophy', (c) => {
  return c.html(getPageLayout('企業理念', philosophyContent, 'company-philosophy'))
})

app.get('/message', (c) => {
  return c.html(getPageLayout('代表者挨拶', messageContent, 'company-message'))
})

// 事業内容
app.get('/partnership', (c) => {
  return c.html(getPageLayout('パートナーシップ', partnershipContent, 'business-partnership'))
})

app.get('/business-model', (c) => {
  return c.html(getPageLayout('取引モデル', businessModelContent, 'business-model'))
})

// 製品情報
app.get('/products', (c) => {
  return c.html(getPageLayout('取り扱う製品', productsContent, 'products'))
})

// 鞍鋼普通鋼（NEW - 最優先）
app.get('/products/ankou-steel', (c) => {
  return c.html(getPageLayout('鞍鋼普通鋼', ankouSteelContent, 'products-ankou-steel'))
})

app.get('/products/bengang-steel', (c) => {
  return c.html(getPageLayout('本鋼普通鋼', bengangSteelContent, 'products-bengang-steel'))
})

app.get('/products/bengang-special', (c) => {
  return c.html(getPageLayout('本鋼特殊鋼', bengangSpecialContent, 'products-bengang-special'))
})

app.get('/products/pangang-special', (c) => {
  return c.html(getPageLayout('攀鋼特殊鋼', pangangSpecialContent, 'products-pangang-special'))
})

app.get('/products/pangang-titanium', (c) => {
  return c.html(getPageLayout('攀鋼チタン・チタン合金', pangangTitaniumContent, 'products-pangang-titanium'))
})

// 旧URLリダイレクト（互換性維持）
app.get('/products/ankou-thick-plate', (c) => {
  return c.redirect('/products/ankou-steel', 301)
})

// お問合せ
app.get('/contact', (c) => {
  return c.html(getPageLayout('お問合せ', contactContent, 'contact'))
})

// お問い合わせフォーム送信API
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { company, name, email, phone, category, message } = body

    // バリデーション
    if (!company || !name || !email || !category || !message) {
      return c.json({ error: '必須項目が入力されていません' }, 400)
    }

    // メールアドレス検証
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return c.json({ error: '有効なメールアドレスを入力してください' }, 400)
    }

    // Resend APIキー取得
    const resendApiKey = c.env.RESEND_API_KEY
    if (!resendApiKey || resendApiKey === 're_dummy_key_replace_with_real_key') {
      console.error('RESEND_API_KEY is not configured or is using dummy key')
      return c.json({ 
        error: 'メール送信設定が完了していません。管理者にお問い合わせください。',
        details: 'RESEND_API_KEY が設定されていないか、ダミーキーが使用されています。'
      }, 500)
    }

    const resend = new Resend(resendApiKey)

    // カテゴリーの日本語表示
    const categoryMap: { [key: string]: string } = {
      estimate: 'お見積りのご依頼',
      product: '製品に関するお問い合わせ',
      partnership: 'パートナーシップに関するお問い合わせ',
      other: 'その他'
    }

    // メール本文作成
    const emailBody = `
【WORTHOMEウェブサイトからのお問い合わせ】

会社名: ${company}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}
お問い合わせ種類: ${categoryMap[category] || category}

お問い合わせ内容:
${message}

---
このメールはWORTHOME Japanウェブサイトのお問い合わせフォームから送信されました。
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
    `.trim()

    // メール送信
    const { data, error } = await resend.emails.send({
      from: 'WORTHOME お問い合わせ <onboarding@resend.dev>',
      to: ['kakukyusei@gmail.com'],
      subject: `【お問い合わせ】${categoryMap[category] || category} - ${company}様`,
      text: emailBody,
    })

    if (error) {
      console.error('Resend API error:', error)
      return c.json({ 
        error: 'メール送信に失敗しました。管理者にお問い合わせください。',
        details: error.message || 'Resend API エラー'
      }, 500)
    }

    console.log('Email sent successfully:', data)
    return c.json({ 
      success: true, 
      message: 'お問い合わせを受け付けました。担当者より3営業日以内にご連絡いたします。' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return c.json({ 
      error: 'サーバーエラーが発生しました。管理者にお問い合わせください。',
      details: errorMessage
    }, 500)
  }
})

export default app
