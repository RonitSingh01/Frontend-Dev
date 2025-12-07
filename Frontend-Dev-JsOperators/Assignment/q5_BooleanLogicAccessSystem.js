var isDoorLocked = true;
var isWindowClosed = true;
var isAlarmOn = true;
var isOwnerInside = true;
function checkSecurity() {
  if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log('Secure');
  } else {
    console.log('Unsafe');
  }
}
checkSecurity();
isOwnerInside = false;
checkSecurity();
