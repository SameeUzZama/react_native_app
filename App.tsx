import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import Pagination from "./Components/Pagination";
import Posts from "./Components/Posts";

let TotalPage: number = 0;

export default function App() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  console.log(posts.length, "lrn");

  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
    );
    console.log(res.data);
    TotalPage = res?.data?.nbPages;
    let tempArr: any[] = [];
    res?.data?.hits?.map((item: any) => {
      tempArr.push(item);
    });
    setPosts((prevState) => [...prevState, ...tempArr]);
    setLoading(false);
    setPage(page + 1);
    setHasMore(page < TotalPage ? true : false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      page < TotalPage && hasMore === true && fetchPosts();
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [hasMore]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  return (
    <View style={styles.container}>
      <Posts posts={currentPosts} loading={loading} />

      <View>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
