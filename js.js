
document.addEventListener('DOMContentLoaded', function() {
    const bannerSwiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {  delay: 3000, // 3秒切换
        disableOnInteraction: false, // 手动操作后不停止
        pauseOnMouseEnter: true,      // 鼠标悬停时暂停
        },
        speed: 200, // 切换速度 600ms

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        lazy: {
            loadPrevNext: true,  // 预加载前后各一张图片
            loadPrevNextAmount: 3, // 增加预加载的图片数量，确保快速切换时图片已经加载
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        grabCursor: true,        // 鼠标抓手样式
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".mi-nav");

    let lastScrollTop = 0;
    let lastTime = Date.now();

    window.addEventListener("scroll", function () {

        const currentScrollTop = window.scrollY;
        const currentTime = Date.now();

        const speed = Math.abs(currentScrollTop - lastScrollTop) / (currentTime - lastTime); // 滚动速度

        lastScrollTop = currentScrollTop;
        lastTime = currentTime;

        // 🔥 如果速度很慢 → 立即执行
        if (speed < 0.05) {
            updateNavbar(currentScrollTop);
        } else {
            // 如果速度快 → 等停止再执行
            clearTimeout(window.scrollTimer);
            window.scrollTimer = setTimeout(() => updateNavbar(window.scrollY), 120);
        }

    });

    function updateNavbar(scrollTop) {
        if (scrollTop > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

});
