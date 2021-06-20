module.exports = {
   handle: function(error) {
	   var str = '';
	   
	   switch(error.response.status)
	   {
		   case 400:
			   str = `Error 400: Bad Request - Invalid parameters or request method. [${error.response.data.error_code}]`;
			   break;
		   case 401:
			   str = `Error 401: Unauthorized - Unable to authenticate. [${error.response.data.error_code}]`;
			   break;		   
		   case 403:
			   str = `Error 403: Forbidden - The request is not allowed. [${error.response.data.error_code}]`;
			   break;
		   case 404:
			   str = `Error 404: Not Found - The specified resource could not be found. [${error.response.data.error_code}]`;
			   break;
		   case 429:
			   str = `Error 429: Too Many Requests. [${error.response.data.error_code}]`;
			   break;	
		   case 500:
			   str = `Error 500: Internal error, contact developer. [${error.response.data.error_code}]`;
			   break;			
		   case 503:
			   str = `Error 503: API offline. [${error.response.data.error_code}]`;
			   break;		
			default:
			str = `Error ${error.response.status} : ${error.response.data.error_code}`; 
			break;
	   }

      return str;
   }
}


///err.response.data.error_code