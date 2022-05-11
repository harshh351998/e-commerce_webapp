using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController: ControllerBase
    {
        // Get request to get all products
        [HttpGet]
        public string GetProducts()
        {
            return "this will be list of products";
        }

        // Get request to get single product
        [HttpGet("{id}")]
        public string GetProduct(int id)
        {
            return "this will be single products";
        }
        
    }
}