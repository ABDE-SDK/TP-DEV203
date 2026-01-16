import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Posts = () => {
    const [postsAll, setPostsAll] = useState([])
    const { id } = useParams()
    const postFound = postsAll.find((post) => (
        post.id == id
    ))

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setPostsAll(res.data)
            })
            .catch((err) => {
                console.error("Erreur:", err)
            });
    }, [])

    const suppPost = (id) => {
        const newPosts = postsAll.filter((p) => p.id !== id);
        setPostsAll(newPosts);
    }

    return (
        <>{
            id !== undefined && postFound
                ?
                (<div className='container-post'>
                    <h2>Details post:</h2>
                    <h3>title :{postFound.title}</h3>
                    <p>Description :{postFound.body}</p>

                </div>)
                :
                (<div className="container">
                    <h2 className="main-title">Posts ({postsAll.length}) :</h2>

                    <div className='posts-grid'>
                        {
                            postsAll.map((post) => (
                                <div key={post.id} className='post-card'>
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            {post.title.substring(0, 50)}...
                                        </h3>
                                        <p className="post-body">
                                            {post.body.substring(0, 80)}...
                                        </p>
                                    </div>

                                    <div className='post-actions'>
                                        <Link
                                            to={`/posts/${post.id}`}
                                            className="btn btn-details"
                                        >
                                            Détails
                                        </Link>

                                        <button
                                            onClick={() => suppPost(post.id)}
                                            className="btn btn-delete"
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>)
        }
        </>
    )
}

export default Posts;