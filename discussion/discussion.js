function doDisplay(){
    var con=document.getElementById("r1");
    var another = document.getElementById("r2")
    var other = document.getElementById("r3")
  
    if(con.style.display=='none'){
      con.style.display='block';
    }else{
      con.style.display='none';
    }

    if(con.style.display=='block'){
        clicked.style.background='#d1ff31';
        clicked.style.color='#2b39ff';
    }
    if(con.style.display=='none'){
        clicked.style.background='#2b39ff';
        clicked.style.color='#d1ff31'
    }
    if(con.style.display=='block'){
      another.style.display='none'
      clicked2.style.background='#2b39ff';
      clicked2.style.color='#d1ff31'
      clicked3.style.background='#2b39ff';
      clicked3.style.color='#d1ff31'
      other.style.display='none'
    }
  }



  function doDisplay2(){
    var con=document.getElementById("r2");
    var another = document.getElementById("r1")
    var other = document.getElementById("r3")
  
    if(con.style.display=='none'){
      con.style.display='block';
    }else{
      con.style.display='none';
    }

    if(con.style.display=='block'){
        clicked2.style.background='#d1ff31';
        clicked2.style.color='#2b39ff';
    }
    if(con.style.display=='none'){
        clicked2.style.background='#2b39ff';
        clicked2.style.color='#d1ff31'
    }
    if(con.style.display=='block'){
      another.style.display='none'
      clicked.style.background='#2b39ff';
      clicked.style.color='#d1ff31'
      clicked3.style.background='#2b39ff';
      clicked3.style.color='#d1ff31'
      other.style.display='none'
    }
  }




  function doDisplay3(){
    var con=document.getElementById("r3");
    var another = document.getElementById("r1")
    var other = document.getElementById("r2")
  
    if(con.style.display=='none'){
      con.style.display='block';
    }else{
      con.style.display='none';
    }

    if(con.style.display=='block'){
        clicked3.style.background='#d1ff31';
        clicked3.style.color='#2b39ff';
    }
    if(con.style.display=='none'){
        clicked3.style.background='#2b39ff';
        clicked3.style.color='#d1ff31'
    }
    if(con.style.display=='block'){
      another.style.display='none'
      clicked.style.background='#2b39ff';
      clicked.style.color='#d1ff31'
      clicked2.style.background='#2b39ff';
      clicked2.style.color='#d1ff31'
      other.style.display='none'
    }
  }