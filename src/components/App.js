import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MaterialIcon, {colorPalette} from 'material-icons-react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import axios from 'axios';


export default function App(props) {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [location, setLocation] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [username, setUsername] = useState('')
  const [repos, setRepos] = useState([])
  const [htmlUrl, setHtmlUrl] = useState('')

  useEffect(() => {
    axios.get('https://api.github.com/users/d-malla').then(resp => {
      setName(resp.data.name)
      setBio(resp.data.bio)
      setLocation(resp.data.location)
      setEmail(resp.data)
      setImage(resp.data.avatar_url)
      setUsername(resp.data.login)
      setHtmlUrl(resp.data.html_url)
      console.log(resp.data)
    });
    axios.get('https://api.github.com/users/d-malla/repos').then(resp => {
      console.log(resp.data)
      setRepos(resp.data)
    })
    }, []);

  return (
    <div id='container'>
      <header id='mainHeader'>
        <div>
          <img src={'https://place-hold.it/30'} alt='logo img'></img>
          <input type='text' placeholder='Search or jump to...'></input>
          <ul>
            <a href='#'><li>Pull requests</li></a>
            <a href='#'><li>Issues</li></a>
            <a href='#'><li>Marketplace</li></a>
            <a href='#'><li>Explore</li></a>
          </ul>
        </div>
        <div id='icons'>
          <a href='#'><div id='notificationsIcon' className='optionIcons'><MaterialIcon icon="notification_important" /></div></a>
          <a href='#'><div id='repositoryIcon' className='optionIcons'><MaterialIcon icon="add" /><MaterialIcon icon="arrow_drop_down" id='firstArrow'/></div></a>
          <a href='#'><div id='userIcon' className='optionIcons'><img src={image} alt='tiny user'></img><MaterialIcon icon="arrow_drop_down" id='secondArrow' /></div></a>
        </div>
      </header>
      <section>
        <aside>
          <div id='asideImage'>
            <img src={image} alt='user'></img>
            <h1>{name}</h1>
            <h3>{username}</h3>
            <button>Follow</button>
          </div>
          <div>
            <div id='star'>
            <p><MaterialIcon icon="star" /></p>
            <p id='pro'>PRO</p>
            </div>
            <a href='#'><p id='blockReport'>Block or report user</p></a>
          </div>

        </aside>
        <main>
          <div id="bodyMenu">
            <ul>
              <a href='#'><li className='menuItems'>Overview</li></a>
              <a href='#'><li className='menuItems'>Repositories</li></a>
              <a href='#'><li className='menuItems'>Projects</li></a>
              <a href='#'><li className='menuItems'>Stars</li></a>
              <a href='#'><li className='menuItems'>Followers</li></a>
              <a href='#'><li className='menuItems'>Following</li></a>
            </ul>
          </div>
          <div id='searchMenu'>
            <input type='text' placeholder='Find a repository...'></input>
            <select id='type' name='type'> Type
              <option disabled>Select type</option>
              <option>All</option>
              <option>Sources</option>
              <option>Forks</option>
              <option>Archived</option>
              <option>Mirrors</option>
            </select>
            <select id='language' name='language'>
              <option disabled>Select Language</option>
              <option>All</option>
              <option>Javascript</option>
              <option>HTML</option>
              <option>Shell</option>
              <option>Java</option>
              <option>C++</option>
              <option>Python</option>
              <option>PHP</option>
            </select>
          </div>
          {repos.map(repo => (
          <div key={'album-id' + repo.id}id='repositoryList'>
            <div>
              <div>
                <a href='#'><h3>{repo.name}</h3></a>
                <div id='aboutRepo'>
                  <p>HTML</p>
          <p>Updated -- days ago</p>
                </div>
              </div>
              <div>
                <button type='button'>★ Star</button>
              </div>
            </div>
          </div>
          ))}
        </main>
      </section>
      <footer id='mainFooter'>
        <div>
          <ul>
            <li>© 2019 Github, Inc.</li>
            <a href='#' className='bottomLink'><li>Terms</li></a>
            <a href='#' className='bottomLink'><li>Privacy</li></a>
            <a href='#' className='bottomLink'><li>Security</li></a>
            <a href='#' className='bottomLink'><li>Status</li></a>
            <a href='#' className='bottomLink'><li>Help</li></a>
          </ul>
        </div>
        <div>
        <img src='https://place-hold.it/30' alt='logo img'></img>
        </div>
        <div>
          <ul>
            <a href='#' className='bottomLink'><li>Contact Github</li></a>
            <a href='#' className='bottomLink'><li>Pricing</li></a>
            <a href='#' className='bottomLink'><li>API</li></a>
            <a href='#' className='bottomLink'><li>Training</li></a>
            <a href='#' className='bottomLink'><li>Blog</li></a>
            <a href='#' className='bottomLink'><li>About</li></a>
          </ul>
        </div>
      </footer>
    </div>
  )
}