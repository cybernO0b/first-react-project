// import React, {useState, useEffect} from 'react';

// const [addpost, getPosts] = useState([]);

//     useEffect(() => {
//         let token = localStorage.getItem("token");
//         if (token) {
//             fetch("https://api.react-learning.ru/posts", {
//                 headers: {
//                     authorization: `Bearer ${token}`
//                 }
//             })
//             .then(es => es.json())
//             .then(ans => {
//                 console.log(ans)
//                 getPosts(ans);
//             })
//         }

//     }, []);

// const Addpost = () => {
//     return (
//         <h1>Add post</h1>


//     )
// }

// export default Addpost;
