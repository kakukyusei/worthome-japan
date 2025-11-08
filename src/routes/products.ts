// 製品詳細ページ内容 - PPTから再構成

// 鞍鋼普通鋼詳細（PPTスライド9の内容）
export const ankouSteelContent = `
<section class="content-section">
    <div class="container">
        <div class="product-detail-header">
            <h2>鞍鋼普通鋼 - 幅広い産業向け高品質鋼材</h2>
            <p class="lead">鞍鋼（Ansteel Group）は幅広い産業向けに高品質な鋼材製品を提供しています。各製品は厳格な品質管理システムにより製造され、国内外の基準を満たしています。多様な規格と仕様の製品ラインナップが、様々な産業と用途に対応しています。</p>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-layer-group"></i> 厚板（プレート）</h2>
            <p><strong>製品種類：</strong> 一般構造用鋼、建築構造用鋼、低降伏点鋼、建築耐火鋼</p>
            <p><strong>主な用途：</strong> 建築・土木構造物、高層ビル、地震エネルギー吸収部材</p>
            <p><strong>板厚範囲：</strong> 6.0 ~ 150.0 mm</p>
            <p><strong>主な鋼種：</strong> SS400、SM400A/B/C、SM490A/B/C、SN400A/B/C、Q235B、Q345B</p>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-fire"></i> 熱延鋼板</h2>
            <p><strong>製品種類：</strong> 炭素構造用鋼、低合金構造用鋼、溶接構造用鋼、低炭素鋼、製管用鋼</p>
            <p><strong>主な用途：</strong> 一般構造用、溶接構造用、冷間圧延・冷間成形用、溶接鋼管用</p>
            <p><strong>板厚範囲：</strong> 1.6 ~ 25.4 mm</p>
            <p><strong>幅範囲：</strong> 700 ~ 2000 mm</p>
            <p><strong>主な鋼種：</strong> SS330、SS400、SS490、SM400A/B/C、SM490A/B/C、SPHC、SPHD、SPHE</p>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-snowflake"></i> 冷延鋼板</h2>
            <p><strong>製品種類：</strong> プレス用鋼、冷延二相鋼（Dual Phase Steel）、高級炭素構造用鋼</p>
            <p><strong>主な用途：</strong> プレス加工および一般用途、構造用</p>
            <p><strong>板厚範囲：</strong> 0.25 ~ 3.0 mm</p>
            <p><strong>幅範囲：</strong> 600 ~ 1950 mm</p>
            <p><strong>主な鋼種：</strong> SPCC、SPCD、SPCE、SPCF、SPCG、CR260/450DP、CR300/500DP</p>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-circle-notch"></i> 線材</h2>
            <p><strong>製品種類：</strong> 低炭素鋼線材、高級炭素鋼線材、冷間圧造用線材、低合金鋼線材</p>
            <p><strong>主な用途：</strong> 引抜用、冷間圧造用、構造用、溶接棒製造用、ばね鋼線製造用</p>
            <p><strong>線径範囲：</strong> 5.5 ~ 13 mm</p>
            <p><strong>コイル重量：</strong> 1.0 ~ 1.4 トン</p>
            <p><strong>主な鋼種：</strong> SAE1006~1015、SWRH42A~82A、SWRCH8A~22A、30MnSi</p>
        </div>

        <div class="content-block">
            <h2>鞍鋼集団について</h2>
            <div class="integrated-system">
                <p>鞍鋼集団は2021年に本鋼集団と合併し、生産量が世界3位となりました。鉱石採掘から製品製造までの一貫した生産体制により、安定した品質と供給を実現しています。</p>
                <p>厳格な品質管理体制のもと、建築、自動車、造船、機械製造など、あらゆる産業分野に対応した高品質な鋼材を提供しております。</p>
            </div>
        </div>
    </div>
</section>
`;

// 本鋼普通鋼詳細（本鋼特殊鋼の内容を統合）
export const bengangSteelContent = `
<section class="content-section">
    <div class="container">
        <div class="product-detail-header">
            <h2>本鋼普通鋼 - JIS認証取得済み高品質鋼材</h2>
            <p class="lead">本鋼（ほんこう）の製品は、日本工業規格（JIS）の認証を取得しており、高品質な鋼材として日本の製造業に広く活用されています。以下のJIS規格に準拠した製品を提供しております。</p>
            <div class="badges">
                <span class="badge jis">JIS G 3131</span>
                <span class="badge jis">JIS G 3141</span>
                <span class="badge jis">JIS G 3302</span>
                <span class="badge jis">JIS G 3313</span>
                <span class="badge jis">JIS G 3101</span>
            </div>
        </div>

        <div class="content-block">
            <h2>JIS認証取得製品</h2>
            <div class="info-table" style="box-shadow: none;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background: var(--light-color);">
                        <th style="padding: 1rem; border: 1px solid var(--border-color); text-align: left; width: 30%;">JIS規格</th>
                        <th style="padding: 1rem; border: 1px solid var(--border-color); text-align: left;">製品名</th>
                    </tr>
                    <tr>
                        <td style="padding: 1rem; border: 1px solid var(--border-color);">JIS G 3131</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color);">熱間圧延軟鋼板及び鋼帯</td>
                    </tr>
                    <tr style="background: var(--light-color);">
                        <td style="padding: 1rem; border: 1px solid var(--border-color);">JIS G 3141</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color);">冷間圧延鋼板及び鋼帯</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem; border: 1px solid var(--border-color);">JIS G 3302</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color);">溶融亜鉛めっき鋼板及び鋼帯</td>
                    </tr>
                    <tr style="background: var(--light-color);">
                        <td style="padding: 1rem; border: 1px solid var(--border-color);">JIS G 3313</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color);">電気亜鉛めっき鋼板及び鋼帯</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem; border: 1px solid var(--border-color);">JIS G 3101</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color);">一般構造用圧延鋼材</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-car"></i> 熱間圧延——車輪用鋼（概要）</h2>
            <p>強度が高く、プレス荷重に優れ、良好な溶接性能および耐疲労性能を備えています。3大シリーズで10種類以上の品種を有し、板厚は2.3～25.0mmをカバーしています。</p>
            <p>自動車の軽量化と低コスト化の持続的な発展トレンドに対応するため、650MPa級の高強度車輪用鋼BG650CLの試作に成功しました。</p>
            
            <h3 style="margin-top: 2rem;">代表鋼種</h3>
            <div class="name-origin">
                <div class="origin-item">
                    <h4>標準グレード</h4>
                    <div class="badges">
                        <span class="badge">BG330CL</span>
                        <span class="badge">BG350CL</span>
                        <span class="badge">BG380CL</span>
                        <span class="badge">BG420CL</span>
                        <span class="badge">BG490CL</span>
                        <span class="badge">BG540CL</span>
                    </div>
                </div>
                <div class="origin-item">
                    <h4>高強度グレード</h4>
                    <div class="badges">
                        <span class="badge">BG590CL</span>
                        <span class="badge">BG650CL</span>
                    </div>
                </div>
            </div>

            <div class="origin-item">
                <h4>微細粒・二相鋼</h4>
                <div class="badges">
                    <span class="badge">SW400</span>
                    <span class="badge">SW450</span>
                    <span class="badge">DP540</span>
                    <span class="badge">DP590</span>
                    <span class="badge">RS590</span>
                </div>
            </div>
        </div>

        <div class="content-block">
            <h2>車輪専用鋼（仕様・性能要点）</h2>
            <div class="info-table" style="box-shadow: none; overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; min-width: 600px;">
                    <tr style="background: var(--light-color);">
                        <th style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">中国鋼材番号</th>
                        <th style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">鋼板厚さ / mm</th>
                        <th style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">下降伏強さ<br>ReL / MPa</th>
                        <th style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">引張強さ<br>Rm / MPa</th>
                        <th style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">伸び<br>A / %</th>
                        <th style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">180°曲げ試験</th>
                    </tr>
                    <tr>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); font-weight: bold;">BG330CL</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color);">2.0～4.0</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">≥225</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">330～430</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">≥33</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">d=0.5a</td>
                    </tr>
                    <tr style="background: var(--light-color);">
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); font-weight: bold;">BG350CL</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color);">2.0～4.0</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">≥235</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">350～450</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">≥32</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">d=0.5a</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); font-weight: bold;">BG420CL</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color);">2.0～5.5</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">≥290</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">420～520</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">≥28</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">d=0.5a</td>
                    </tr>
                    <tr style="background: var(--light-color);">
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); font-weight: bold;">BG590CL</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color);">＜6.0</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">≥480</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">≥590</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">≥20</td>
                        <td style="padding: 0.8rem; border: 1px solid var(--border-color); text-align: center;">d=2a</td>
                    </tr>
                </table>
            </div>
            <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--mid-gray);">
                注: 1) 降伏現象が明瞭でない場合は、Rp0.2を採用。2) 板厚10.0mm以上の鋼板・鋼帯は引張強さの下限を10MPa引き下げ可。3) 曲げ試験片の幅bは35mm以上。
            </p>
        </div>

        <div class="content-block">
            <h2>微細粒車輪鋼・二相車輪鋼（仕様要点）</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div>
                    <h3 style="color: #2d2d2d;">微細粒車輪鋼（SWシリーズ）</h3>
                    <div class="info-table" style="box-shadow: none;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <tr style="background: var(--light-color);">
                                <th style="padding: 0.6rem; border: 1px solid var(--border-color);">鋼材番号</th>
                                <th style="padding: 0.6rem; border: 1px solid var(--border-color);">降伏強さ<br>(MPa)</th>
                                <th style="padding: 0.6rem; border: 1px solid var(--border-color);">引張強さ<br>(MPa)</th>
                            </tr>
                            <tr>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color); font-weight: bold;">SW300</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">≥300</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">≥380</td>
                            </tr>
                            <tr style="background: var(--light-color);">
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color); font-weight: bold;">SW400</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">≥400</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">≥490</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color); font-weight: bold;">SW450</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">≥450</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">520-650</td>
                            </tr>
                            <tr style="background: var(--light-color);">
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color); font-weight: bold;">SW500</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">≥500</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">≥560</td>
                            </tr>
                        </table>
                    </div>
                    <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--mid-gray);">※すべての試験片は横方向試験片とする。</p>
                </div>

                <div>
                    <h3 style="color: #2d2d2d;">二相車輪鋼（DP/RSシリーズ）</h3>
                    <div class="info-table" style="box-shadow: none;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <tr style="background: var(--light-color);">
                                <th style="padding: 0.6rem; border: 1px solid var(--border-color);">鋼材番号</th>
                                <th style="padding: 0.6rem; border: 1px solid var(--border-color);">降伏強さ<br>(MPa)</th>
                                <th style="padding: 0.6rem; border: 1px solid var(--border-color);">引張強さ<br>(MPa)</th>
                            </tr>
                            <tr>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color); font-weight: bold;">DP540</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">≥355</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">540-640</td>
                            </tr>
                            <tr style="background: var(--light-color);">
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color); font-weight: bold;">DP590</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">≥400</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">580-680</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color); font-weight: bold;">RS590</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">480-580</td>
                                <td style="padding: 0.6rem; border: 1px solid var(--border-color);">580-680</td>
                            </tr>
                        </table>
                    </div>
                    <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--mid-gray);">※DPシリーズは板厚により伸び値が変動（厚いほど低下）。</p>
                </div>
            </div>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-truck"></i> 熱間圧延——自動車フレーム</h2>
            <p>自動車の大型車両、特にトラックやバスのフレーム用に開発された高強度鋼材です。軽量化と耐久性を両立し、コスト効率にも優れています。</p>
            <p>大梁用鋼は、自動車産業の厳しい要求に応えるため、高強度と優れた加工性・溶接性を併せ持ち、設計の自由度を高めています。</p>
            
            <h3 style="margin-top: 1.5rem;">対象鋼種</h3>
            <div class="badges">
                <span class="badge">BG510</span>
                <span class="badge">BG610</span>
                <span class="badge">BG650L</span>
                <span class="badge">BG700L</span>
                <span class="badge">BG750L</span>
            </div>

            <h3 style="margin-top: 2rem;">主な特長</h3>
            <ul style="list-style: none; margin-top: 1rem;">
                <li><i class="fas fa-check-circle" style="color: #2d2d2d; margin-right: 0.5rem;"></i> 高強度と靭性を両立した材料設計</li>
                <li><i class="fas fa-check-circle" style="color: #2d2d2d; margin-right: 0.5rem;"></i> 軽量化による車両の燃費向上に貢献</li>
                <li><i class="fas fa-check-circle" style="color: #2d2d2d; margin-right: 0.5rem;"></i> 優れたプレス成形性と溶接性</li>
                <li><i class="fas fa-check-circle" style="color: #2d2d2d; margin-right: 0.5rem;"></i> 耐衝撃特性に優れ、安全性能を向上</li>
                <li><i class="fas fa-check-circle" style="color: #2d2d2d; margin-right: 0.5rem;"></i> 各種表面処理に対応可能</li>
            </ul>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-water"></i> 熱間圧延——パイプライン</h2>
            <p>高強度・高靭性・耐食性に優れ、石油・天然ガス輸送用として中国トップレベルの品質を実現し、国際市場にも供給されています。</p>
            <p>Φ1422×21.4mm および Φ1219×22mm など大径パイプライン鋼板を量産供給し、厚さ22mm以下の高級グレード製品に対応可能です。</p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem;">
                <div style="background: var(--light-color); padding: 1.5rem; border-radius: 8px;">
                    <h3 style="color: #2d2d2d; margin-bottom: 1rem;">石油・天然ガス輸送管用鋼</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 0.3rem 0;"><i class="fas fa-cog" style="color: #2d2d2d; margin-right: 0.5rem;"></i> 適用規格：BX1507—2020、GB/T 14164-2013</li>
                        <li style="padding: 0.3rem 0;"><i class="fas fa-cog" style="color: #2d2d2d; margin-right: 0.5rem;"></i> 主な鋼種：X80、X70、X65、X60、X56、X52、X46、X42、B など</li>
                    </ul>
                </div>

                <div style="background: var(--light-color); padding: 1.5rem; border-radius: 8px;">
                    <h3 style="color: #2d2d2d; margin-bottom: 1rem;">サワーサービス用鋼</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 0.3rem 0;"><i class="fas fa-flask" style="color: #2d2d2d; margin-right: 0.5rem;"></i> H₂S を含む苛酷環境向けに開発された専用鋼材</li>
                        <li style="padding: 0.3rem 0;"><i class="fas fa-flask" style="color: #2d2d2d; margin-right: 0.5rem;"></i> HIC・SSCC 耐性、高圧・酸性・低温環境対応</li>
                        <li style="padding: 0.3rem 0;"><i class="fas fa-flask" style="color: #2d2d2d; margin-right: 0.5rem;"></i> 主な鋼種：X52MS、X65MS、X70MS など</li>
                    </ul>
                </div>
            </div>

            <h3 style="margin-top: 2rem;">主な特長</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-top: 1rem;">
                <div style="text-align: center; padding: 1rem; background: var(--light-color); border-radius: 6px;">
                    <i class="fas fa-dumbbell" style="font-size: 2rem; color: #2d2d2d; margin-bottom: 0.5rem;"></i>
                    <p style="font-weight: bold;">高強度</p>
                </div>
                <div style="text-align: center; padding: 1rem; background: var(--light-color); border-radius: 6px;">
                    <i class="fas fa-shield-alt" style="font-size: 2rem; color: #2d2d2d; margin-bottom: 0.5rem;"></i>
                    <p style="font-weight: bold;">高靭性</p>
                </div>
                <div style="text-align: center; padding: 1rem; background: var(--light-color); border-radius: 6px;">
                    <i class="fas fa-fire" style="font-size: 2rem; color: #2d2d2d; margin-bottom: 0.5rem;"></i>
                    <p style="font-weight: bold;">優れた溶接性</p>
                </div>
                <div style="text-align: center; padding: 1rem; background: var(--light-color); border-radius: 6px;">
                    <i class="fas fa-tint" style="font-size: 2rem; color: #2d2d2d; margin-bottom: 0.5rem;"></i>
                    <p style="font-weight: bold;">耐食性</p>
                </div>
                <div style="text-align: center; padding: 1rem; background: var(--light-color); border-radius: 6px;">
                    <i class="fas fa-globe" style="font-size: 2rem; color: #2d2d2d; margin-bottom: 0.5rem;"></i>
                    <p style="font-weight: bold;">国際基準適合</p>
                </div>
            </div>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-sun"></i> 耐候性鋼（代表グレード）</h2>
            <p>優れた耐食性を持ち、塗装なしでも長期間使用できる鋼材です。</p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem;">
                <div style="border: 2px solid #2d2d2d; padding: 1.5rem; border-radius: 8px;">
                    <h3 style="color: #2d2d2d; margin-bottom: 1rem;">コンテナ用耐候鋼</h3>
                    <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">SPA-H (JIS G3125-2015準拠)</h4>
                    <p style="margin-bottom: 0.5rem;">板厚：1.2-12mm</p>
                    <h4 style="font-size: 1.1rem; margin-top: 1rem; margin-bottom: 0.5rem;">第2世代高強度コンテナ用鋼</h4>
                    <p>BG450C、BG550C / 板厚：2.0-6.0mm</p>
                </div>

                <div style="border: 2px solid #2d2d2d; padding: 1.5rem; border-radius: 8px;">
                    <h3 style="color: #2d2d2d; margin-bottom: 1rem;">鉄道車両用耐候鋼</h3>
                    <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Q450NQR1 / Q550NQR1</h4>
                    <p style="margin-bottom: 0.5rem;">適用規格：Q/BB105-2020、BX 1597-2017</p>
                    <p style="margin-bottom: 0.5rem;">板厚：2.0-12mm</p>
                    <h4 style="font-size: 1.1rem; margin-top: 1rem; margin-bottom: 0.5rem;">BGNS440</h4>
                    <p>BX1508-2015 / 板厚：3.0-12mm</p>
                </div>

                <div style="border: 2px solid #2d2d2d; padding: 1.5rem; border-radius: 8px;">
                    <h3 style="color: #2d2d2d; margin-bottom: 1rem;">耐食構造用鋼</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 0.3rem 0;">09CuPTiRE-A/B：2.0-20.0mm</li>
                        <li style="padding: 0.3rem 0;">09CuPCrNi：2.0-20.0mm</li>
                        <li style="padding: 0.3rem 0;">09CuPCrNi-A/B：2.0-16mm</li>
                        <li style="padding: 0.3rem 0;">09CuP：2.0-16mm</li>
                    </ul>
                    <p style="margin-top: 1rem; font-size: 0.9rem;">建築用タワー・高耐候性構造部材</p>
                </div>

                <div style="border: 2px solid #2d2d2d; padding: 1.5rem; border-radius: 8px;">
                    <h3 style="color: #2d2d2d; margin-bottom: 1rem;">ボイラー・煙道用</h3>
                    <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">耐硫酸露点腐食鋼</h4>
                    <p style="margin-bottom: 0.5rem;">適用規格：BX 1047-2018</p>
                    <p>板厚：2.0-12mm</p>
                </div>
            </div>
        </div>

        <div class="commitment-box">
            <h3><i class="fas fa-industry"></i> 用途と実績</h3>
            <p>本鋼の普通鋼製品は、自動車産業を中心に、エネルギー産業、建築、鉄道車両など、幅広い分野で採用されています。高い品質と安定供給により、お客様の製造プロセスをサポートします。</p>
        </div>
    </div>
</section>
`;

// 本鋼特殊鋼詳細（新しい内容：工具鋼と構造用鋼・軸受鋼）
export const bengangSpecialContent = `
<section class="content-section">
    <div class="container">
        <div class="product-detail-header">
            <h2>本鋼特殊鋼 - 高精度加工と優れた耐久性</h2>
            <p class="lead">本鋼の特殊鋼は、工具鋼から構造用鋼・軸受鋼まで、多様な産業ニーズに応える高品質素材を提供しています。精密金型製造から機械部品まで、幅広い用途に対応します。</p>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-tools"></i> 工具鋼（Tool and Die Steel）</h2>
            <p>精密金型から産業機器まで、高い耐摩耗性と加工性を両立した工具鋼製品を提供しています。多様な鋼種と製品形状により、お客様の幅広いニーズに対応します。</p>
            
            <h3 style="margin-top: 2rem; color: #2d2d2d;">主な生産鋼種</h3>
            <div style="background: var(--light-color); padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                <div class="badges" style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    <span class="badge">SKD11</span>
                    <span class="badge">SUS420J2</span>
                    <span class="badge">20/9SiCr</span>
                    <span class="badge">D2/O1</span>
                    <span class="badge">SKM93/SKM93H</span>
                    <span class="badge">CR12MOV/20#</span>
                    <span class="badge">1.2083/1.2316</span>
                    <span class="badge">1.2083ESR</span>
                    <span class="badge">1.2316MOD ESR</span>
                    <span class="badge">X33CrS16Mod</span>
                    <span class="badge">X36CrMo17mod+N</span>
                    <span class="badge">X38CrMoV5-3Mod</span>
                    <span class="badge">1.2344MOD ESR</span>
                    <span class="badge">T8A</span>
                    <span class="badge">40Cr</span>
                    <span class="badge">1.2201</span>
                    <span class="badge">1.2083/H13</span>
                    <span class="badge">1.2311</span>
                    <span class="badge">SKS93</span>
                    <span class="badge">A8MOD</span>
                    <span class="badge">AISI420</span>
                    <span class="badge">CrWMn</span>
                    <span class="badge">40Cr13</span>
                </div>
            </div>

            <h3 style="margin-top: 2rem; color: #2d2d2d;">主な製品形状</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <i class="fas fa-square" style="font-size: 2.5rem; color: #2d2d2d; margin-bottom: 1rem;"></i>
                    <h4 style="margin-bottom: 0.5rem;">Flat Bar（平鋼）</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">板状の工具鋼</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <i class="fas fa-circle" style="font-size: 2.5rem; color: #2d2d2d; margin-bottom: 1rem;"></i>
                    <h4 style="margin-bottom: 0.5rem;">Round Bar（丸棒）</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">丸棒状の工具鋼</p>
                </div>
            </div>

            <h3 style="margin-top: 2rem; color: #2d2d2d;">製品寸法範囲</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 1rem;">
                <div style="background: var(--light-color); padding: 1.5rem; border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h4 style="margin-bottom: 1rem;">Flat Bar 寸法範囲</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 0.4rem 0;"><i class="fas fa-ruler-horizontal" style="color: #2d2d2d; margin-right: 0.5rem;"></i> <strong>厚さ (Thickness):</strong> 6mm ～ 400mm</li>
                        <li style="padding: 0.4rem 0;"><i class="fas fa-ruler-vertical" style="color: #2d2d2d; margin-right: 0.5rem;"></i> <strong>幅 (Width):</strong> 100mm ～ 1000mm</li>
                        <li style="padding: 0.4rem 0;"><i class="fas fa-ruler" style="color: #2d2d2d; margin-right: 0.5rem;"></i> <strong>長さ (Length):</strong> 2000mm ～ 5800mm</li>
                    </ul>
                </div>

                <div style="background: var(--light-color); padding: 1.5rem; border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h4 style="margin-bottom: 1rem;">Round Bar 寸法範囲</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 0.4rem 0;"><i class="fas fa-circle-notch" style="color: #2d2d2d; margin-right: 0.5rem;"></i> <strong>直径 (Diameter):</strong> 20mm ～ 600mm</li>
                        <li style="padding: 0.4rem 0;"><i class="fas fa-ruler" style="color: #2d2d2d; margin-right: 0.5rem;"></i> <strong>長さ (Length):</strong> 2000mm ～ 5800mm</li>
                    </ul>
                </div>
            </div>

            <h3 style="margin-top: 2rem; color: #2d2d2d;">納入状態（Delivery Condition）</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-top: 1rem;">
                <div style="text-align: center; padding: 1rem; background: var(--light-color); border-radius: 6px;">
                    <h4 style="font-size: 0.95rem;">Hot Rolled</h4>
                    <p style="font-size: 0.85rem; color: var(--mid-gray);">熱間圧延</p>
                </div>
                <div style="text-align: center; padding: 1rem; background: var(--light-color); border-radius: 6px;">
                    <h4 style="font-size: 0.95rem;">Annealed</h4>
                    <p style="font-size: 0.85rem; color: var(--mid-gray);">焼鈍処理</p>
                </div>
                <div style="text-align: center; padding: 1rem; background: var(--light-color); border-radius: 6px;">
                    <h4 style="font-size: 0.95rem;">Sand Blasted</h4>
                    <p style="font-size: 0.85rem; color: var(--mid-gray);">サンドブラスト</p>
                </div>
                <div style="text-align: center; padding: 1rem; background: var(--light-color); border-radius: 6px;">
                    <h4 style="font-size: 0.95rem;">Peeled</h4>
                    <p style="font-size: 0.85rem; color: var(--mid-gray);">皮剥き</p>
                </div>
            </div>

            <h3 style="margin-top: 2rem; color: #2d2d2d;">輸出情報</h3>
            <div style="background: linear-gradient(135deg, rgba(196, 30, 58, 0.05), rgba(196, 30, 58, 0.1)); padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 0.4rem 0;"><i class="fas fa-globe-asia" style="color: #2d2d2d; margin-right: 0.5rem;"></i> <strong>主な輸出先:</strong> 韓国、台湾</li>
                    <li style="padding: 0.4rem 0;"><i class="fas fa-box" style="color: #2d2d2d; margin-right: 0.5rem;"></i> <strong>最低注文量:</strong> 25mt per steel grade And 2mt per size</li>
                    <li style="padding: 0.4rem 0;"><i class="fas fa-shipping-fast" style="color: #2d2d2d; margin-right: 0.5rem;"></i> <strong>輸送方法:</strong> Shipped by container（コンテナ輸送）</li>
                    <li style="padding: 0.4rem 0;"><i class="fas fa-calendar-alt" style="color: #2d2d2d; margin-right: 0.5rem;"></i> <strong>納期:</strong> 60-90 days for shipment（出荷まで60～90日）</li>
                </ul>
            </div>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-cog"></i> 構造用鋼・軸受鋼（Mechanical Manufacturing Steel, Bearing Steel）</h2>
            <p>機械製造分野向けの高強度構造用鋼と、精密機械部品に使用される軸受鋼を提供しています。自動車産業から産業機械まで、幅広い用途に対応する高品質素材です。</p>
            
            <h3 style="margin-top: 2rem; color: #2d2d2d;">主な生産鋼種</h3>
            <div style="background: var(--light-color); padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                <div class="badges" style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    <span class="badge">C45</span>
                    <span class="badge">42CrMo4</span>
                    <span class="badge">S355J2</span>
                    <span class="badge">20MnCr5</span>
                    <span class="badge">EN24</span>
                    <span class="badge">EN353</span>
                    <span class="badge">EN4340</span>
                    <span class="badge">EN4130</span>
                    <span class="badge">SAE52100</span>
                    <span class="badge">S20C</span>
                    <span class="badge">S45C</span>
                    <span class="badge">SCR440H</span>
                    <span class="badge">SCM440</span>
                </div>
            </div>

            <h3 style="margin-top: 2rem; color: #2d2d2d;">主な製品形状</h3>
            <div style="text-align: center; padding: 2rem; background: var(--light-color); border-radius: 8px; margin-top: 1rem;">
                <i class="fas fa-circle" style="font-size: 3rem; color: #2d2d2d; margin-bottom: 1rem;"></i>
                <h4 style="font-size: 1.2rem; margin-bottom: 0.5rem;">Round Bar（丸棒）</h4>
                <p style="font-size: 0.95rem; color: var(--mid-gray);">高強度・高精度の丸棒製品</p>
            </div>

            <h3 style="margin-top: 2rem; color: #2d2d2d;">輸出情報</h3>
            <div style="background: linear-gradient(135deg, rgba(196, 30, 58, 0.05), rgba(196, 30, 58, 0.1)); padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 0.4rem 0;"><i class="fas fa-globe" style="color: #2d2d2d; margin-right: 0.5rem;"></i> <strong>主な輸出先:</strong> 欧州、インド、韓国</li>
                </ul>
            </div>

            <h3 style="margin-top: 2rem; color: #2d2d2d;">特殊鋼種／仕様の最低注文量</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
                <div style="background: var(--light-color); padding: 1.5rem; border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h4 style="margin-bottom: 1rem;"><i class="fas fa-industry"></i> 電気炉製鋼</h4>
                    <p style="font-size: 1.1rem; font-weight: bold; color: #2d2d2d;">400MT per steel grade</p>
                    <p style="font-size: 0.9rem; color: var(--mid-gray); margin-top: 0.5rem;">鋼種あたり400トン</p>
                </div>

                <div style="background: var(--light-color); padding: 1.5rem; border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h4 style="margin-bottom: 1rem;"><i class="fas fa-fire"></i> 転炉製鋼</h4>
                    <p style="font-size: 1.1rem; font-weight: bold; color: #2d2d2d;">500MT per steel grade</p>
                    <p style="font-size: 0.9rem; color: var(--mid-gray); margin-top: 0.5rem;">鋼種あたり500トン</p>
                </div>

                <div style="background: var(--light-color); padding: 1.5rem; border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h4 style="margin-bottom: 1rem;"><i class="fas fa-circle"></i> 小径バー（直径85mm以下）</h4>
                    <p style="font-size: 1.1rem; font-weight: bold; color: #2d2d2d;">400MT per size</p>
                    <p style="font-size: 0.9rem; color: var(--mid-gray); margin-top: 0.5rem;">サイズあたり400トン</p>
                </div>
            </div>
        </div>

        <div class="commitment-box">
            <h3><i class="fas fa-industry"></i> 用途と実績</h3>
            <p>本鋼の特殊鋼製品は、金型製造、自動車産業、機械製造、精密機器など、幅広い分野で採用されています。高い品質と安定供給、充実した技術サポートにより、お客様の製造プロセスを強力にサポートします。</p>
        </div>
    </div>
</section>
`;

// 鞍鋼厚板詳細
export const ankouThickPlateContent = `
<section class="content-section">
    <div class="container">
        <div class="product-detail-header">
            <h2>鞍鋼厚板 - インフラ建設の信頼性</h2>
            <p class="lead">鞍鋼の厚板製品は、インフラ建設や土木工事に求められる高い強度と信頼性を備えています。厳格な品質管理システムにより製造され、国内外の厳しい基準を満たしています。各製品は異なる環境条件や用途に対応しており、多様なプロジェクトに最適なソリューションを提供します。</p>
        </div>

        <div class="content-block">
            <h2>主な製品種類</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem;">
                <div style="background: var(--light-color); padding: 2rem; border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h3 style="color: #2d2d2d; margin-bottom: 1rem;">一般構造用鋼</h3>
                    <p style="line-height: 1.7; margin-bottom: 1rem;">一般的な建築・土木構造物向け。バランスの取れた機械的特性と経済性を提供。</p>
                </div>

                <div style="background: var(--light-color); padding: 2rem; border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h3 style="color: #2d2d2d; margin-bottom: 1rem;">建築構造用鋼</h3>
                    <p style="line-height: 1.7; margin-bottom: 1rem;">高層ビルや大型施設向け。優れた強度と靭性を両立し、地震や風荷重に対応。</p>
                </div>

                <div style="background: var(--light-color); padding: 2rem; border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h3 style="color: #2d2d2d; margin-bottom: 1rem;">低降伏点鋼</h3>
                    <p style="line-height: 1.7; margin-bottom: 1rem;">地震エネルギー吸収部材向け。制御された降伏点により、地震時のエネルギーを効率的に吸収。</p>
                </div>

                <div style="background: var(--light-color); padding: 2rem; border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h3 style="color: #2d2d2d; margin-bottom: 1rem;">建築耐火鋼</h3>
                    <p style="line-height: 1.7; margin-bottom: 1rem;">高温環境下でも強度維持が必要な建築物向け。火災時も構造物の崩壊を防止。</p>
                </div>
            </div>
        </div>

        <div class="content-block">
            <h2>性能比較表</h2>
            <div class="info-table" style="box-shadow: none; overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background: var(--light-color);">
                        <th style="padding: 1rem; border: 1px solid var(--border-color); text-align: left;">製品タイプ</th>
                        <th style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">耐荷重性</th>
                        <th style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">耐震性</th>
                        <th style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">耐火性</th>
                        <th style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">加工性</th>
                        <th style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">経済性</th>
                    </tr>
                    <tr>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: bold;">一般構造用鋼</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">◎</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">○</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">△</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">◎</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">◎</td>
                    </tr>
                    <tr style="background: var(--light-color);">
                        <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: bold;">建築構造用鋼</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">◎</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">◎</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">○</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">○</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">○</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: bold;">低降伏点鋼</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">○</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">◎</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">○</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">◎</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">△</td>
                    </tr>
                    <tr style="background: var(--light-color);">
                        <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: bold;">建築耐火鋼</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">◎</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">○</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">◎</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">△</td>
                        <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; font-size: 1.5rem;">△</td>
                    </tr>
                </table>
            </div>
            <p style="margin-top: 1rem; text-align: center; font-size: 0.9rem; color: var(--mid-gray);">※ 評価: ◎=優れている、○=良好、△=標準</p>
        </div>

        <div class="commitment-box">
            <h3><i class="fas fa-building"></i> 信頼性の高い品質</h3>
            <p>鞍鋼の厚板は、高層ビル、橋梁、船舶など、多様なインフラプロジェクトで使用されています。厳格な品質管理と安定した供給体制により、お客様のプロジェクトを確実にサポートします。</p>
        </div>
    </div>
</section>
`;

// 攀鋼特殊鋼詳細
export const pangangSpecialContent = `
<section class="content-section">
    <div class="container">
        <div class="product-detail-header">
            <h2>攀鋼長城特殊鋼 - 多様な産業ニーズに応える高品質素材</h2>
            <p class="lead">攀鋼長城の特殊鋼製品は、工具鋼、構造用鋼、耐熱・耐食鋼、ステンレス鋼など、多様な産業分野で求められる高性能素材を提供しています。</p>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-tools"></i> 工具鋼</h2>
            <p>棒鋼・線材（H13、DG-1、5Cr2NiMoVS、NAK80、FDAC）、薄板・平鋼（DC53、D2、A2、SKS93、T10A、M2）、モジュール（P20、4Cr13、718、FC5、SKD11）など多様なグレードを提供。精密金型から産業機器まで、高い耐摩耗性と加工性を両立。</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <h4>棒鋼・線材</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">H13、DG-1、NAK80など</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <h4>薄板・平鋼</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">DC53、D2、SKS93など</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <h4>モジュール</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">P20、718、SKD11など</p>
                </div>
            </div>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-cog"></i> 構造用鋼・軸受鋼</h2>
            <p>熱間圧延・鍛造による高強度部材（Φ12～350mm）。自動車産業（40Cr、40MnBHH、42CrMoA）、建設機械（40Mn2、35MnB、40CrB）、鉱山（27SiMn、30CrMnSi）、エネルギー分野向け特殊グレードを取り揃え。</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                <div style="padding: 1.5rem; background: var(--light-color); border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h4 style="color: #2d2d2d; margin-bottom: 0.5rem;">自動車産業用</h4>
                    <p style="font-size: 0.9rem;">40Cr、40MnBHH、42CrMoA</p>
                </div>
                <div style="padding: 1.5rem; background: var(--light-color); border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h4 style="color: #2d2d2d; margin-bottom: 0.5rem;">建設機械用</h4>
                    <p style="font-size: 0.9rem;">40Mn2、35MnB、40CrB</p>
                </div>
                <div style="padding: 1.5rem; background: var(--light-color); border-radius: 8px; border-left: 4px solid #2d2d2d;">
                    <h4 style="color: #2d2d2d; margin-bottom: 0.5rem;">鉱山・エネルギー用</h4>
                    <p style="font-size: 0.9rem;">27SiMn、30CrMnSi</p>
                </div>
            </div>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-fire"></i> 耐熱・耐食鋼</h2>
            <p>火力・原子力発電用の高性能合金（12Cr1MoV、15CrMoG、20CrMnMo）、電気スラグ中空鍛造による厚肉管（P91、P92、T92）、デュアルメタル押出管など。高温・高圧・腐食環境下での安定した性能を実現。</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <h4>発電用高性能合金</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">12Cr1MoV、15CrMoGなど</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <h4>厚肉管</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">P91、P92、T92</p>
                </div>
            </div>
        </div>

        <div class="content-block">
            <h2><i class="fas fa-shield-alt"></i> ステンレス鋼</h2>
            <p>各国規格対応の高品質ステンレス鋼（SUS304/316/410/420/430相当）。マルテンサイト系、オーステナイト系など用途に合わせた多様なグレードを提供。耐食性、耐熱性、加工性のバランスに優れた素材です。</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <h4>オーステナイト系</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">SUS304/316相当</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <h4>マルテンサイト系</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">SUS410/420相当</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <h4>フェライト系</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">SUS430相当</p>
                </div>
            </div>
        </div>

        <div class="commitment-box">
            <h3><i class="fas fa-industry"></i> 幅広い産業分野での実績</h3>
            <p>攀鋼長城の特殊鋼は、金型製造、自動車、建設機械、発電設備、化学プラントなど、多様な産業分野で使用されています。高品質と技術サポートにより、お客様の製造プロセスを強力にサポートします。</p>
        </div>
    </div>
</section>
`;

// 攀鋼チタン詳細
export const pangangTitaniumContent = `
<section class="content-section">
    <div class="container">
        <div class="product-detail-header">
            <h2>攀鋼長城チタン・チタン合金 - 軽量・高強度・優れた耐食性</h2>
            <p class="lead">攀鋼長城が提供するチタンおよびチタン合金製品は、その軽量性、高強度、優れた耐食性により、航空宇宙、化学プラント、医療機器など様々な高要求産業で使用されています。</p>
            <div class="badges">
                <span class="badge">軽量</span>
                <span class="badge">高強度</span>
                <span class="badge">耐食性</span>
                <span class="badge">生体適合性</span>
            </div>
        </div>

        <div class="content-block">
            <h2>製品ラインナップ</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem;">
                <div style="padding: 2rem; background: var(--light-color); border-radius: 8px; border-top: 4px solid #2d2d2d;">
                    <h3 style="color: #2d2d2d; margin-bottom: 0.5rem;">スポンジチタン</h3>
                    <p style="font-size: 0.95rem;">高純度原料、インゴット・合金製造の基本素材</p>
                </div>

                <div style="padding: 2rem; background: var(--light-color); border-radius: 8px; border-top: 4px solid #2d2d2d;">
                    <h3 style="color: #2d2d2d; margin-bottom: 0.5rem;">チタンインゴット</h3>
                    <p style="font-size: 0.95rem;">10t級の大型インゴットから小型まで多様なサイズに対応</p>
                </div>

                <div style="padding: 2rem; background: var(--light-color); border-radius: 8px; border-top: 4px solid #2d2d2d;">
                    <h3 style="color: #2d2d2d; margin-bottom: 0.5rem;">丸棒</h3>
                    <p style="font-size: 0.95rem;">Rolled Round Bar、精密加工用途向け</p>
                </div>

                <div style="padding: 2rem; background: var(--light-color); border-radius: 8px; border-top: 4px solid #2d2d2d;">
                    <h3 style="color: #2d2d2d; margin-bottom: 0.5rem;">冷間圧延板</h3>
                    <p style="font-size: 0.95rem;">Cold Rolled Sheet、高精度・均一性を実現</p>
                </div>

                <div style="padding: 2rem; background: var(--light-color); border-radius: 8px; border-top: 4px solid #2d2d2d;">
                    <h3 style="color: #2d2d2d; margin-bottom: 0.5rem;">コイル板</h3>
                    <p style="font-size: 0.95rem;">Titanium Flat Bar and Coiled Sheet、多様な厚みに対応</p>
                </div>

                <div style="padding: 2rem; background: var(--light-color); border-radius: 8px; border-top: 4px solid #2d2d2d;">
                    <h3 style="color: #2d2d2d; margin-bottom: 0.5rem;">チタンパイプ</h3>
                    <p style="font-size: 0.95rem;">Seamless Tube、押出管（Extruded Tube）、高純度・高精度</p>
                </div>
            </div>
        </div>

        <div class="content-block">
            <h2>主な用途</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <i class="fas fa-plane" style="font-size: 3rem; color: #2d2d2d; margin-bottom: 1rem;"></i>
                    <h4 style="margin-bottom: 0.5rem;">航空宇宙</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">航空機エンジン、機体構造</p>
                </div>

                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <i class="fas fa-flask" style="font-size: 3rem; color: #2d2d2d; margin-bottom: 1rem;"></i>
                    <h4 style="margin-bottom: 0.5rem;">石油化学</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">反応容器、熱交換器</p>
                </div>

                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <i class="fas fa-hospital" style="font-size: 3rem; color: #2d2d2d; margin-bottom: 1rem;"></i>
                    <h4 style="margin-bottom: 0.5rem;">医療機器</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">インプラント、手術器具</p>
                </div>

                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <i class="fas fa-bolt" style="font-size: 3rem; color: #2d2d2d; margin-bottom: 1rem;"></i>
                    <h4 style="margin-bottom: 0.5rem;">発電設備</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">タービンブレード、配管</p>
                </div>

                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <i class="fas fa-ship" style="font-size: 3rem; color: #2d2d2d; margin-bottom: 1rem;"></i>
                    <h4 style="margin-bottom: 0.5rem;">海洋設備</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">海水淡水化、潜水艦部品</p>
                </div>

                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <i class="fas fa-car" style="font-size: 3rem; color: #2d2d2d; margin-bottom: 1rem;"></i>
                    <h4 style="margin-bottom: 0.5rem;">自動車</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">エンジン部品、マフラー</p>
                </div>

                <div style="text-align: center; padding: 1.5rem; background: var(--light-color); border-radius: 8px;">
                    <i class="fas fa-running" style="font-size: 3rem; color: #2d2d2d; margin-bottom: 1rem;"></i>
                    <h4 style="margin-bottom: 0.5rem;">スポーツ用品</h4>
                    <p style="font-size: 0.9rem; color: var(--mid-gray);">ゴルフクラブ、自転車</p>
                </div>
            </div>
        </div>

        <div class="content-block">
            <h2>主要鋼種とカスタマイズ対応</h2>
            <div style="background: var(--light-color); padding: 2rem; border-radius: 8px; margin-top: 1.5rem;">
                <h3 style="color: #2d2d2d; margin-bottom: 1rem;">純チタン・チタン合金</h3>
                <div class="badges">
                    <span class="badge">TA1</span>
                    <span class="badge">TA2</span>
                    <span class="badge">TA10</span>
                    <span class="badge">TA15</span>
                    <span class="badge">TA17</span>
                    <span class="badge">TB5</span>
                    <span class="badge">TC4</span>
                    <span class="badge">TC11</span>
                    <span class="badge">TC18</span>
                    <span class="badge">Ti50</span>
                </div>
                <p style="margin-top: 1.5rem; font-size: 1.05rem;">
                    <i class="fas fa-wrench" style="color: #2d2d2d; margin-right: 0.5rem;"></i>
                    <strong>カスタマイズ対応可能：</strong>お客様のニーズに合わせた規格・寸法・加工
                </p>
            </div>
        </div>

        <div class="commitment-box">
            <h3><i class="fas fa-award"></i> 攀鋼長城チタンの強み</h3>
            <ul class="commitment-list">
                <li><i class="fas fa-check-circle"></i> <strong>高純度:</strong> 厳格な品質管理により、不純物を極限まで低減した高純度チタンを製造</li>
                <li><i class="fas fa-check-circle"></i> <strong>多様な形状:</strong> スポンジチタンから精密加工品まで、お客様のニーズに応じた形状で提供</li>
                <li><i class="fas fa-check-circle"></i> <strong>安定供給:</strong> 世界最高水準の生産能力と品質管理体制により、安定した供給を実現</li>
                <li><i class="fas fa-check-circle"></i> <strong>技術サポート:</strong> 材料選定から加工方法まで、専門技術者がサポート</li>
            </ul>
        </div>
    </div>
</section>
`;
