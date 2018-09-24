/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var config = {
    apiKey: "AIzaSyAvmJMrXIrDlBfqtND1ft3ohNtHiwzYBwk",
    authDomain: "dataaddicts-123.firebaseapp.com",
    databaseURL: "https://dataaddicts-123.firebaseio.com",
    projectId: "dataaddicts-123",
    storageBucket: "dataaddicts-123.appspot.com",
    messagingSenderId: "237372964116"
  };
 firebase.initializeApp(config);
 var name;
 var phone;
 var email;
 var year;
 var college;
 var Email;
 var text;var arr;
 var array;var obj;
        
      
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
    
    
    function exam()
    {
        
        name1=document.getElementById("name1").value;
        name2=document.getElementById("name2").value;
        email=document.getElementById("email").value;
        phone=document.getElementById("phone").value;
        college=document.getElementById("college").value;
        year=document.getElementById("year").value;
        var database=firebase.database();
        var studentref=database.ref("student");
        var obj;var s;
        
        
        
        var emailreg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var phonereg=/^\d{10}$/;
        x=document.getElementById("email").value;
        y=document.getElementById("phone").value;
        
        var test1=x.match(emailreg)&&y.match(phonereg);
        var test2=!(isEmpty(name1)||isEmpty(email)||isEmpty(phone));
        if(test2 && test1)
        {
            //window.alert("sucess");
            document.getElementById("submit").disabled=true;
           studentref.once('value',function(snap)
           {
            var vin=0;
            var obj=snap.val();
            var s=Object.keys(obj);
            for(var i=0;i<s.length;i++)
            {
              if((obj[s[i]].email==email)||obj[s[i]].phone==phone)
              {
                  vin=1;
                  break;
              }
            }
            if(vin==0)
            {
              window.location.replace('paper.html?text='+name1+'?name2?'+name2+'?phone=?'+phone+'?email?'+email+'?year?'+year+'?college?'+college);
            }
            else
            {
              window.alert("Already submitted test on provided email or phone.");
              window.location.replace("registration.html");
            }
           
        });
        }
        else
        {
            window.alert("Enter valid name,phone number,email.DON'T GIVE SPACES IN BETWEEN WORDS.");
            window.location.replace("registration.html");
        }
        
     
     
    }
    
    
    function isEmpty( obj)
    {
        if(obj==null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
