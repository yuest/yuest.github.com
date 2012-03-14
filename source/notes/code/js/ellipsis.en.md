#jQuery Text Overflow Ellipsis Plugin For Firefox
<!-- date: 2011-03-27 00:00 -->

Ellipsis is a common style used in HTML page where one line block must be width limited. You can achive this by using these properties:

    .ellipsis {
        display: block; /* or inline-block */
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;    /* Opera */
        text-overflow:    ellipsis;    /* IE, Safari (WebKit) */
    }

Also, if you have to waste your time on IE6 (damn it!), the `width` of the element must be set(for example `width: 100%;`).

However, [firefox does not support the `text-overflow` property](https://developer.mozilla.org/en/CSS/text-overflow) as it's not in CSS Standards. So I wrote a jQuery plugin to solve this problem, it's inspired by [Devon Govett's](http://devongovett.wordpress.com/2009/04/06/text-overflow-ellipsis-for-firefox-via-jquery/) but more efficient than his when the block contains more words.

<div data-gist-id="889145"><a href="http://gist.github.com/889145">ellipsis.js on GitHub Gist</a></div>
