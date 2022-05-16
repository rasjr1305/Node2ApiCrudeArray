import DATABASE from "../database/config.js";

function CourseExists(req, res, next){
    const {userId,courseId} = req.params;
    const found = DATABASE.users.find(x => x.id == userId);
    const found2 = found.courses.find(x => x.id == courseId); 
    if(!found2) {
        
        return res.status(404).json({ msg: 'Course not found' });
    }

    return next();


}

export default CourseExists;