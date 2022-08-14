module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs', {
            title: 'Welcome',
            layout: './layouts/index-login-signup'
        })
    }
}