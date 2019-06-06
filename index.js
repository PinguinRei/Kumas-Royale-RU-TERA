//////////////////HELP////////////////////////
//proxy kuma ## - Correct Z Position NEW!

module.exports = function KR(mod) {

let skillport = false;
let shift = 0; //you Z coord conf
let secdef = 4300; //ms for incredible

  let xyz = [];
  let svx = 0;
  let svy = 0;
  let svz = 0;
  
  let a = 0;
  let b = 0;
  
  let id = 0; //you client id
  let model = 0; //you class
  
  let skillid = 0; //current skill id
  let mask = []; //mask work skill id
  let mask_size = 0;

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
function IncMask (inc, size, msa) {
    for(var i = 0; i < inc.length; i++) {
        for(var n = 0; n < size; n++) {
            if(inc.indexOf(msa[n]) != -1) {
                return n;
            }}
  }
  return -1
}

function findInArray(ary, item) {
    for (let i = 0; i < ary.length; i++) {
    if (ary[i].toString() === item.toString()) {
   return i
   }}
    return -1
}
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

function Reload() {
b = (a - shift)
  mod.toClient('S_INSTANT_MOVE', 1,{
                    id: id,
                    x: xyz[0],
                    y: xyz[1],
                    z: b,
                    w: xyz[5]})
 mod.command.message('<font color="#00ffff">[KR]</font> You alredy on ground!')
 skillport = false
}
  
mod.hook('C_PRESS_SKILL', 4, event => {
if(skillport) return false
})

mod.hook('C_START_SKILL', 7, event => {
  skillid = event.skill.toString()
  let filter = IncMask(skillid, mask_size, mask)
  
if (filter == -1 || shift >= 0) {
    //console.log('S_FILTER: ' + event.skill)
    return
}else{
    if (!skillport) {
    //console.log('S_PASS: ' + event.skill)
    a = (xyz[2] + shift)
    skillport = true
  mod.toClient('S_INSTANT_MOVE', 1,{
                    id: id,
                    x: xyz[0],
                    y: xyz[1],
                    z: a,
                    w: xyz[5]})
    mod.command.message('<font color="#00ffff">[KR]</font> You are UNDERGROUND!')
    setTimeout(Reload, secdef)
    return false
    }else{
      return false
    }
}
})

  mod.hook('S_LOGIN', 13, (event) => {
  id = event.gameId;
  model = event.templateId % 100
  
    if (model == 5){
    mask = ["A310110", "A310120"] //PORT SKILL REPLACE
    }else{
    mask = []
    }
    mask_size = mask.length
})
  
  mod.hook('C_PLAYER_LOCATION', 1, (event) => {
    xyz[0] = event.x2
    xyz[1] = event.y2
    xyz[2] = event.z2
    xyz[4] = event.time
    xyz[5] = event.w
  })
  
  
  mod.hook('S_LOAD_TOPO', 1, (event) => {
    xyz[3] = event.zone})
  
  // ###################### //
  // ## KR- KUMAS Royale ## //
  // ###################### //
  
  let kuma = 0;
  
  mod.command.add('kuma', (offset) => {
  if (118 === xyz[3]) {
    kuma = parseFloat(offset)
    mod.command.message('<font color="#ffff00">Position correct to '+(kuma)+'.</font>')
       }else{
    mod.command.message('<font color="#00ffff">[KR]</font> <font color="#ffff00">Only Kuma Royale!</font>');}
  })
  
  mod.hook('C_VEHICLEEX_LOCATION', 1, (event) => {
    if (kuma === 0) return
    event.z1 += kuma
    event.z2 += kuma
    return true
  })
}
