const workingTime = (req,res,next) => {
const date = new Date ();
req.date = date ;
const hours = date.getHours ();
const days = date.getUTCDate (); 
if (hours < 9 || hours > 17 && days > 5 ) {
  return  res.send ('<h1>is clowzeed for now ! please visit us from monday to friday from 9h to 17h </h1>');
} else {
    next ();
}
}
module.exports = {workingTime};