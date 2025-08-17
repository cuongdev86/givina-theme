const images = $('.thumb')
    .map((_, el) => ({
        src: $(el).data('full'),
        thumb: $(el).attr('src')
    }))
    .get();

const gallery = lightGallery(document.createElement('div'), {
    dynamic: true,
    dynamicEl: images,
    plugins: [lgZoom, lgThumbnail],
    speed: 500
});

function scrollToThumb($t) {
    const c = $t.closest('.product-image.list')[0];
    if (!c) return;
    const rect = $t[0].getBoundingClientRect(),
        crect = c.getBoundingClientRect();
    const isH = c.scrollWidth > c.clientWidth;
    const pos = isH ? c.scrollLeft + (rect.left - crect.left) - (c.clientWidth - rect.width) / 2 : c.scrollTop + (rect.top - crect.top) - (c.clientHeight - rect.height) / 2;
    c.scrollTo({ [isH ? 'left' : 'top']: Math.max(0, pos), behavior: 'smooth' });
}

$('.thumb').on('click', function () {
    $('#mainImage').attr('src', this.src).data('full', $(this).data('full'));
    $('.thumb').removeClass('active');
    $(this).addClass('active');
    scrollToThumb($(this));
});

$('#mainImage').on('click', function () {
    const i = images.findIndex((img) => img.src === $(this).data('full'));
    gallery.openGallery(i >= 0 ? i : 0);
});

function moreContent(element) {
    const moreContent = $('#moreContent');
    moreContent.toggleClass('show');
    if (moreContent.hasClass('show')) {
        $(element).text('Thu gọn');
    } else {
        $(element).text('Xem thêm');
    }
}
