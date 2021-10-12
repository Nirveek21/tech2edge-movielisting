/*alert(
  "The data is been fetched from the api, also the images are in assets folder as given in the api."
);*/

/*fetching api*/

fetch("http://demo.tech2edge.co/samples/data-sg")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    displaydata(data);
  })
  .catch((error) => console.log(error));

/*display function*/
function displaydata(data) {
  const { title, ott, desc, img } = data.series;
  document.querySelector(".TITLE").innerHTML = title;
  document.querySelector(".PLATFORM").innerHTML = ott;
  document.querySelector(".DESCRIPTION").innerHTML = `" ${desc} "`;
  document.querySelector(".MAIN-IMAGE").src = `http://demo.tech2edge.co/samples/${(data.series.img)}`;

  /*adding cast*/
  for(i in data.characters){
    if(i%2==0){
          $(".CHARACTERS").append( `
          <div class="card mb-4 bg-dark" style="width: 60rem">
          <div class="row g-0">
          <div class="col-md-5 p-2">
          <img src="http://demo.tech2edge.co/samples/${(data.characters[i].img)}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-7">
          <div class="card-body">
          <h4 class="card-title">PRESENTING</h4>
          <div class="bar"></div>
          <div class="data">
          <div >NAME : ${(data.characters[i].name)} </div>
          <div>AGE : ${(data.characters[i].age)} </div> 
          <div>PROFESSION : ${(data.characters[i].profession)} </div>
          </div>
          </div>
          </div>
          </div>
          </div>`)
        }
        else{
          $(".CHARACTERS").append( `
          <div class="card mb-4 bg-dark " style="width: 60rem " >
          <div class="row g-0">
          <div class="col-md-7">
          <div class="card-body" >
          <h4 class="card-title">PRESENTING</h4>
          <div class="bar"></div>	
          <div class="data">
          <div>NAME : ${(data.characters[i].name)} </div>
          <div>AGE : ${(data.characters[i].age)} </div> 
          <div>PROFESSION : ${(data.characters[i].profession)} </div>
          </div>
          </div>
         </div>
        <div class="col-md-5 p-2">
        <img src="http://demo.tech2edge.co/samples/${(data.characters[i].img)}" class="img-fluid rounded-start" alt="...">
        </div>
        </div>
        </div>`)
        }
      }}