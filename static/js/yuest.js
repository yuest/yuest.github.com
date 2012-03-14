;(function() { //highlight
  var result = ''
  function __print(str) {
    result += str+'\n'
  }
  $(document).on('click', 'pre code.javascript', function (ev) {
    var $el = $(this)
      , code = $el.text()
      , $pre = $el.closest('pre')
      , $preNext = $pre.next()
      , $preResult = $preNext.hasClass('result')
        ? $preNext.find('code')
        : $('<pre class=result><code></code></pre>').insertAfter($pre).find('code')
    code = (';(function(){'+code+'}());').replace(/console\.log/g, '__print')
    result = ''
    eval(code)
    $preResult.text(result)
  })
}())

;(function(doc, win) { //ui
  var $backToTop = $('#back-to-top')
    , $fixed = $('#fixed-wrap')
    , $body = $('body')
    , $win = $(win)
  $backToTop.click(function(ev) {
    ev.preventDefault()
    $win.scrollTop(0)
  })
  $(win).on('scroll', function() {
    var winHeight = $win.height()
      , maxScroll = $(doc).height() - winHeight
      , scrollTop = $win.scrollTop()
      , top = 0 - (scrollTop / maxScroll * 360)
      , fixedTop = top >= -180 ? top : -180
    $fixed.css('top', fixedTop + 'px')
    $backToTop.css('top', ((scrollTop >= 300 ? 30 : scrollTop/10) - fixedTop - 20) + 'px')
    $body.css('background-position', '0 ' + top/3 + 'px')
  })
}(document, window))

;(function(loc) {
  if (__serverRendered) return
  var pathname = loc.pathname
        .replace(/\/$/, '/index.html')
        .replace(/\.html$/, '.md')
        .replace(/[\.\w]{3}$/, function(ext) {
          return '.md' === ext ? '.md' : ext + '.md'
        })
    , converter = new Showdown.converter()
    , $article = $('article#from-markdown, div#article-from-markdown').eq(0)
  $.get(pathname, function(data, status, xhr) {
    if (/^\s*<!doctype/i.test(data) || xhr.status > 299) {
      $article.empty().html('找不到网页')
    } else {
      $article.empty().html(converter.makeHtml(data))
    }
  })
}(location))

;(function(loc) {
  if (loc.search && ~loc.search.indexOf('edit')) {
    $(function() {
      var $editor = $('<div id=editor />').appendTo('body')
      $editor.html('<form method="PUT"><textarea></textarea></form><input type="submit" value="Submit" />')
    })
  }
}(location))
