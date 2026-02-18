
document.addEventListener('DOMContentLoaded', function() {
    const bannerSwiper = new Swiper('.banner-swiper', {
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
