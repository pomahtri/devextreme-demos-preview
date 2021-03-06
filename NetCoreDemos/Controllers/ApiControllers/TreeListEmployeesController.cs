using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.TreeList;
using Newtonsoft.Json;
using System;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]")]
    public class TreeListEmployeesController : Controller {
        InMemoryEmployeesDataContext db;

        public TreeListEmployeesController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            db = new InMemoryEmployeesDataContext(httpContextAccessor, memoryCache);
        }

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(db.Employees, loadOptions);
        }

        [HttpPost]
        public IActionResult Post(string values) {
            var newEmployee = new Employee();
            JsonConvert.PopulateObject(values, newEmployee);

            if(!TryValidateModel(newEmployee))
                return BadRequest(ModelState.GetFullErrorMessage());

            db.Employees.Add(newEmployee);
            db.SaveChanges();

            return Ok();
        }

        [HttpPut]
        public IActionResult Put(int key, string values) {
            var employee = db.Employees.First(e => e.ID == key);

            JsonConvert.PopulateObject(values, employee);

            if(!TryValidateModel(employee))
                return BadRequest(ModelState.GetFullErrorMessage());

            db.SaveChanges();

            return Ok();
        }

        [HttpDelete]
        public void Delete(int key) {
            var employee = db.Employees.First(e => e.ID == key);
            db.Employees.Remove(employee);
            db.SaveChanges();
        }
    }
}
