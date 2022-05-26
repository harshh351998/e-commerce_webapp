using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly StoreContext _context;
        public BuggyController(StoreContext context)
        {
            _context = context;
        }

        //Not Found error
        [HttpGet("notfound")]

        public ActionResult GetNotFoundRequest()
        {
                var thing = _context.Products.Find(42);
                if(thing == null)
                {
                    return NotFound(new ApiResponse(404));
                }

                return Ok();

        }

        
        //Server error
        [HttpGet("servererror")]
        public ActionResult GetServerError()
        {

                var thing = _context.Products.Find(42);
                var thingToReurn = thing.ToString();
                return Ok();

        }

        
        //Bad request error
        [HttpGet("badrequest")]
        public ActionResult GetBadRequest()
        {
                return BadRequest(new ApiResponse(400));

        }

        
        //Bad request including id error
        [HttpGet("badrequest/{id}")]
        public ActionResult GetNotFoundRequest( int id)
        {
                return Ok();

        }
    }
}