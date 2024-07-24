function toggleCollapsible(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.icon');
    if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.style.display = 'block';
        icon.style.transform = 'rotate(90deg)';
    }
}