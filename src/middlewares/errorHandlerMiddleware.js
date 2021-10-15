exports.errorHandler = function (error, req, res, next){
    if(error) {
        res.locals.errors = [error];

        res.render('404');
    }
};