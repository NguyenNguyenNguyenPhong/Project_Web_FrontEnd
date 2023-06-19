import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css"
import Navigation from '../../components/Navigation/Navigation'
import FooterContainer from './../../container/FooterContainer';

const BlogContainer = () => {
    const [data, setData] = useState([]); // Initial embedId state


    useEffect(() => {
        // Fetch video data from API using Axios
        axios.get('http://localhost:8080/api/blog', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
        })
            .then((response) => {
                let resObj = response.data
                setData(resObj);

            })
            .catch((error) => {
                console.error('Error fetching video data:', error);
            });
    }, []);
    console.log(data)

    return (
        <div>
            <Navigation>
            </Navigation>
            <div className="container">
                <h1 style={{ margin: "20px" }}>Các bài đăng nổi bật</h1>
                <ul className="blog-list"> {/* Apply the "blog-list" class to the <ul> element */}
                    {data.map((blog) => (
                        <li key={blog.id} className="blog-list-item"> {/* Apply the "blog-list-item" class to each <li> element */}
                            <img className="image" src={blog.image} alt={blog.name} />
                            
                            <div className="content">
                                <div className="category"><strong>Topic:</strong>{blog.category}</div>
                                 <a href={blog.content} target="_blank" rel="noopener noreferrer"> 
                                <div className="name">{blog.name}</div>
                                 </a>
                            </div>
                           
                        </li>
                    ))}
                </ul>
            </div>
            <FooterContainer>

            </FooterContainer>
        </div>

    );
};

export default BlogContainer;