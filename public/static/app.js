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
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームデータの取得
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // バリデーション
            if (!data.company || !data.name || !data.email || !data.message) {
                alert('必須項目を入力してください。');
                return;
            }

            // メールアドレスの検証
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('有効なメールアドレスを入力してください。');
                return;
            }

            // 実際の実装では、ここでAPIにデータを送信
            console.log('送信データ:', data);
            
            // 成功メッセージ
            alert('お問い合わせありがとうございます。\n内容を確認次第、担当者よりご連絡させていただきます。');
            contactForm.reset();
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
        let autoPlayInterval;

        function showSlide(index) {
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            const offset = -currentSlide * 100;
            slideshowWrapper.style.transform = `translateX(${offset}%)`;

            // ドットの更新
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 5000); // 5秒ごとに自動切替
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }

        // ナビゲーションボタン
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                stopAutoPlay();
                startAutoPlay(); // 自動再生を再開
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                stopAutoPlay();
                startAutoPlay(); // 自動再生を再開
            });
        }

        // ドットクリック
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                stopAutoPlay();
                startAutoPlay(); // 自動再生を再開
            });
        });

        // 初期化
        showSlide(0);
        startAutoPlay();

        // マウスホバーで一時停止
        const container = document.querySelector('.slideshow-container');
        if (container) {
            container.addEventListener('mouseenter', stopAutoPlay);
            container.addEventListener('mouseleave', startAutoPlay);
        }
    }
});
