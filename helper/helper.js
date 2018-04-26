function checkUnassigned (param) {
    if(param == null) {
        return `unnasigned`
    } else {
        return param.subject_name
    }
}

module.exports = checkUnassigned