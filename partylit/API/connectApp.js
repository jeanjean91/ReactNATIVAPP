
export function getEvents() {

    targetUrl = 'http://127.0.0.1:8001/api/evenements/liste'
 return fetch(targetUrl)
         .then((response) => response.json())
    	 .catch((error) => console.error(error))

 
}