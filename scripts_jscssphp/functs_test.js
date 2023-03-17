// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.
var today = new Date();
var expiry = new Date(today.getTime() + 30*24*3600*1000*3); // plus 30 days
var cookjson;

var AllExpt = []
var thisExpt = []

var sendToServer = function (note) {
  //https://stackoverflow.com/questions/14484613/load-local-json-file-into-variable
  //fetch('data_experimenters/all_expts.json').then(response => AllExpt = response.json());
  AllExpt = (function() {
    var json = null;
    $.ajax({'async': false, 'global': false, 'url': "data_experimenters/all_expts.json", 'dataType': "json", 
      'success': function(data) {
        json = data;
      }
    });
    return json;
  })();

  console.log("[LOG] - read previous Expts, appending this Expt to the list");
  AllExpt = thisExpt.concat(AllExpt);
  console.log("[LOG] - Done, saving now");
  save_data_json('all_expts',"data_experimenters",JSON.stringify(AllExpt)); 
  console.log("[LOG] - OVER");
}


window.onload = function (e) {
  var form = document.getElementById("form2")
  form.onsubmit = function (e) {
    e.preventDefault()
    console.log("[LOG] - making JSON object - thisExpt");
    //console.log(e);
    make_json = {
      content: e.target.elements[0].value,
      date: new Date(),
      Key1: 'Niket',
      Key2: 'Agrawal'
    }
    //console.log(thisExpt);
    thisExpt.push(make_json)
    console.log("[LOG] - JSON made, sending to server to append");
    sendToServer(thisExpt);
  }
}

function save_data_json(f_name, dir, data) {
  jQuery.ajax({type: 'post', cache: false, url: 'scripts_jscssphp/save2_jquery.php',
    data: {data_dir: dir,
      file_name: f_name + '.json', // the file type should be added
      exp_data: data }
    });
}