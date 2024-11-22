if (window.location.href.startsWith('https://www.')) {
    window.location.href = 'https://' + window.location.href.slice(12);
}