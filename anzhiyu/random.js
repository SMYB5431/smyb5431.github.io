var posts=["posts/3592556d.html","posts/164c3210.html","posts/5951e07a.html","posts/a1b329e3.html","posts/b73062e2.html","posts/7218f0a9.html","posts/a6986f4f.html","posts/93f4b08b.html","posts/ca5d2e59.html","posts/2ff81ee8.html","posts/3bbe5b08.html","posts/5181609.html","posts/35ed6530.html","posts/1d37eea9.html","posts/d9887de9.html","posts/2d1667a5.html","posts/e0d80c02.html","posts/bccbe6d.html","posts/740ce18a.html","posts/f929a43e.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };