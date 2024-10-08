export const isAuth = (req, res, next) => {
    console.log("Authenticated user in isAuth:", req.user);
    if (req.session.passport && req.session.passport.user) {
        if (req.isAuthenticated()) return next();
    }
    res.status(403).json({ msg: "No Autorizado" });
};