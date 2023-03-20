import React from "react";
import Head from "next/head";

const story = () => {
  return (
    <div className="text-3xl font-bold">
      <Head>
        <title>Story</title>
      </Head>
      <h1>Story Page</h1>
    </div>
  );
};

export default story;

//FETCH data from DB//
// import React, { useState, useEffect } from "react";
// import { supabase } from "../lib/supabaseClient";

// export default function ShowPosts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await supabase.from("articles").select();
//         setPosts(res.title);
//         // console.log(res.data[0]);
//       } catch (err) {
//         console.log(err, "err");
//       }
//     }
//     fetchData();
//   }, []);
//   console.log(posts, "posts");
//   return <div>{posts}</div>;
// }
