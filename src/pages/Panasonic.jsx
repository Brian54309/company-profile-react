import panasonicLogo from "../assets/panasonic.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { panasonic } from "../data/panasonic"
import Navbar from "../components/Navbar"
function Panasonic(){
      const [searchTerm, setSearchTerm] = useState("")
      const [category, setCategory] = useState("all")
      const [filteredData, setFilteredData] = useState(panasonic)
        const handleSearch = (e) => {
          e.preventDefault()
          const filtered = panasonic.filter((item) => {
            const matchCategory = category === "all" || item.category.toLowerCase() === category.toLowerCase()
            const matchSearch =
              item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.type.toLowerCase().includes(searchTerm.toLowerCase())
            return matchCategory && matchSearch
          })
          setFilteredData(filtered)
        }
    return(
      <>
      <Navbar/>
        <div>
        <section className="d-flex justify-content-around mt-2">
        <img src={panasonicLogo} alt="Broco logo" />
      </section>
              <section>
        <form className="container d-flex mx-4-xl gap-2 mt-4" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="wide">Wide Series</option>
            <option value="style">Style E</option>
          </select>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </section>
            <section>
        <div className="container d-flex flex-wrap justify-content-around gap-3 mt-4">
          {filteredData.length > 0 ? (
            filteredData.map((data, key) => (
              <div key={key} className="card" style={{ width: "250px", height: "250px" }}>
                <img
                  src={data.image}
                  alt={data.name}
                  style={{ width: "147px", height: "146px" }}
                  className="mx-auto my-2"
                />
                <div className="text-center">
                  <p className="mb-0">{data.name}</p>
                  <p className="text-muted">{data.type}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-4">No matching items found.</p>
          )}
        </div>
      </section>
        </div>
        </>
    )
}

export default Panasonic