var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "safcdb"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("mysql connected!")
});

router.get('/', function (req, res, next) {
  res.render('index', {title: "safc"});
});

/*

 C R U D

  F O R

 V I S I T O R S

 */

router.get('/visitorspg', function (req, res, next) {
  res.render('visitorspg', {title: "visitors page"});
})


router.get('/visitors-get', function(req, res, next) {
  const sql = `SELECT * FROM visitors`;

  connection.query(sql, function (err, results) {
    if (err) console.log(err);
    res.render('visitors-get', {items: results})
  });
});


router.post('/visitors-insert', function(req, res, next) {

  var name = req.body.name;
  var surname = req.body.surname;
  var address = req.body.address;
  var phone = req.body.phone;

  const data = [name, surname, address, phone]

  const sql = 'INSERT INTO visitors (`name`, surname, address, phone_number) values (?, ?, ?, ?)';

  connection.query(sql, data, function (err, results) {
    if(err) console.log(err);
    console.log(results);
  })
  res.redirect('/visitorspg');
});


router.post('/visitors-update', function(req, res, next) {

  var name = req.body.name;
  var surname = req.body.surname;
  var address = req.body.address;
  var phone = req.body.phone;
  var id = req.body.id;

  const data = [name, surname, address, phone, id]
  const  sql = "UPDATE visitors SET `name` = ?, surname = ?, address = ?, phone_number = ? WHERE id = ?"

  connection.query(sql, data, function (err, resuilt) {
    if(err) console.log(err)
    console.log(resuilt);
  })
});


router.post('/visitors-delete', function(req, res, next) {

  var id = req.body.id;

  const sql = "DELETE FROM visitors WHERE id = ?"

  connection.query(sql, id, function (err, result) {
    if(err) console.log(err)
    console.log(result)
  })
});

/*

 C R U D

  F O R

 F I E L D S

*/

router.get('/fieldspg', function (req, res, next) {
  res.render('fieldspg', {title: "fields page"});
})


router.get('/fields-get', function(req, res, next) {
  const sql = `SELECT * FROM fields`;

  connection.query(sql, function (err, results) {
    if (err) console.log(err);
    res.render('fields-get', {items: results})
  });
});


router.post('/fields-insert', function(req, res, next) {

  var typeName = req.body.typeName;
  var priceForHour = req.body.priceForHour;
  var priceForHalfHour = req.body.priceForHalfHour;
  var priceForQuaterHour = req.body.priceForQuaterHour;
  var half = req.body.half;
  var quater = req.body.quater;
  var status = req.body.status;

  const data = [typeName, priceForHour, priceForHalfHour, priceForQuaterHour, half, quater, status]

  const sql = 'INSERT INTO fields (type_name, price_for_hour, price_for_half_hour, price_for_quater_hour, half, quater, field_status) values (?, ?, ?, ?, ?, ?, ?)';

  connection.query(sql, data, function (err, results) {
    if(err) console.log(err);
    console.log(results);
  })
  res.redirect('/fieldspg');
});


router.post('/fields-update', function(req, res, next) {

  var typeName = req.body.typeName;
  var priceForHour = req.body.priceForHour;
  var priceForHalfHour = req.body.priceForHalfHour;
  var priceForQuaterHour = req.body.priceForQuaterHour;
  var half = req.body.half;
  var quater = req.body.quater;
  var status = req.body.status;
  var id = req.body.id;

  const data = [typeName, priceForHour, priceForHalfHour, priceForQuaterHour, half, quater, status, id]

  const sql = 'UPDATE fields SET type_name = ?, price_for_hour = ?, price_for_half_hour = ?, price_for_quater_hour = ?, half = ?, quater = ?, field_status = ? WHERE id = ?';

  connection.query(sql, data, function (err, resuilt) {
    if(err) console.log(err)
    console.log(resuilt);
  })
});


router.post('/fields-delete', function(req, res, next) {

  var id = req.body.id;

  const sql = "DELETE FROM fields WHERE id = ?"

  connection.query(sql, id, function (err, result) {
    if(err) console.log(err)
    console.log(result)
  })
});

/*

 A D M I N I S T R A T O R S list

 */

router.get('/admins-get', function(req, res, next) {
  const sql = `SELECT * FROM administrators`;

  connection.query(sql, function (err, results) {
    if (err) console.log(err);
    res.render('admins-get', {items: results})
  });
});

/*

 C R U D

  F O R

 O R D E R S

*/

router.get('/orderspg', function (req, res, next) {
  res.render('orderspg', {title: "orders page"});
})


router.get('/orders-get', function(req, res, next) {
  const sql = `SELECT * FROM orders`;

  connection.query(sql, function (err, results) {
    if (err) console.log(err);
    res.render('orders-get', {items: results})
  });
});


router.post('/orders-insert', function(req, res, next) {

  var visitorId = req.body.visitorId;
  var fieldId = req.body.fieldId;
  var adminId = req.body.adminId;
  var day = req.body.day;
  var startsAt = req.body.startsAt;
  var endsAt = req.body.endsAt;
  var status = req.body.status;

  const data = [visitorId, fieldId, adminId, day, startsAt, endsAt, status]

  const sql = 'INSERT INTO orders (visitor_id, field_id, administrator_id, calendar_day, starts_at, ends_at, order_status) values (?, ?, ?, ?, ?, ?, ?)';

  connection.query(sql, data, function (err, results) {
    if(err) console.log(err);
    console.log(results);
  })
  res.redirect('/orderspg');
});


router.post('/orders-update', function(req, res, next) {

  var visitorId = req.body.visitorId;
  var fieldId = req.body.fieldId;
  var adminId = req.body.adminId;
  var day = req.body.day;
  var startsAt = req.body.startsAt;
  var endsAt = req.body.endsAt;
  var status = req.body.status;
  var id = req.body.id;

  const data = [visitorId, fieldId, adminId, day, startsAt, endsAt, status, id]

  const sql = 'UPDATE orders SET visitor_id = ?, field_id = ?, administrator_id = ?, calendar_day = ?, starts_at = ?, ends_at = ?, order_status = ? WHERE id = ?';

  connection.query(sql, data, function (err, resuilt) {
    if(err) console.log(err)
    console.log(resuilt);
  })
});


router.post('/orders-delete', function(req, res, next) {

  var id = req.body.id;

  const sql = "DELETE FROM orders WHERE id = ?"

  connection.query(sql, id, function (err, result) {
    if(err) console.log(err)
    console.log(result)
  })
});



module.exports = router;
