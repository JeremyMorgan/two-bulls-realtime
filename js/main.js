$('#inciweb').feeds({
    feeds: {
        feed1: 'http://inciweb.nwcg.gov/feeds/rss/incidents/state/38/',      
    }
});

$('#odf').feeds({
    feeds: {
        feed1: 'http://wildfireoregondeptofforestry.blogspot.com/feeds/posts/default',      
    },
    max: 4
});
$('#googlenews').feeds({
    feeds: {
        feed1: 'https://news.google.com/news/feeds?gl=us&hl=en&ie=UTF-8&output=rss&q=Two%20Bulls%20Wildfire%20Bend&um=1',    

    },
    max: 10
});

$('#centralorfireinfo').feeds({
    feeds: {
        feed1: 'http://centralorfireinfo.blogspot.com/feeds/posts/default',
    },
    max: 10
});

