exports.MiddlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelGlobal = 'Esse é o valor da variavel do MiddlewareGlobal.'
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}