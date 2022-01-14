module.exports.authorizeByProfile = (...roles) => (req, res, next) => {
    if(!roles || roles.lengh === 0) {
        return next();
    }
    if(req.user) {
        console.log(roles);
        console.log('req.user.profileId');
        console.log(req.user.profileId);
        if(roles.filter(role => role === req.user.profileId.name).length === 0) {
            return res.status(401).send({
                status: 'error',
                data: {},
                error: 'Você não tem permissão para realizar essa ação'
            });
        }
    }
    return next();
}
