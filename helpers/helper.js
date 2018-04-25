function isSubject(teacher){
  if(teacher.SubjectId === null){
    return 'unassigned'
  }else{
    return teacher.Subject.subject_name
  }
}

module.exports = isSubject;
