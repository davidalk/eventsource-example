'use strict';

$(document).ready(function () {
    var $messageContainer = $('#messageContainer');

    //noinspection JSUnresolvedFunction
    var evtSource = new EventSource('/sse');

    evtSource.onmessage = function (e) {
        $messageContainer.html(e.data);
    }
});