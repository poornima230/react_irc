function printPattern(range) {
    for(var i=1;i<=range;i++){
      var str="";
      for(var j=1;j<=i;j++){
        str += j+" ";
      }
      console.log(str);
    }
  }
  printPattern(10);
  
  
  const Students = ["tuynj","jsjnd","tiem","thrjnh","sskjrg"];
  
  Students.forEach((Student) => {
    console.log(Student);
  });