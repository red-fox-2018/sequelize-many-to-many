
const { Teacher } = require('./../models');
const { Subject } = require('./../models');
const { Student } = require('./../models');

class SubjectController {
  /**
   * getAll()
   */
  static getAllMultiple() {
    return Subject.findAll({
      include: [
        { model: Student }
      ],
      order: [
        ['id', 'ASC']
      ]
    });    
  }
  /**
   * getAll()
   */
  static getAll() {
    return Subject.findAll({
      include: [
        {
          model: Teacher
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
    return Subject.create(values);
  }
  /**
   * delete()
   */
  static delete(id) {
    return Subject.findById(id)
      .then(Subject => {
        return Subject.destroy();
      })
      .catch(err => {
        console.log(err.message);
      });
  }
  /**
   * findById()
   */
  static findById(id) {
    return Subject.findById(id);
  }
  /**
   * update()
   */
  static update(id, values) {
    return Subject.findById(id)
      .then(Subject => {
        return Subject.update(values);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = SubjectController;
