var crypto = require('crypto');
var fs = require('fs');
var express = require('express');
var Client = require('node-rest-client').Client;
var count = 0;
var test=0;
var app = express();
app.use(express.bodyParser());
app.use("/images", express.static(__dirname + '/images'));
handlebars  = require('express3-handlebars');
hbs = handlebars.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
var http = require('http');

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
////test
  var mongoose = require('mongoose');
var ip   = process.env.IP;



var Client = require('node-rest-client').Client;
//var MongoClient = require("mongodb").MongoClient;

var secretKey = "UimQs7AQW59UN2vAzX0dHlhxU08AoIdC" ;







var page = function( req, res, status ) {

   var result = new Object() ;
   // hash = get_hash ( state, ts ) ;
    //console.log( state ) ;

    var client = new Client();
            var count = "";
            client.get("http://pnguyen-grails-restservice-v2.cfapps.io/order/", 
                function(data, response_raw){
                    console.log(data);
                    count = data.countGumballs
                    console.log( "count = " + count ) ;

                    if ( status ) {
                        var msg = msg + "\n" + status + "\n\n" ;
                    }
                    result.msg = msg ;
  
                    res.render('register', {
                       
                    });
                    

                    
             
            });
           
}


var handle_post = function (req, res, next) {
    obj=req.body;
    
    if(test==0)
    {
        global.firstSchema = mongoose.Schema;
var firstuserSchema = new firstSchema({
prjdesc : String,
notes : String,
taskdesc:String,
pref:String,
name:String
});
 

global.firstUser = mongoose.model('projUser', firstuserSchema);

var Schema = mongoose.Schema;
var userSchema1 = new Schema({
pref:String,
name:String,
prjdesc:String,
task : String,
assignedto:String,
sdate : String,
edate : String,
effort : String,
tstatus:String
});
 

global.waterfallUser = mongoose.model('Waterfall', userSchema1);
 /*
global.dataschema = new firstUser({
prjdesc : req.body.prjdesc,
notes : req.body.notes,
taskdesc : req.body.taskdesc,
pref: req.body.pref,
name:req.body.name
});*/
var userschema2 = new Schema({
pref:String,
name:String,
prjdesc:String,
pname:String,
desc : String,
sprintNo:String,
story : String,
est : Number ,
priority : String
});
 

global.scrumuser = mongoose.model('scrumsch', userschema2);
test++;
    }
    
    
if(count==0)     {
var Schema = mongoose.Schema;
var kanbanSchema = new Schema({
pref:String,
name:String,
prjdesc:String,
stage: String,
inprogress: String,
todo: String,
done: String,
card:String,
assignedto : String,
starttime:String,
endtime : String,
qtime : String
});
 

global.kanbanuser = mongoose.model('kanbansch', kanbanSchema);

count++;
}    
    
    
    console.log("inside post");
    console.log("Object is"+obj);
    
    
for (var key in req.body) {
        console.log('key is '+key);
        console.log(key + " = " + obj[key]);
        var temp=obj[key];
if(temp=='Submit'){
console.log('submit data');
//res.render('kanban');

console.log("global"+pref1);

    mongoinsubmit(req,res);


}

else if(temp=='Delete')
{
    var deldata=req.body.prjdesc;
    console.log('delete');
    mongodel(req,res,deldata);
}
else if(temp=='Register')
{
    req.sessionStorage=req.body;
    var regpage=req.sessionStorage;
    console.log("regg"+req.sessionStorage.pref);
    var result = new Object() ;
    var client = new Client();
    mongoin1(req,res);
    //res.render('first');
    result.preference=regpage.pref;
    result.name=regpage.name;
    global.pref1=regpage.pref;
    global.name1=regpage.name;
    res.render('first',{
      pref :result.preference,
      name :regpage.name
    }
);
     console.log('!!!!!!!!!!!!register');
  
   
}

else if(temp=='Data')
{
    //console.log("global"+pref1);
    
    console.log('Data');
    page1(req,res);
}
else if(temp=='Edit Project')
{
    console.log('Edit');
   
    global.projdesc=req.body.prjdesc;
    
  
    pageEdit(req,res,pref1);
   
}
else if(temp=='btAdd')
{
    console.log('btAdd!!!!!!!!!!!!!!!');    
    addcard(req,res);
}
/*anuja*/
else if(temp=='btProgress')
{
    console.log('btProgress!!!!!!!!!!!!!!!');    
    pagekanban(req,res);
}
else if(temp=='btDone')
{
    console.log('btDone!!!!!!!!!!!!!!!');    
    addcard(req,res);
}
else if(temp=='addtask')
{
    console.log('btAdd!!!!!!!!!!!!!!!');    
    addtask(req,res);
}
else if(temp=='ShowTask')
{
    
    console.log('ShowTask');
    page2(req,res);
}
else if(temp=='deletetask')
{
    
    console.log('deletetask');
    var deldata=req.body.task;
    taskdel(req,res,deldata);
}
/*else if(temp=='addcard')
{
    addcard(req,res);
}*/

/*#####anuja*/
else if(temp=='showallcards')
{
    
    console.log('showallcards--');
    
    page4(req,res);
}

else if(temp=='deletecard')
{
    
    console.log('deletecard');
    var deldata=req.body.card;
    carddel(req,res,deldata);
}
else if(temp=='Updatecard')
{
    console.log('Update');
    //mongoUpdatecard(req,res);
}
else if(temp=='AddStory')
{
    addstory(req,res);
}
else if(temp=='ShowStory')
{
    
    console.log('ShowStory');
    page3(req,res);
}
else if(temp=='DeleteStory')
{
    
    console.log('DeleteStory');
    var deldata=req.body.desc;
    storydel(req,res,deldata);
}

/*anuja*/
else if(temp=='queuestatus')
{console.log('queuestatus');

    statuscalk(req,res);
}
else if(temp=='Status')
{

    statuscals(req,res);
}
else if(temp=='Get Status')
{
console.log("temp");
    statuscalw(req,res);
}
else if(temp=='statusofproject'){
    console.log('tada btstatus!!!!!!!!!!!!!'); 
    res.render('statuspage');
}


}


}

var page1 = function( req, res) {

    var result = new Object() ;
    var client = new Client();
                    var mongoose = require('mongoose');
                    firstUser.find({
                             $and: [{'name':name1},
                                    {'pref':pref1}
                      ]
                            
                        },function(err,docs) {
                    console.log('docs!!!!!!!!!!!!!!!!!!'+docs);
                    result.msg = docs;                     
                    res.render('first', {
     
                        message: result.msg,
                  
                    });
             });
    
}

var page2 = function( req, res) {

    var result = new Object() ;
    var client = new Client();
    var mongoose = require('mongoose');
                    
    
        
                    //waterfallUser.find({ $and: [{'name':name1},
                    //                {'pref':pref1},
                    //                {'prjdesc':projdesc}
                    //  ]},function(err,docs) {
                    waterfallUser.find({
                             $and: [{'name':name1},
                                    {'pref':pref1},
                                    {'prjdesc':projdesc}
                      ]
                            
                        },function(err,docs){
                    if (err) console.log(err);
                    console.log('docs!!!!!!!!!!!!!!!!!!'+docs);
                    result.msg = docs;                     
                     res.render('waterfall', {
      
                        waterfalldata: result.msg
                        
                    });
                      
             });
    
    /*else if(pref1=='scrum'){
            scrumuser.find({ $and: [{'name':name1},
                                    {'pref':pref1},
                                    {'prjdesc':projdesc}
                      ]},{},function(err,docs) {
                    console.log('docs!!!!!!!!!!!!!!!!!!'+docs);
                    result.msg = docs;                     
                     res.render('scrum', {
      
                        scrumdata: result.msg
                        
                    });
                      
             });   
        
    }*/
}
/*anuja*/
var page4 = function( req, res) {

    var result = new Object() ;
    var client = new Client();
    var mongoose = require('mongoose');
        
    

            var kanbansch = new kanbanuser({
            pref : req.body.pref,
            name : req.body.name,
            prjdesc : req.body.prjdesc,
            stage: 'inprogress',
            inprogress: 'true',
            todo: req.body.todo,
            done: req.body.done,
            card: req.body.card,
            assignedto: req.body.assignedto,
            starttime: req.body.starttime,
            endtime: req.body.endtime,
            qtime: req.body.qtime
            
            });
            
            console.log('req.body!!!!!!!!!!!!!!!!!!!'+kanbansch);
            
            kanbansch.prjdesc=projdesc;
            kanbansch.pref=pref1;
            kanbansch.name=name1;
             kanbanuser.find({
                             $and: [{'name':name1},
                                    {'pref':pref1}
                      ]
                            
                        },function(err,docs) {
                    console.log('docs!!!!!!!!!!!!!!!!!!'+docs);
                    result.msg = docs;                     
                    res.render('kanban', {
     
                        kanbandata: result.msg,
                        kanbandata2: result.msg
                  
                    });
             });
    
 
        
    
}


var pagekanban = function( req, res) {

    var result = new Object() ;
    var client = new Client();
    var mongoose = require('mongoose');
        
    

            var kanbansch = new kanbanuser({
            pref : req.body.pref,
            name : req.body.name,
            prjdesc : req.body.prjdesc,
            stage: 'inprogress',
            inprogress: req.body.inprogress,
            todo: req.body.todo,
            done:req.body.done ,
            card: req.body.card,
            assignedto: req.body.assignedto,
            starttime: req.body.starttime,
            endtime: req.body.endtime,
            qtime: req.body.qtime
            
            });
            
            console.log('req.body!!!!!!!!!!!!!!!!!!!'+kanbansch);
            
            kanbansch.prjdesc=projdesc;
            kanbansch.pref=pref1;
            kanbansch.name=name1;
            
            kanbanuser.find({
    
                $or:[{'prjdesc':req.body.prjdesc},
                {'card':req.body.card}
                ]}
                ).remove((function(err,data){
                if (err) console.log(err);
                else console.log('Find : ', data );
            
            }))
            
            kanbansch.stage='inprogress';
            kanbansch.inprogress='TRUE';
            kanbansch.todo='false';
            kanbansch.done='false';
            kanbansch.save(function (err, data) {
            console.log('data!!!!!!!!!!!!!!!!!!!!'+data);
            if (err) console.log(err);
            else
             
                console.log('Saved ', data );
             
            });
    
}


var page3 = function( req, res) {

    var result = new Object() ;
    var client = new Client();
    var mongoose = require('mongoose');
                    
            console.log('page 3 for show story!!!!!!!!!!!!!!!');
        


             scrumuser.find({
                             $and: [{'name':name1},
                                    {'pref':pref1},
                                    {'prjdesc':projdesc}
                      ]
                            
                        },{},function(err,docs){
                    console.log('docs!!!!!!!!!!!!!!!!!!'+docs);
                    result.msg = docs;  
                    docs.pref=pref1;
                    docs.name=name1;
                    docs.prjdesc=projdesc;  
        
                     res.render('scrum', {
        
                        scrumdata: result.msg
                        
                    });
                      
             });

    
}
    
var mongoin1=function(req,res){
var User = require('./registration_model.js');

var Schema = mongoose.Schema;
var userSchema = new Schema({
name : String,
lname : String,
email :String,
pref: String,
pwd: String
});
 

var User = mongoose.model('User', userSchema);
 
var projschema = new User({
name : req.body.name,
lname : req.body.lname,
email : req.body.email,
pref: req.body.pref,
pwd: req.body.pwd
});

console.log('req.body!!!!!!!!!!!!!!!!!!!'+projschema);

projschema.save(function (err, data) {
console.log('data!!!!!!!!!!!!!!!!!!!!'+data);
if (err) console.log(err);
else
 
    console.log('Saved ', data );
 
});


}


var mongoinsubmit=function(req,res){
//var User = require('./user_model.js');
/*
global.firstSchema = mongoose.Schema;
var firstuserSchema = new firstSchema({
prjdesc : String,
notes : String,
taskdesc:String,
pref:String,
name:String
});
 

global.firstUser = mongoose.model('projUser', firstuserSchema);
*/ 
global.dataschema = new firstUser({
prjdesc : req.body.prjdesc,
notes : req.body.notes,
taskdesc : req.body.taskdesc,
pref: req.body.pref,
name:req.body.name
});

//console.log('req.body!!!!!!!!!!!!!!!!!!!'+dataschema);
dataschema.pref=pref1;
dataschema.name=name1;
dataschema.save(function (err, data) {
console.log('data!!!!!!!!!!!!!!!!!!!!'+data);
if (err) console.log(err);
else
 
    console.log('Saved ', data );
 
});


}
var mongoUpdatecard=function(req,res){
    ///
    var User = require('./kanban_model.js');
mongoose.connect('connected', function() {
//var new_user=new User(obj);
var record=req.body.prjdesc;
console.log("Updaterecord"+record);

User.find({'card':record}).remove((function(err,data){
 if (err) console.log(err);
else console.log('delete : ', data );
    
}))
var new_user=new User(obj);
new_user.save(function(err,data){
 if (err) console.log(err);
else console.log('Saved : ', data );
});
}

)
}


var mongoinreg=function(req,res){
   var mongoose = require('mongoose');
var User = require('./user_model.js');
mongoose.connect('connected', function() {
var new_user=new User(obj);
new_user.save(function(err,data){
 if (err) console.log(err);
else console.log('Saved : ', data );
});
})
}
var statuscalw = function (req, res) {

  var result = new Object() ;
    var client = new Client();
    console.log("In status");
    var Total;

  waterfallUser.count({
    $and: [{'name':name1},
                                    {'pref':pref1},
                                    {'prjdesc':projdesc},
                                  
                      ]}
                      
                            
                        
    ,function(err,total){
                        if (err) console.log(err);
                        else 
                        {
                            console.log("Total"+total);
                        
                        
                      
waterfallUser.count({
    $and: [{'name':name1},
                                    {'pref':pref1},
                                    {'prjdesc':projdesc},
                                   {'tstatus':'tcomp'}
                      ]}
                      
                            
                        
    ,function(err,tcomp){
                        if (err) console.log(err);
                        else 
                        {
                           
                            var st=(tcomp/total)*100;
                           
                            var msg=" Project Status :"+st+"% Complete!"
                        /*    res.render('waterfall', {
                        state: msg
                       
                    
                    });*/
                                        waterfallUser.find({
                             $and: [{'name':name1},
                                    {'pref':pref1},
                                    {'prjdesc':projdesc}
                      ]
                            
                        },function(err,docs){
                    if (err) console.log(err);
                    console.log('docs!!!!!!!!!!!!!!!!!!'+docs);
                    result.msg = docs;                     
                     res.render('waterfall', {
                         state: msg,
                        waterfalldata: result.msg
                        
                    });
                      
             });

                            
                        }})
                        }
    }
    )
}



var statuscalk = function (req, res) {
console.log("in statusk");
  var result = new Object() ;
    var client = new Client();
 var qlimit=2;
 



// var mongoose = require('mongoose');
//var User = require('./kanban_model.js');
//mongoose.connect('connected', function() {
    kanbanuser.count({
    $and: [{'name':name1},
                                    {'pref':pref1},
                                    {'prjdesc':projdesc},
                                     {'stage':'inprogress'}
                                  
                      ]}
                      
                            
                        
    ,function(err,tinp){
                        if (err) console.log(err);
                        else 
                        {
                            console.log("Total"+tinp);
                        
                        
                      
kanbanuser.count({
    $and: [{'name':name1},
                                    {'pref':pref1},
                                    {'prjdesc':projdesc},
                                   {'stage':'todo'}
                      ]}
                      
                            
                        
    ,function(err,ttd){
                        if (err) console.log(err);
                        else 
                        {
                            
                            console.log("total"+tinp);
                            console.log("comp"+ttd);
                            ///
                            kanbanuser.count({
    $and: [{'name':name1},
                                    {'pref':pref1},
                                    {'prjdesc':projdesc},
                                   {'stage':'done'}
                      ]}
                      
                            
                        
    ,function(err,tdone){
                            
                             console.log("totalp:"+tinp);
                            console.log("ttd:"+ttd);
                            console.log("done---"+tdone);
                            
                            ///
                            var msg="";
                            if(tinp>qlimit)
                             msg +=+"\n" +" Queue Status of In Progess Queue is Exceeding the Queue Limit " +"\n" ;
                             if(ttd>qlimit)
                              msg +=" Queue Status of To Do Queue is Exceeding the Queue Limit" +"\n";
                           if(tinp<qlimit && ttd<qlimit)
                            msg +=" All Queues  are within the Queue limit!!" +"\n";
                            console.log('msg!!!!!!!!!!!!!!!!!!!!'+msg);
                            
                        /*    res.render('kanban', {
                                
                            state: msg
                       
                    
                    });*/
                    
                                 kanbanuser.find({
                             $and: [{'name':name1},
                                    {'pref':pref1}
                      ]
                            
                        },function(err,docs) {
                    console.log('docs!!!!!!!!!!!!!!!!!!'+docs);
                    result.msg = docs;                     
                    res.render('kanban', {
                         state: msg,
                        kanbandata: result.msg,
                        kanbandata2: result.msg
                  
                    });
             });

                            
    })}})}}
    )
	}
	
	


var mongodel=function(req,res,deldata){
    ///
   // var User = require('./user_model.js');
//mongoose.connect('connected', function() {
//var new_user=new User(obj);
console.log('to del !!!!!!!!!!!!!!!!!!!!');
firstUser.find({
    
    $or:[{'prjdesc':deldata},
    {'task':deldata}
    ]}
    ).remove((function(err,data){
 if (err) console.log(err);
else console.log('Find : ', data );

}))
//})
}


var storydel=function(req,res,deldata){
    ///
   // var User = require('./user_model.js');
//mongoose.connect('connected', function() {
//var new_user=new User(obj);
console.log('to del !!!!!!!!!!!!!!!!!!!!');
scrumuser.find({
    
    $or:[{'prjdesc':deldata},
    {'desc':deldata}
    ]}
    ).remove((function(err,data){
 if (err) console.log(err);
else console.log('Find : ', data );

}))
//})
}




var taskdel=function(req,res,deldata){
    ///
   // var User = require('./user_model.js');
//mongoose.connect('connected', function() {
//var new_user=new User(obj);
console.log('to del !!!!!!!!!!!!!!!!!!!!');
waterfallUser.find({
    
    $or:[{'prjdesc':deldata},
    {'task':deldata}
    ]}
    ).remove((function(err,data){
 if (err) console.log(err);
else console.log('Find : ', data );

}))
//})
}

var carddel=function(req,res,deldata){
    ///
   // var User = require('./user_model.js');
//mongoose.connect('connected', function() {
//var new_user=new User(obj);
console.log('to del !!!!!!!!!!!!!!!!!!!!');
kanbanuser.find({
    
    $or:[{'prjdesc':deldata},
    {'task':deldata}
    ]}
    ).remove((function(err,data){
 if (err) console.log(err);
else console.log('Find : ', data );

}))
//})
}


var handle_get = function (req, res, next) {
    console.log('handleget!!!!');
 var ts=  new Date().getTime()
    //page( req, res,ts) ;
    res.render('register');
    
}

var addtask=function(req,res)
{/*
var Schema = mongoose.Schema;
var userSchema1 = new Schema({
pref:String,
name:String,
prjdesc:String,
task : String,
assignedto:String,
sdate : String,
edate : String,
effort : String,
tstatus:String
});
 

global.waterfallUser = mongoose.model('Waterfall', userSchema1);*/
 
var waterfallschema = new waterfallUser({
pref : req.body.pref,
name : req.body.name,
task : req.body.task,
assignedto: req.body.assignedto,
sdate: req.body.sdate,
edate: req.body.edate,
effort: req.body.effort,
tstatus:req.body.tstatus
});

console.log('req.body!!!!!!!!!!!!!!!!!!!'+waterfallschema);
waterfallschema.prjdesc=projdesc;
waterfallschema.pref=pref1;
waterfallschema.name=name1;
waterfallschema.save(function (err, data) {
console.log('data!!!!!!!!!!!!!!!!!!!!'+data);
if (err) console.log(err);
else
 
    console.log('Saved ', data );
 
});
 

    

}
/*anuja*/
var addcard=function(req,res)
{

console.log('count is :' +count);
var kanbansch = new kanbanuser({
pref : req.body.pref,
name : req.body.name,
prjdesc : req.body.prjdesc,
stage: 'todo',
inprogress: 'false',
todo: 'true',
done :'false',
card: req.body.card,
assignedto: req.body.assignedto,
starttime: req.body.starttime,
endtime: req.body.endtime,
qtime: req.body.qtime

});

console.log('req.body!!!!!!!!!!!!!!!!!!!'+kanbansch);
kanbansch.prjdesc=projdesc;
kanbansch.pref=pref1;
kanbansch.name=name1;
kanbansch.save(function (err, data) {
console.log('data!!!!!!!!!!!!!!!!!!!!'+data);
if (err) console.log(err);
else
 
    console.log('Saved ', data );
 
});
 
    

}



var addstory=function(req,res)
{
     
var Schema = mongoose.Schema;
var scrumschema = new scrumuser({
pref : req.body.pref,
name : req.body.name,
prjdesc : req.body.prjdesc,
pname: req.body.pname,
desc: req.body.desc,
sprintNo: req.body.sprintNo,
story: req.body.story,
est: req.body.est,
priority: req.body.priority

});
scrumschema.prjdesc=projdesc;
 scrumschema.pref=pref1;
scrumschema.name=name1;

console.log('req.body!!!!!!!!!!!!!!!!!!!'+scrumschema);

scrumschema.save(function (err, data) {
console.log('data!!!!!!!!!!!!!!!!!!!!'+data);
if (err) console.log(err);
else
 
    console.log('Saved ', data );
 
});
 

    

}

var pageEdit=function(req,res,pref1)

{
    console.log("in edit");
    var result = new Object() ;
    var client = new Client();


    firstUser.find({'prjdesc':projdesc},function(err,data){
        if (err) console.log(err);
                        else 
                        {
                            

                       
                  result.prjdesc1=projdesc;
                  
                 
                    
                    //result.msg=msg;
                   if(pref1=='waterfall')
                   {
  res.render('waterfall', {
                        waterfallmessage: result.msg,
                        prjdesc :       result.prjdesc1,
                    
                    });
                   }
                   else if(pref1=='scrum')
                   {
  res.render('scrum', {
                       
                        prjdesc :       result.prjdesc1,
                    
                    });
                   }
                   else if(pref1=='kanban')
                   {
  res.render('kanban', {
                       
                        prjdesc :       result.prjdesc1,
                    
                    });
                   }
                   

 
} 
});



}
 
var mongoUpdate=function(req,res){

var record=req.body.prjdesc;
console.log("Updaterecord"+record);

firstUser.find({
    
    $or:[{'prjdesc':deldata},
    {'task':deldata}
    ]}
    ).remove((function(err,data){
 if (err) console.log(err);
else console.log('Find : ', data );

}))


firstUser.save(function (err, data) {
console.log('data!!!!!!!!!!!!!!!!!!!!'+data);
if (err) console.log(err);
else
 
    console.log('Saved ', data );
 
});




}


app.get('/', handle_get ) ;

app.post('/register', handle_post ) ;
app.post('/status', handle_post ) ;
app.post('/statuspage', handle_post ) ;
app.post('/water', handle_post ) ;
app.post('/kb', handle_post ) ;
app.post('/login', handle_post ) ;
app.post('/forgotpassword', handle_post ) ;
app.post('/scrum', handle_post ) ;
app.post('/kanban', handle_post ) ;
app.post('/contact', handle_post ) ;
app.post('/first', handle_post ) ;
app.post('/statusbutton', handle_post ) ;
app.post('/showcards', handle_post ) ;
//showcards?Qstatus=Qstatus

//

//
var port = process.env.PORT;
var ip   = process.env.IP;
console.log("ip"+ip);
console.log("port"+port);

var statuscals = function (req, res) {
  var result = new Object() ;
    var client = new Client();
    scrumuser.aggregate([
        { $match: {
    $and: [{'name':name1},
                                    {'pref':pref1},
                                    {'prjdesc':projdesc}
                      ]}},
        
        { $group: {
            _id:null,
            est: { $sum: "$est"  },
            
        }}
    ], function (err, result1) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result1);
        var remain;
        for(var key in result1){
    console.log(result1[key].est);
    remain=result1[key].est
        }
        var msg="Remaining Hours :"+result1[key].est+"Hours";
                     scrumuser.find({
                             $and: [{'name':name1},
                                    {'pref':pref1},
                                    {'prjdesc':projdesc}
                      ]
                            
                        },{},function(err,docs){
                    console.log('docs!!!!!!!!!!!!!!!!!!'+docs);
                    result.msg = docs;  
                    docs.pref=pref1;
                    docs.name=name1;
                    docs.prjdesc=projdesc;  
        
                     res.render('scrum', {
                        status:msg,
                        scrumdata: result.msg
                        
                    });
                      
             });
        /*res.render('scrum', {
                        status:msg
                        
                    
                    });*/

    });
          
             

}

app.listen(8080);	
