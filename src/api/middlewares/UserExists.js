import DATABASE from "../database/config.js";

function UserExists(req, res, next){
    const {id} = req.params;
    const found = DATABASE.users.find(x => x.id == id);
    if(!found) {
        return res.status(404).json({ msg: 'User not found' });
    }

    return next();
}

export default UserExists;