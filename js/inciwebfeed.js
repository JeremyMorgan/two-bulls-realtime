function loadFeed(){
        $.getFeed({
            url: 'url=http://inciweb.nwcg.gov/feeds/rss/incidents/state/38/',
            success: function(feed) {

                //Title
                $('#result').append('<h2><a href="' + feed.link + '">' + feed.title + '</a>' + '</h2>');

                //Unordered List
                var html = '<ul>';

                $(feed.items).each(function(){
                    var $item = $(this);

                    //trace( $item.attr("link") );
                    html += '<li>' +
                        '<h3><a href ="' + $item.attr("link") + '" target="_new">' +
                        $item.attr("title") + '</a></h3> ' +
                        '<p>' + $item.attr("description") + '</p>' +
                        // '<p>' + $item.attr("c:date") + '</p>' +
                        '</li>';
                });

                html += '</ul>';

                $('#result').append(html);
            }
        });
    }