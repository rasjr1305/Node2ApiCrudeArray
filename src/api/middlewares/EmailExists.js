import DATABASE from "../database/config.js";

function EmailExists(req, res, next){
    const {email} = req.body
    const found = DATABASE.users.find(x => x.email == email);
    if(found) {

        return res.status(409).json({ msg: 'Email already registered' });
    }

    return next();


}

export default EmailExists;