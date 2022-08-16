module.exports = {
    getIndex: (req,res)=>{
        try {
            res.render('index.ejs', {
                title: 'Welcome',
                layout: './layouts/index-login-signup'
            })
        } catch (err) {
            console.log(err)
            res.render('error/404', {
                title: 'Page Not Found',
                layout: './layouts/error'
            })
        }
    }
}