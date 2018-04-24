function unassigned(subject) {
  if(subject === null) {
    return 'unassigned'
  } else {
    return subject.subject_name
  }
}

module.exports = unassigned
