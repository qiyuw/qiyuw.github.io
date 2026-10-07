// The statistics page cannot be displayed inside the widget's iframe.
(function () {
  var container = document.querySelector('.globe-container');
  if (!container || !container.dataset.statisticsUrl) return;

  function updateLink() {
    var link = container.querySelector('#mmvst_a');
    if (!link) return;
    var url = container.dataset.statisticsUrl;
    if (link.getAttribute('href') !== url) link.setAttribute('href', url);
    if (link.getAttribute('target') !== '_top') link.setAttribute('target', '_top');
    link.setAttribute('aria-label', 'View visitor statistics on MapMyVisitors');
  }

  // The provider creates the anchor asynchronously and may update its URL later.
  new MutationObserver(updateLink).observe(container, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['href', 'target']
  });
  updateLink();
}());
