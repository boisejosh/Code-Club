export default {
    fetch(request) {
        if (request.method == "POST") {
          return new Response("Hello POST, 9/12/2022!", {
            headers: {
              "content-type": "text/plain"
            }
          });
        } else {
          return new Response("This is a HTTP not a POST!", {
            headers: {
              "content-type": "text/plain"
            }
          });
        }
      }
    };

