import article from './assets/illustration-article.svg'
import avatar from './assets/image-avatar.webp'

function App() {
  return (
    <div className="card">
      <img className="cover" src={article} alt="" />
      <div className="info">
        <div className="tags">
          <span className="tag">Learning</span>
        </div>
        <div className="date">Published 21 Dec 2023</div>
        <h1 className="title">HTML & CSS foundations</h1>
        <div className="intro">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </div>
      </div>
      <div className="author">
        <img className="avatar" src={avatar} alt="" />
        <span className="name">Greg Hopper</span>
      </div>
    </div>
  )
}

export default App
