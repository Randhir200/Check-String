/* Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false. */

var checkString = function(s) {
    let a;
    let b;
    if(s.length>2){
        a =s.slice(s.indexOf('a'),s.lastIndexOf('a'));
        b =s.slice(s.indexOf('b'),s.lastIndexOf('b'));
    }else if(s.length==2){
        if(s[0]=="a"){
         a=s[0];
         b=s.slice(s.indexOf('b'));   
        }else{
         b=s[0];    
         a=s.slice(s.indexOf('a'));      
        }   
        b=s.slice(s.indexOf('b'));   
    }else{
        a=s.slice(s.indexOf('a'));  
        b=s.slice(s.indexOf('b'));   
    }
    let f=false;
    if(a.length>0 && s.indexOf('a')==0){
      for(const i of a){
        if(i=="a"){
            f=true;
        }else{
            f=false;
            break;
        }
      }
    }else if(s.lastIndexOf('b')==s.length-1){
        for(const i of b){
        if(i=="b"){
            f=true;
        }else{
            f=false;
            break;
        }
    }  
    }
    return f;
};
let s="aaabbb";
console.log(checkString(s));