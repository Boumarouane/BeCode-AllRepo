function toggle_text() {
  let span = document.getElementById("span_txt");
  let button = document.getElementById('run');
  let btn = document.getElementById('close');
  let btn2 = document.getElementById('add');
  if(span.style.display == "none") {
    span.style.display = "inline";
    span.style.width ='100px';
    span.style.height= '20px';
    span.style.backgroundColor='white';
    button.style.display="inline";
    btn.style.display="inline";
    btn2.style.display="none";
    

  } else {
    btn.style.display="none"
    span.style.display = "none";
    button.style.display= "none";
    btn2.style.display="inline";
  }
}