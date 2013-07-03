module.exports = function routes (app)
{

	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  	host     : 'localhost',
	  	database : 'support_neudesic',
	  	user     : 'root',
	  	password : 'welcome'
	})


	app.get('/users', function getall(req,res,next) {
		if(connection){
			connection.query('select userid as id,fullname, userdesignation,phone from swusers limit 20', function(err, rows, fields) {
	  			if (err) return next(err);
	  			res.json("Returned Users", {"users" : rows});
			});
		}
	});


	app.get('/staffs', function getall(req,res,next) {
		if(connection){
			connection.query('select staffid as id,fullname, designation as userdesignation,mobilenumber as phone, lastactivity from swstaff where isenabled = 1 and enabledst = 1 Order by fullname', function(err, rows, fields) {
	  			if (err) return next(err);
	  			res.json("Returned Staff", {"staffs" : rows});
			});
		}
	});
	

	app.get('/users/:id', function getone (req,res,next) {
		if(connection){
			connection.query('select userid as id,fullname, userdesignation,phone from swusers', function(err, rows, fields) {
	  			if (err) return next(err);
	  			res.json(rows[0].fullname);
			});
		}
	});

};

