import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
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

const app = new Hono()

// 静态文件服务
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

// お問い合わせ
app.get('/contact', (c) => {
  return c.html(getPageLayout('お問い合わせ', contactContent, 'contact'))
})

export default app
