import DATABASE from "../database/config.js";

function CourseExists(req, res, next){
    const {id,name} = req.params;
    const found = DATABASE.users.find(x => x.id == id);
    const found2 = found.courses.find(x => x.name == name); 
    if(!found2) {
        
        return res.status(404).json({ msg: 'Course not found' });
    }

    return next();


}

export default CourseExists;