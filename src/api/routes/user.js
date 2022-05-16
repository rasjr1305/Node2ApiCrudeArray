import {Router} from 'express';
import UserController from '../controllers/UserController.js';
import EmailExists from '../middlewares/EmailExists.js';
import UserExists from '../middlewares/UserExists.js';
import CourseExists from '../middlewares/CourseExists.js';
import CheckFields from '../middlewares/CheckFields.js';

const router = Router();

router.post('/user', CheckFields, EmailExists, UserController.create);

router.post('/user/:userId/course', CheckFields, UserExists, UserController.addCourse);

router.put('/user/:userId', CheckFields, UserExists, UserController.updateOne);

router.put('/user/:userId/course/:courseId', CheckFields, UserExists, CourseExists, UserController.updateCourse);

router.delete('/user/:userId', UserExists, UserController.deleteOne);

router.delete('/user/:userId/course/:courseId', UserExists, CourseExists, UserController.deleteCourse);

router.get('/user', UserController.find);

router.get('/user/:userId', UserExists, UserController.findOne);

export default router;