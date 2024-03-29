import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/fellipe-s-brandao.png",
            name: "Fellipe Brandao",
            role: "Dev backend"
        },
        content: [
            { type: 'paragraph', content:'Fala galeraa 👋' },
            { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content:'jane.design/doctorcare' }
        ],
        publishAt: new Date('2023-03-29 14:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/diego3g.png",
            name: "Diego Fernandes",
            role: "CTO Rocketseat"
        },
        content: [
            { type: 'paragraph', content:'Fala galeraa 👋' },
            { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content:'jane.design/doctorcare' }
        ],
        publishAt: new Date('2023-03-28 14:00:00')
    },
]

function App() {
    return (
        <div >
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    {
                        posts.map(post => (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishAt={post.publishAt}
                            />
                        ))
                    }
                </main>
            </div>
        </div>
    )
}

export default App
