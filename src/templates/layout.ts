// 导航栏HTML
export const getNavbar = (activePage: string = '') => `
<nav class="navbar">
    <div class="container">
        <div class="nav-brand">
            <img src="https://page.gensparksite.com/v1/base64_upload/b3f6d59a65ac30eda70a4c876e964049" alt="WORTHOME" class="nav-brand-logo">
            <h1>株式会社萬橡和</h1>
        </div>
        <button class="mobile-menu-toggle" id="mobileMenuToggle">
            <i class="fas fa-bars"></i>
        </button>
        <ul class="nav-menu" id="navMenu">
            <li><a href="/" ${activePage === 'home' ? 'class="active"' : ''}>ホーム</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle ${activePage.startsWith('company') ? 'active' : ''}">会社情報 <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="/about" ${activePage === 'company-about' ? 'class="active"' : ''}>株式会社萬橡和について</a></li>
                    <li><a href="/philosophy" ${activePage === 'company-philosophy' ? 'class="active"' : ''}>企業理念</a></li>
                    <li><a href="/message" ${activePage === 'company-message' ? 'class="active"' : ''}>代表者挨拶</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle ${activePage.startsWith('business') ? 'active' : ''}">事業内容 <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="/partnership" ${activePage === 'business-partnership' ? 'class="active"' : ''}>パートナーシップ</a></li>
                    <li><a href="/business-model" ${activePage === 'business-model' ? 'class="active"' : ''}>取引モデル</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle ${activePage.startsWith('products') ? 'active' : ''}">製品情報 <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="/products" ${activePage === 'products' ? 'class="active"' : ''}>取り扱う製品</a></li>
                    <li><a href="/products/bengang-steel" ${activePage === 'products-bengang-steel' ? 'class="active"' : ''}>本鋼普通鋼</a></li>
                    <li><a href="/products/bengang-special" ${activePage === 'products-bengang-special' ? 'class="active"' : ''}>本鋼特殊鋼</a></li>
                    <li><a href="/products/ankou-thick-plate" ${activePage === 'products-ankou-thick-plate' ? 'class="active"' : ''}>鞍鋼厚板</a></li>
                    <li><a href="/products/pangang-special" ${activePage === 'products-pangang-special' ? 'class="active"' : ''}>攀鋼特殊鋼</a></li>
                    <li><a href="/products/pangang-titanium" ${activePage === 'products-pangang-titanium' ? 'class="active"' : ''}>攀鋼チタン・チタン合金</a></li>
                </ul>
            </li>
            <li><a href="/contact" ${activePage === 'contact' ? 'class="active"' : ''}>お問い合わせ</a></li>
        </ul>
    </div>
</nav>
`;

// 页脚HTML
export const getFooter = () => `
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>株式会社萬橡和</h3>
                <p>WORTHOME</p>
                <p class="footer-address">
                    <i class="fas fa-map-marker-alt"></i>
                    大阪市西区阿波座2-1-1<br>
                    CAMCO西本町ビル10F(鞍鋼ジャパン内)
                </p>
            </div>
            <div class="footer-section">
                <h4>会社情報</h4>
                <ul>
                    <li><a href="/about">会社概要</a></li>
                    <li><a href="/philosophy">企業理念</a></li>
                    <li><a href="/message">代表者挨拶</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>事業内容</h4>
                <ul>
                    <li><a href="/partnership">パートナーシップ</a></li>
                    <li><a href="/business-model">取引モデル</a></li>
                    <li><a href="/products">製品情報</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>お問い合わせ</h4>
                <ul>
                    <li><a href="/contact">お問い合わせフォーム</a></li>
                    <li><a href="https://worthome.co.jp" target="_blank">worthome.co.jp</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 WortHome Int'l Co. All rights reserved.</p>
        </div>
    </div>
</footer>
`;

// 完整页面布局
export const getPageLayout = (title: string, content: string, activePage: string = '') => `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - 株式会社萬橡和</title>
    <link rel="stylesheet" href="/static/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    ${getNavbar(activePage)}
    <main>
        ${content}
    </main>
    ${getFooter()}
    <script src="/static/app.js"></script>
</body>
</html>
`;
