// max example with array(1D-array):

function maxi (score){
    let max = score[0];
    for(let i=1;i<score.length;i++){
      if(max<score[i]){
        return max = score[i];
      }
    }
 } 
 
 
 const score=maxi([23,45,6,7,43]);
 
 console.log(score);


 //2D-array:

function maxAge(details){
  let max_1_name = details[0][0];
  let max_1_score = details[0][1];

  for(let i=1;i<details.length;i++){
      if(max_1_score <details[i][1]){
             max_1_name = details[i][0];
             max_1_score = details[i][1];     
      }
  }
  return max_1_name;
}


 const details = [
     ['Mohsin',28],
     ['Mujakkir',26],
     ['Ovi',32],
     ['Tasrik',21] 
 ];

 const name_1 = maxAge(details);
 console.log(name_1);