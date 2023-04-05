exports.MiddlewareGlobal = (req, resp, next) => {
    resp.locals.umaVariavelGlobal = 'Esse é o valor da variavel do MiddlewareGlobal.'
    next()
}