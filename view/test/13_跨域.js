var script = document.createElement('script');
script.type = 'text/javascript';

script.src = 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9735853573335554652%22%7D&n_type=0&p_from=1';
document.head.appendChild(script);

function onBack(res) {
  alert(JSON.stringify(res));
}