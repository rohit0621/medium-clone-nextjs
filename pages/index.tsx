import React from "react";
import ArticleList from "../components/ArticleList";
import Trending from "../components/Trending";
import { supabase } from "./../lib/supabaseClient";
import Footer from "../components/Footer";
import Banner from "../components/Banner";


 const home = ({articles,persons}) => {
  return (
    <>
      <Banner/>
      <Trending />
      <div className="grid grid-cols-2 gap-16 px-28 py-10 ">
        <div>
          <ArticleList articles={articles} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  let { data } = await supabase.from('articles').select()
  let  persons  =  (await supabase.from('persons').select()).data
  return {
    props: {
     articles: data,
     persons: persons,
    },
  };
}

export default home;
