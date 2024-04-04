import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
       
        <div id="sidebar"
          style={{ backgroundImage: `url("https://img.freepik.com/foto-gratis/herramientas-deportivas_53876-138077.jpg?w=996&t=st=1710971855~exp=1710972455~hmac=1bc03f1001e907941e4fba0e9ff776bda90d2bb7ffb27d1e284d28a02324a092")`
          }}>

          <h1> Router </h1>
          
          <nav>
            <ul>
            <li>
                <button>
                  <Link to={`/principal`}>MAIN</Link>
                </button>
              </li>
              <li>
                  <button>
                    <Link to={`/football`}>Futbol</Link>
                  </button>
              </li>
              <li>
                <button>
                  <Link to={`/bike`}>Ciclismo</Link>
                </button>
              </li>
              <li>
                <button>
                  <Link to={`/tenis`}>Tenis</Link>
                </button>
              </li>
              <li>
                <button>
                  <Link to={`error`}>OOPS</Link>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"> <Outlet /> </div>
       
      </>
    );
  }