module.exports = function createDreamTeam(members) {

  if ((arguments.length===0)|| (!Array.isArray(members))) {
    return false;
  }
  
  
  let result = members.map(function (item){
    let res=[];
    if(typeof (item)==="string") {
      return res=res+item.trim()[0].toUpperCase()
    }
  }).sort().join("")
  return result
};