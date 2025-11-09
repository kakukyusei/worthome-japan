// モバイルメニュートグル
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // ドロップダウンメニュー (モバイル)
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // フォーム送信処理 (お問い合わせページ用)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // フォームデータの取得
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // バリデーション
            if (!data.company || !data.name || !data.email || !data.category || !data.message) {
                alert('必須項目を入力してください。');
                return;
            }

            // メールアドレスの検証
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('有効なメールアドレスを入力してください。');
                return;
            }

            // 送信ボタンを無効化
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 送信中...';

            try {
                // APIにデータを送信
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    // 成功メッセージ
                    alert('お問合せありがとうございます。\n担当者より3営業日以内にご連絡させていただきます。');
                    contactForm.reset();
                } else {
                    // エラーメッセージ（詳細情報も表示）
                    let errorMsg = result.error || '送信に失敗しました。もう一度お試しください。';
                    if (result.details) {
                        console.error('エラー詳細:', result.details);
                        errorMsg += '\n\n詳細: ' + result.details;
                    }
                    alert('エラー: ' + errorMsg);
                }
            } catch (error) {
                console.error('送信エラー:', error);
                alert('通信エラーが発生しました。もう一度お試しください。');
            } finally {
                // 送信ボタンを再有効化
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }
        });
    }

    // アニメーション効果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // アニメーション対象要素
    const animateElements = document.querySelectorAll('.feature-item, .info-item, .pillar, .product-card, .step');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // スライドショー機能
    const slideshowWrapper = document.querySelector('.slideshow-wrapper');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slide-nav.prev');
    const nextBtn = document.querySelector('.slide-nav.next');
    
    if (slideshowWrapper && slides.length > 0) {
        let currentSlide = 0;
        let autoPlayInterval = null;
        let isTransitioning = false;

        function showSlide(index, skipTransition = false) {
            if (isTransitioning && !skipTransition) return;
            
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            isTransitioning = true;
            const offset = -currentSlide * 100;
            slideshowWrapper.style.transform = `translateX(${offset}%)`;

            // ドットの更新
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });

            // トランジション完了後にフラグをリセット
            setTimeout(() => {
                isTransitioning = false;
            }, 600);
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startAutoPlay() {
            // 既存のインターバルをクリア
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
            // 新しいインターバルを設定（正確に5000ms）
            autoPlayInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
        }

        function resetAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }

        // ナビゲーションボタン
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoPlay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoPlay();
            });
        }

        // ドットクリック
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetAutoPlay();
            });
        });

        // 初期化
        showSlide(0, true);
        startAutoPlay();

        // マウスホバーで一時停止（オプション）
        const container = document.querySelector('.slideshow-container');
        if (container) {
            container.addEventListener('mouseenter', stopAutoPlay);
            container.addEventListener('mouseleave', startAutoPlay);
        }

        // ページの可視性変更時の処理
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        });
    }
});
