import DATABASE from '../database/config.js';
import { v4 as uuidv4 } from 'uuid';

class UserController {
  static create(req, res) {
    const formData = req.body;
    formData.id = uuidv4();
    DATABASE.users.push(formData)

    res.status(201).json({ msg: 'Added Student' });
  }
  static addCourse(req, res) {
    const { userId } = req.params;
    const formData = req.body;
    formData.id = uuidv4();
    const user = DATABASE.users.find(x => x.id === userId); // Na verdade a variavel user é um marcador do usuario com id dentro do banco de dados (atribuicao por referencia)
    if (!user.courses) {
      user.courses = [];
    }
    user.courses.push(formData); // Portanto esta atribuicao aponta para o banco de dados e a modificacao é feita no banco de dados e nao na constante user

    res.status(201).json(user);
  }
  static find(req, res) {
    res.json((DATABASE));
  }
  static findOne(req, res) {
    const { userId } = req.params;
    const user = DATABASE.users.find(x => x.id === userId);

    res.status(200).json(user);
  }
  static deleteOne(req, res) {
    const { userId } = req.params;
    DATABASE.users = DATABASE.users.filter(x => x.id !== userId);

    res.status(200).json(DATABASE.users);
  }
  static updateOne(req, res) {
    const { userId } = req.params;
    const formData = req.body;
    const user = DATABASE.users.find(x => x.id === userId);
    user.name = formData.name;
    user.email = formData.email;

    res.status(200).json(DATABASE.users);
  }
  static updateCourse(req, res) {
    const { userId, courseId } = req.params;
    const formData = req.body;
    const user = DATABASE.users.find(x => x.id === userId);
    const course = user.courses.find(x => x.id === courseId);
    course.name = formData.name;
    course.grade = formData.grade;

    res.status(200).json(DATABASE.users);
  }
  static deleteCourse(req, res) {
    const { userId, courseId } = req.params;

    const user = DATABASE.users.find(x => x.id === userId); // apontou para o usuario na database com este id
    user.courses = user.courses.filter(x => x.id !== courseId); // removeu na database o curso com o courseId informado

    res.status(200).json(DATABASE.users);
  }
}



export default UserController; 