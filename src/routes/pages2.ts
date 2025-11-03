// 页面内容模块2 - 事业内容和产品页面

// パートナーシップページ
export const partnershipContent = `
<section class="content-section">
    <div class="container">
        <h2 class="section-title">株式会社萬橡和のパートナーシップ</h2>
        
        <div style="text-align: center; margin: 3rem 0;">
            <img src="https://page.gensparksite.com/v1/base64_upload/ee0d594d5fe8fe9ad4eaa84650d80e96" alt="パートナーシップ体制図" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy">
        </div>

        <div class="visual-section" style="background-image: url('https://www.6sigma.us/wp-content/uploads/2024/09/quality-inspection.webp'); background-size: cover; background-position: center;">
            <div style="background: rgba(255, 255, 255, 0.95); padding: 2rem; border-radius: 8px;">
                <h2>主要パートナー</h2>
                <div class="partners-grid">
                <div class="info-item">
                    <i class="fas fa-industry"></i>
                    <h3>鞍鋼集団</h3>
                    <p>世界第3位の生産量を誇る総合鉄鋼メーカー。2021年に本鋼集団と合併し、鞍山鋼鉄と本渓鋼鉄の生産拠点を有する。</p>
                </div>
                <div class="info-item">
                    <i class="fas fa-fire"></i>
                    <h3>本鋼(本渓鋼鉄)</h3>
                    <p>鞍鋼集団傘下の主要生産拠点。高品質な普通鋼・特殊鋼の製造を担当。</p>
                </div>
                <div class="info-item">
                    <i class="fas fa-mountain"></i>
                    <h3>攀鋼長城特殊鋼</h3>
                    <p>高品質な特殊鋼およびチタン・チタン合金の専門メーカー。</p>
                </div>
                <div class="info-item">
                    <i class="fas fa-handshake"></i>
                    <h3>鞍鋼集団日本</h3>
                    <p>鞍鋼インターナショナルの完全子会社。日本市場での協業パートナー。</p>
                </div>
                <div class="info-item">
                    <i class="fas fa-ship"></i>
                    <h3>中国遠洋海運集団(COSCO)</h3>
                    <p>華北地域本部。海上輸送・通関・国内配送を担当。</p>
                </div>
                <div class="info-item">
                    <i class="fas fa-warehouse"></i>
                    <h3>指定受取倉庫等</h3>
                    <p></p>
                </div>
            </div>
        </div>
        </div>
    </div>
</section>
`;

// 取引モデルページ
export const businessModelContent = `
<section class="content-section">
    <div class="container">
        <h2 class="section-title">お客様に安心をお届けする取引フロー</h2>
        
        <div class="content-with-image">
            <div class="content-block">
                <p class="lead">お見積・ご請求は円建て / 関税込・持込渡し(関税立替) / 指定場所へ配送</p>
                <p style="font-size: 1.1rem; margin-bottom: 2rem;">
                    <strong>役割分担:</strong> 品質=鞍鋼集団 / 輸送・通関=COSCO / 窓口=萬橡和
                </p>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.8rem;"><i class="fas fa-check-circle" style="color: var(--primary-color); margin-right: 0.5rem;"></i> 円建て取引で為替リスク軽減</li>
                    <li style="margin-bottom: 0.8rem;"><i class="fas fa-check-circle" style="color: var(--primary-color); margin-right: 0.5rem;"></i> 関税立替で煩雑な手続き不要</li>
                    <li style="margin-bottom: 0.8rem;"><i class="fas fa-check-circle" style="color: var(--primary-color); margin-right: 0.5rem;"></i> 指定場所へ直接配送</li>
                </ul>
            </div>
            <div class="content-image">
                <img src="https://scm.ncsu.edu/wp-content/uploads/sites/29/2021/10/LA-Port-16x9-1.jpg" alt="グローバル物流" loading="lazy">
            </div>
        </div>

        <div class="process-steps">
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h3>見積・条件合意</h3>
                    <p>お客様のご要望をヒアリングし、最適な製品仕様と条件をご提案します。</p>
                    <div class="role-tags">
                        <span class="role-tag worthome">萬橡和: 窓口対応</span>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h3>発注・前払い</h3>
                    <p>正式なご発注をいただき、円建てで前払金をお支払いいただきます。</p>
                    <div class="role-tags">
                        <span class="role-tag worthome">萬橡和: 契約・請求</span>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h3>生産手配</h3>
                    <p>鞍鋼集団が製品仕様を確認し、生産計画を立案・実行します。</p>
                    <div class="role-tags">
                        <span class="role-tag anko">鞍鋼集団: 生産管理</span>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <h3>大連港搬入</h3>
                    <p>完成した製品を大連港に搬入し、船積み準備を行います。</p>
                    <div class="role-tags">
                        <span class="role-tag anko">鞍鋼集団: 輸送手配</span>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">5</div>
                <div class="step-content">
                    <h3>海上輸送</h3>
                    <p>COSCOが大連港から日本の港まで海上輸送を行います。</p>
                    <div class="role-tags">
                        <span class="role-tag cosco">COSCO: 海上輸送</span>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">6</div>
                <div class="step-content">
                    <h3>日本到着・通関</h3>
                    <p>日本の港に到着後、通関手続きと関税手配を行います。</p>
                    <div class="role-tags">
                        <span class="role-tag cosco">COSCO: 通関・関税</span>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">7</div>
                <div class="step-content">
                    <h3>国内配送・検収</h3>
                    <p>お客様指定の場所まで国内配送し、検収を行います。</p>
                    <div class="role-tags">
                        <span class="role-tag cosco">COSCO: 国内配送</span>
                        <span class="role-tag worthome">萬橡和: 納品確認</span>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">8</div>
                <div class="step-content">
                    <h3>請求・支払い</h3>
                    <p>納品完了後、残金のご請求とお支払いをいただきます。</p>
                    <div class="role-tags">
                        <span class="role-tag worthome">萬橡和: 請求・決済</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="commitment-box">
            <h3><i class="fas fa-shield-alt"></i> 萬橡和の3つの役割</h3>
            <ul class="commitment-list">
                <li><i class="fas fa-check-circle"></i> <strong>窓口機能:</strong> お客様との一元的なコミュニケーション窓口として、要件定義から納品まで一貫してサポート</li>
                <li><i class="fas fa-check-circle"></i> <strong>調整機能:</strong> 鞍鋼集団とCOSCOとの連携を円滑に進め、スムーズな取引を実現</li>
                <li><i class="fas fa-check-circle"></i> <strong>リスク管理:</strong> 円建て取引により為替リスクを軽減し、お客様の資金繰りをサポート</li>
            </ul>
        </div>
    </div>
</section>
`;

// 製品一覧ページ
export const productsContent = `
<section class="content-section">
    <div class="container">
        <h2 class="section-title">高品質な鉄鋼製品を幅広くご提供</h2>
        
        <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
            <p style="font-size: 1.05rem; line-height: 1.8;">鞍鋼集団の主要製品を取り扱い、お客様のニーズに合わせた最適なソリューションを提供します。JIS認証取得済みの普通鋼から、高精度な特殊鋼、軽量・高強度のチタン合金まで、幅広い製品ラインナップを取り揃えております。</p>
        </div>
        
        <div class="products-grid">
            <div class="product-card">
                <div class="product-header">
                    <i class="fas fa-industry"></i>
                    <h3>本鋼普通鋼</h3>
                </div>
                <div class="product-body">
                    <h4>JIS認証取得済み</h4>
                    <ul>
                        <li><i class="fas fa-check"></i> 熱間圧延コイル</li>
                        <li><i class="fas fa-check"></i> 冷間圧延コイル</li>
                        <li><i class="fas fa-check"></i> 溶融亜鉛めっき鋼板</li>
                        <li><i class="fas fa-check"></i> 電気亜鉛めっき鋼板</li>
                        <li><i class="fas fa-check"></i> 厚板</li>
                    </ul>
                    <a href="/products/bengang-steel" class="product-link">詳細を見る <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>

            <div class="product-card">
                <div class="product-header">
                    <i class="fas fa-cogs"></i>
                    <h3>本鋼特殊鋼</h3>
                </div>
                <div class="product-body">
                    <h4>高精度・高品質</h4>
                    <ul>
                        <li><i class="fas fa-check"></i> 車輪用鋼</li>
                        <li><i class="fas fa-check"></i> 大梁用鋼</li>
                        <li><i class="fas fa-check"></i> ラインパイプ用鋼</li>
                        <li><i class="fas fa-check"></i> 耐候性鋼</li>
                        <li><i class="fas fa-check"></i> 丸棒</li>
                    </ul>
                    <a href="/products/bengang-special" class="product-link">詳細を見る <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>

            <div class="product-card">
                <div class="product-header">
                    <i class="fas fa-tools"></i>
                    <h3>攀鋼特殊鋼</h3>
                </div>
                <div class="product-body">
                    <h4>多様な用途に対応</h4>
                    <ul>
                        <li><i class="fas fa-check"></i> 工具鋼</li>
                        <li><i class="fas fa-check"></i> 構造用鋼</li>
                        <li><i class="fas fa-check"></i> 軸受鋼</li>
                        <li><i class="fas fa-check"></i> 耐熱・耐食鋼</li>
                        <li><i class="fas fa-check"></i> ステンレス鋼</li>
                    </ul>
                    <a href="/products/pangang-special" class="product-link">詳細を見る <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>

            <div class="product-card">
                <div class="product-header">
                    <i class="fas fa-atom"></i>
                    <h3>攀鋼チタン・チタン合金</h3>
                </div>
                <div class="product-body">
                    <h4>軽量・高強度・耐食性</h4>
                    <ul>
                        <li><i class="fas fa-check"></i> スポンジチタン</li>
                        <li><i class="fas fa-check"></i> チタンインゴット</li>
                        <li><i class="fas fa-check"></i> チタン丸棒</li>
                        <li><i class="fas fa-check"></i> チタン板</li>
                        <li><i class="fas fa-check"></i> チタン線材</li>
                    </ul>
                    <a href="/products/pangang-titanium" class="product-link">詳細を見る <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>

        <div class="integrated-system" style="margin-top: 3rem;">
            <h3><i class="fas fa-certificate"></i> 品質保証</h3>
            <p>すべての製品は、鞍鋼集団の厳格な品質管理のもとで製造されています。JIS認証取得製品をはじめ、国際基準に準拠した高品質な鉄鋼製品をご提供します。</p>
        </div>
    </div>
</section>
`;

// 联系页面
export const contactContent = `
<section class="content-section">
    <div class="container">
        <div class="content-block">
            <p class="lead" style="text-align: center;">製品に関するご質問やお見積りのご相談は、以下のフォームよりお気軽にお問い合わせください。</p>
        </div>

        <div class="contact-form">
            <form id="contactForm">
                <div class="form-group">
                    <label for="company" class="required">会社名</label>
                    <input type="text" id="company" name="company" required>
                </div>

                <div class="form-group">
                    <label for="name" class="required">お名前</label>
                    <input type="text" id="name" name="name" required>
                </div>

                <div class="form-group">
                    <label for="email" class="required">メールアドレス</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div class="form-group">
                    <label for="phone">電話番号</label>
                    <input type="tel" id="phone" name="phone">
                </div>

                <div class="form-group">
                    <label for="category" class="required">お問い合わせ種類</label>
                    <select id="category" name="category" required>
                        <option value="">選択してください</option>
                        <option value="estimate">お見積りのご依頼</option>
                        <option value="product">製品に関するお問い合わせ</option>
                        <option value="partnership">パートナーシップに関するお問い合わせ</option>
                        <option value="other">その他</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="message" class="required">お問い合わせ内容</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%;">
                    送信する <i class="fas fa-paper-plane"></i>
                </button>
            </form>
        </div>

        <div class="contact-info">
            <h3><i class="fas fa-building"></i> 株式会社萬橡和</h3>
            <p><i class="fas fa-map-marker-alt"></i> 打合せ拠点: 大阪市西区阿波座2-1-1 CAMCO西本町ビル10F(鞍鋼ジャパン内)</p>
            <p><i class="fas fa-globe"></i> Web: <a href="https://worthome.co.jp" target="_blank">worthome.co.jp</a></p>
            <p style="margin-top: 1rem; font-size: 0.95rem;">
                <i class="fas fa-info-circle"></i> 
                お問い合わせ内容を確認次第、担当者より3営業日以内にご連絡させていただきます。
            </p>
        </div>
    </div>
</section>
`;
