class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  get(url, callback) {
    this.xhr.open("GET", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("get req:error", null);
      }
    };
    this.xhr.send();
  }

  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json");

    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Post req:error", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-type", "application/json");

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Put req:error", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }
  delete(url, callback) {
    this.xhr.open("DELETE", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, "data deleted");
      } else {
        callback("delete req:error", null);
      }
    };
    this.xhr.send();
  }
}
const request = new Request();

request.get("https://v6.exchangerate-api.com/v6/10ba45a8ef7067d415429f76/latest/USD",function(err,response){
    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }
});
request.get("https://jsonplaceholder.typicode.com/albums/21", function(err,response){
    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }
});
request.post(
  "https://jsonplaceholder.typicode.com/albums/",
  { userId: 35, title: "bomboclat" },
  function (err, album) {
    if (err === null) {
      console.log(album);
    } else {
      console.log(err);
    }
  }
);
request.delete("https://jsonplaceholder.typicode.com/albums/1",function(err,response){
    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }
})