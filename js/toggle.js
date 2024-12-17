function toggleContent(id) {
    const content = document.getElementById('content-' + id);
    const seeMore = document.querySelector('.see-more');

    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        seeMore.textContent = 'See More';
    } else {
        content.classList.add('expanded');
        seeMore.textContent = 'See Less';
    }
}