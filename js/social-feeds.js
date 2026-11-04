(() => {
  const feeds = document.querySelectorAll('.social-feed-embed');

  feeds.forEach((feed) => {
    let resizeTimer;

    const updateWidth = () => {
      const width = Math.floor(feed.getBoundingClientRect().width);
      if (width <= 0) return;

      const url = new URL(feed.src);
      if (Number(url.searchParams.get('width')) === width) return;

      url.searchParams.set('width', String(width));
      feed.src = url.toString();
    };

    updateWidth();

    // Facebook fixes its internal layout at load time, so reload only after width changes settle.
    const observer = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateWidth, 200);
    });
    observer.observe(feed);
  });
})();
