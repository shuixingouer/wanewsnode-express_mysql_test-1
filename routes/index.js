var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var db = require("../conf/db.js");

/* GET home page. */
router.route("/").get(function(req,res){

  var connection = mysql.createConnection(db.mysql);
  //var connection=mysql.createConnection({
  //  multipleStatements:true,
  //  db:mysql
  //});
  connection.connect();

  var strChannel = "select * from channel";
  var strChannelList = "select a.*,b.channel_id from object_detail a, channel_object_rel b where a.id = b.object_id";
//var str = "select * from myclass";
  connection.query(strChannel, function (err, result) {
    if (err) throw err;
    //console.log(str);
    //console.log('The solution is: ', result);
    res.render('index', { title: 'Express',channel:result});
  });



  connection.end();
})
//weui-navbar__item
module.exports = router;
