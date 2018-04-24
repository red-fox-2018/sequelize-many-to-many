/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

function defaultNullValue(param){
  console.log('=======', param);
  if(param == null){
    return 'Unassigned';
  }else{
    return param.name;
  }
}


module.exports = defaultNullValue;
