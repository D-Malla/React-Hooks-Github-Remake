import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
  const [repos, setRepos] = useState('')
  const [htmlUrl, setHtmlUrl] = useState('')

  console.log(repos)

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
          <input type='text'></input>
          <ul>
            <li>Pull requests</li>
            <li>Issues</li>
            <li>Marketplace</li>
            <li>Explore</li>
          </ul>
        </div>
        <div id='icons'>
          <div id='notificationsIcon' className='optionIcons'><MaterialIcon icon="notification_important" /></div>
          <div id='repositoryIcon' className='optionIcons'><MaterialIcon icon="add" /></div>
          <div id='userIcon' className='optionIcons'><img src={image} alt='tiny user'></img></div>
        </div>
      </header>
      <section>
        <aside>
          <div>
            <img src={image} alt='user'></img>
            <h1>{username}</h1>
            <h3>{name}</h3>
            <button>Follow</button>
          </div>
          <div>
            <div id='star'>
            <p><MaterialIcon icon="star" /></p>
            <p id='pro'>PRO</p>
            </div>
            <p>Block or report user</p>
          </div>

        </aside>
        <main>
          <div id="bodyMenu">
            <ul>
              <li className='menuItems'>Overview</li>
              <li className='menuItems'>Repositories</li>
              <li className='menuItems'>Projects</li>
              <li className='menuItems'>Stars</li>
              <li className='menuItems'>Followers</li>
              <li className='menuItems'>Following</li>
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
          <div id='repositoryList'>
          {/* {repos.map(repo => ( */}
            <div>
              <div>
                <h3>foobar</h3>
                <div id='aboutRepo'>
                  <p>HTML</p>
                  <p>Updated -- days ago</p>
                </div>
              </div>
              <div>
                <button type='button'>Star</button>
              </div>
            </div>
          {/* ))} */}
          </div>
        </main>
      </section>
      <footer id='mainFooter'>
        <div>
          <ul>
            <li>© 2019 Github, Inc.</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
            <li>Status</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
        <img src='https://place-hold.it/30' alt='logo img'></img>
        </div>
        <div>
          <ul>
            <li>Contact Github</li>
            <li>Pricing</li>
            <li>API</li>
            <li>Training</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}