var router = require('express').Router();
// require('라이브러리명'), require('파일경로')
// require('/shop.js'); //shop.js 변수를 가져다 쓸수 있다 

function 로그인했니(req, res, next) {
    if (req.user) { // 로그인후 세션이 있으면 req.user가 있음(로그인한 유저의 DB데이터)
        next()
    } else {
        res.send('로그인안하셨는데요?')
    }
}

router.use('/shirts', 로그인했니);

router.get('/shirts', function(req, res){
    res.send('셔츠 파는 페이지입니다.')
})

router.get('/pants', function(req, res){
    res.send('바지 파는 페이지입니다.')
})

module.exports = router;
// module.exports = 내보낼 변수명