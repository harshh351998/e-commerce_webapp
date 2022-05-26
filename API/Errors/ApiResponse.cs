namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

       
        public int StatusCode { get; set; }
        public string Message { get; set; }
        
        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "A bad request you have made noob developer",
                401 => "Authorized you are not, don't become oversmart",
                404 => "Resource found ?, lol it was not",
                500 => "Errors are the path of dark side, Anger leads to hate. Hate leads to career change. Khatam Tata Bye Bye Good Bye",
                _ => null
            };
        }

    }
}