// viet code javascript ax+b=c
// a và b là2 biến có gtri cho trc
// alert ra kq quả x sau khi giải được 
    var a=2
    var b=3
    var x=-b/a
  console("pt có ax+b=0")
  console.log(x)


  function giai_pt(a,b) {
    var x=-b/a
    console.log("phương trình ax=b=0 có nghiệm là")
    console.log(x)
  }

  function giai_ptb2(){
    // ax^2 +bx+c=0
    var a=1
    var b=2
    var c=1
    var delta= b*b -4*a*c
    if(delta<0) {
    alert ('phương trình không có nghiệm thực')
    }
    else if(delta==0){
    var x=-b/(2*a)
    alert('phương trình có nghiệm kép x= ' + x)
    }
    else{
        var x1=(-b+Math.sqrt(delta))/(2*a)
        var x2=(-b-Math.sqrt(delta))/(2*a)
    }
    alert('Phương trình có hai nghiệm x1= ' +x1 +'và x2= '+x2)
  }
  
