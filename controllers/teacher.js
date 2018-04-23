
const { Teacher } = require('./../models');
const { Subject } = require('./../models');

class TeacherController {
  /**
   * getAll()
   */
  static getAll() {
    return Teacher.findAll({
      include: [
        {
          model: Subject
        }
      ],
      order: [
        ['id', 'ASC']
      ]
    });
  }
  /**
   * insert()
   */
  static insert(values) {
    return Teacher.create(values);
  }
  /**
   * delete()
   */
  static delete(id) {
    return Teacher.findById(id)
      .then(teacher => {
        return teacher.destroy();
      })
      .catch(err => {
        console.log(err.message);
        return err;
      });
  }
  /**
   * findById()
   */
  static findById(id) {
    return Teacher.findById(id);
  }
  /**
   * update()
   */
  static update(id, values) {
    return Teacher.findById(id)
      .then(teacher => {
        return teacher.update(values);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
}

module.exports = TeacherController;
