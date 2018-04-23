
const { Student } = require('./../models');

class StudentController {
  /**
   * getAll()
   */
  static getAll() {
    return Student.findAll();
  }
  /**
   * insert()
   */
  static insert(values) {
    return Student.create(values);
  }
  /**
   * delete()
   */
  static delete(id) {
    return Student.findById(id)
      .then(Student => {
        return Student.destroy();
      })
      .catch(err => {
        console.log(err.message);
      });
  }
  /**
   * findById()
   */
  static findById(id) {
    return Student.findById(id);
  }
  /**
   * update()
   */
  static update(id, values) {
    return Student.findById(id)
      .then(Student => {
        return Student.update(values);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = StudentController;
