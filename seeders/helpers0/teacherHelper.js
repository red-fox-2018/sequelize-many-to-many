function assignSubject(subject){
  if(subject === null){
    return 'unassigned'
  } else {
    return subject.subject_name
  }
}

function selectedForm(subject, teacherId){
  if(subject.id === teacherId){
    return 'selected'
  }
}

module.exports = {
  assignSubject,
  selectedForm
};
