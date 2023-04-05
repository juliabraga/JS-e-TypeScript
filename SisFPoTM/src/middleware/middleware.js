exports.MiddlewareGlobal = (req, res, next) => {
    res.locals.error = 'Esse é o valor da variavel do MiddlewareGlobal.'
    res.locals.sucess = 'Esse é o valor da variavel do MiddlewareGlobal.'
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404')
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}