// 页面内容模块 - 包含所有页面的HTML内容

// 首页内容
export const homeContent = `
<section class="hero">
    <div class="hero-content">
        <div class="hero-features">
            <div class="feature-item">
                <i class="fas fa-handshake"></i>
                <h3>信頼のパートナーシップ</h3>
            </div>
            <div class="feature-item">
                <i class="fas fa-leaf"></i>
                <h3>グリーン鉱山ビジョン</h3>
            </div>
            <div class="feature-item">
                <i class="fas fa-shield-alt"></i>
                <h3>強靭なサプライチェーン</h3>
            </div>
        </div>
    </div>
</section>

<section class="intro-section">
    <div class="container">
        <h2 class="section-title">株式会社萬橡和について</h2>
        <div class="intro-content">
            <p>株式会社萬橡和(ばんしょうわ)は、香港の「香港萬橡和國際有限公司」のグループ会社として2025年に設立されました。</p>
            <p>「萬橡和」は、「万象(宇宙・天地のすべて)」に木偏を添えて自然への敬意を示し、日本文化の要でもある「和」を重ねることで、自然の摂理と調和して価値を生む企業姿勢を表しています。</p>
            <div style="text-align: center; margin-top: 2.5rem;">
                <a href="/about" class="btn btn-primary">会社情報へ <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</section>

<section class="cta-section">
    <div class="container">
        <h2>お問い合わせ</h2>
        <p>製品に関するご質問やお見積りのご相談は、お気軽にお問い合わせください。</p>
        <a href="/contact" class="btn btn-primary">お問い合わせフォームへ <i class="fas fa-arrow-right"></i></a>
    </div>
</section>
`;

// 会社概要ページ
export const aboutContent = `
<section class="page-header">
    <div class="container">
        <h1>株式会社萬橡和について</h1>
        <p class="breadcrumb">
            <a href="/">ホーム</a> <i class="fas fa-chevron-right"></i> 
            <span>会社情報</span> <i class="fas fa-chevron-right"></i> 
            <span>株式会社萬橡和について</span>
        </p>
    </div>
</section>

<section class="content-section">
    <div class="container">
        <div class="about-content">
            <h2>グループ会社としての歩み</h2>
            <p class="lead">株式会社萬橡和(ばんしょうわ)は、香港の「香港萬橡和國際有限公司」のグループ会社として2025年に設立されました。</p>
            
            <div class="content-block">
                <p>香港萬橡和國際有限公司は2011年から「本鋼集団(ほんこう)」の製品を代理し始め、「本鋼集団」や「鞍鋼(あんこう)集団」等が生産する鉄鋼製品を、インドや韓国など、多くの国々において販売ネットワークを構築してまいりました。</p>
                <p class="highlight-box">
                    <i class="fas fa-info-circle"></i>
                    <strong>重要な合併:</strong> 2021年に本鋼集団と鞍鋼集団が合併し、生産量が世界3位の新しい鞍鋼集団となりました。
                </p>
            </div>

            <h2>日本での展開</h2>
            <div class="content-block">
                <p>日本においてもパートナー企業たちとの連携を一層強化し、生活基盤であるアジアのより良い発展に、鉄鋼業界に携わる一員として、力を合わせて貢献してまいりたいと願っております。</p>
            </div>

            <h2>社名の由来</h2>
            <div class="content-block">
                <div class="name-origin">
                    <div class="origin-item">
                        <h3>萬橡和</h3>
                        <p>「万象(宇宙・天地のすべて)」に木偏を添えて自然への敬意を示し、日本文化の要でもある「和」を重ねることで、自然の摂理と調和して価値を生む企業姿勢を表しています。</p>
                    </div>
                    <div class="origin-item">
                        <h3>WORTHOME</h3>
                        <p>WORTHとHOMEを組み合わせた造語で、同じ理念を英語で表現しています。「価値ある家」として、関わる全ての人々に温かさと信頼を提供します。</p>
                    </div>
                </div>
            </div>

            <h2>会社概要</h2>
            <div class="company-details">
                <table class="info-table">
                    <tr>
                        <th><i class="fas fa-building"></i> 社名</th>
                        <td>株式会社萬橡和</td>
                    </tr>
                    <tr>
                        <th><i class="fas fa-globe"></i> 英文名</th>
                        <td>WORTHOME</td>
                    </tr>
                    <tr>
                        <th><i class="fas fa-calendar-alt"></i> 設立</th>
                        <td>2025年9月</td>
                    </tr>
                    <tr>
                        <th><i class="fas fa-yen-sign"></i> 資本金</th>
                        <td>2,000万円</td>
                    </tr>
                    <tr>
                        <th><i class="fas fa-user-tie"></i> 代表取締役</th>
                        <td>丁 友(テイ ユウ)</td>
                    </tr>
                    <tr>
                        <th><i class="fas fa-map-marker-alt"></i> 打合せ拠点</th>
                        <td>大阪市西区阿波座2-1-1 CAMCO西本町ビル10F(鞍鋼ジャパン内)</td>
                    </tr>
                    <tr>
                        <th><i class="fas fa-link"></i> Web</th>
                        <td><a href="https://worthome.co.jp" target="_blank">worthome.co.jp</a></td>
                    </tr>
                </table>
            </div>

            <div class="integrated-system">
                <h3><i class="fas fa-industry"></i> 鉱石採掘から製品までの一貫体制</h3>
                <p>鞍鋼集団は、鉱石の採掘から最終製品まで、一貫した生産体制を持つ世界有数の鉄鋼メーカーです。この強固な基盤が、お客様への安定供給を可能にしています。</p>
            </div>
        </div>
    </div>
</section>
`;

// 企業理念ページ
export const philosophyContent = `
<section class="page-header">
    <div class="container">
        <h1>企業理念</h1>
        <p class="breadcrumb">
            <a href="/">ホーム</a> <i class="fas fa-chevron-right"></i> 
            <span>会社情報</span> <i class="fas fa-chevron-right"></i> 
            <span>企業理念</span>
        </p>
    </div>
</section>

<section class="content-section">
    <div class="container">
        <div class="philosophy-intro">
            <h2>株式会社萬橡和の理念(3つの柱)</h2>
            <p class="lead">私たちは、3つの柱を軸に、持続可能な社会の実現と、関わるすべての人々の幸せを追求します。</p>
        </div>

        <div class="pillars">
            <div class="pillar">
                <div class="pillar-number">1</div>
                <div class="pillar-icon">
                    <i class="fas fa-heart"></i>
                </div>
                <h3>人と地域の「幸せ」を育み、信頼の輪を広げる</h3>
                <div class="pillar-content">
                    <p>「Worthome」は「価値」と「家」から成る言葉です。家族を大切にする経営者とスタッフが集う私たちは、社員はもちろん、共に歩むパートナーやお客様とも家族のように誠実に向き合い、関わる全ての人と地域社会の「幸せ」を育みます。</p>
                    <p class="pillar-highlight">萬橡和の「和」が、より大きな信頼の「輪」へと広がるよう努力を重ねてまいります。</p>
                </div>
            </div>

            <div class="pillar">
                <div class="pillar-number">2</div>
                <div class="pillar-icon">
                    <i class="fas fa-leaf"></i>
                </div>
                <h3>脱炭素への貢献(グリーン鉱山ビジョン)</h3>
                <div class="pillar-content">
                    <p>鉄鋼製品は製造から原料採掘まで多くの炭素を排出する産業です。鞍鋼集団と共に「グリーン鉱山ビジョン」を策定し、鉱山への再生可能エネルギー導入を促進。</p>
                    <p class="pillar-highlight">また、EUと中国のカーボンクレジット基準間の対話プラットフォーム構築に貢献し、将来の世界統一基準確立を目指します。</p>
                </div>
            </div>

            <div class="pillar">
                <div class="pillar-number">3</div>
                <div class="pillar-icon">
                    <i class="fas fa-link"></i>
                </div>
                <h3>サプライチェーン強靭化の新たな選択肢</h3>
                <div class="pillar-content">
                    <p>鉄鋼は「産業の血液」です。鞍山鋼鉄集団製品の新たな窓口として、お客様の資金繰りに優しい取引体制を構築し、「強くしなやかな、もう一つの選択肢」を目指します。</p>
                    <p class="pillar-highlight">少量取引でも、お客様のBCP(事業継続計画)の一翼を担えるよう努めてまいります。</p>
                </div>
            </div>
        </div>

        <div class="philosophy-footer">
            <div class="commitment-box">
                <h3><i class="fas fa-handshake"></i> 私たちの約束</h3>
                <ul class="commitment-list">
                    <li><i class="fas fa-check-circle"></i> 家族のような温かさと誠実さで、すべてのステークホルダーと向き合います</li>
                    <li><i class="fas fa-check-circle"></i> 環境への配慮を最優先し、持続可能な事業活動を推進します</li>
                    <li><i class="fas fa-check-circle"></i> お客様の事業継続をサポートする、柔軟で強靭なサプライチェーンを提供します</li>
                    <li><i class="fas fa-check-circle"></i> 信頼と品質を基盤に、アジアの発展に貢献します</li>
                </ul>
            </div>
        </div>
    </div>
</section>
`;

// 代表者挨拶ページ
export const messageContent = `
<section class="page-header">
    <div class="container">
        <h1>代表者挨拶</h1>
        <p class="breadcrumb">
            <a href="/">ホーム</a> <i class="fas fa-chevron-right"></i> 
            <span>会社情報</span> <i class="fas fa-chevron-right"></i> 
            <span>代表者挨拶</span>
        </p>
    </div>
</section>

<section class="content-section">
    <div class="container">
        <div class="message-content">
            <div class="message-header">
                <h2>鉄鋼業界に身を置いて二十余年</h2>
            </div>

            <p class="message-quote">
                優れた製品に「心」が込められてこそ、初めてその真価をお客様にお届けできる
            </p>

            <div class="content-block">
                <p>私は中国遼寧省本渓市に生まれ、幼い頃から本渓鋼鉄のそばで育ちました。鋼鉄は、私のルーツそのものです。萬橡和を設立した思いはシンプルであり、この地で培われた確かな品質の鋼材を、誠実なサービスに載せて、必要としておられるお客様のもとへ届けたい。ただそれだけでした。</p>
            </div>

            <div class="content-block">
                <p>創業以来、鞍鋼集団と緊密に連携し、私たちは単なる商取引ではなく、「自社の責任」として一貫して製品と向き合ってまいりました。お客様が求めているのは契約書という紙ではなく、紛れもない「安心」です。現場で資材到着を待つお客様の立場に立てば、納期と品質の確かさが何よりも重要だと痛感します。</p>
            </div>

            <div class="content-block">
                <p>だからこそ、私たちは速さよりも確実さを、言葉よりも実行を重んじます。これまで、お客様からいただいた最高の褒め言葉は「君たちなら信頼できる」の一言。この信頼が、私たちの歩む原動力です。</p>
            </div>

            <div class="president-profile">
                <h3>代表取締役社長</h3>
                <p class="profile-name">丁 友(テイ ユウ)</p>
                <p>香港萬橡和國際有限公司 / 株式会社萬橡和</p>
                <p style="margin-top: 1rem;">1978年、中国遼寧省本渓市に生まれる。両親が本渓鋼鉄に勤めていた影響もあり、幼い頃から鋼鉄は身近な存在だった。大学卒業後、すぐに鉄鋼貿易の道に進み、鋼鉄と共に生きていくことを決意した。</p>
            </div>
        </div>
    </div>
</section>
`;

// 继续...由于字数限制,我将创建另一个文件包含其余页面内容
