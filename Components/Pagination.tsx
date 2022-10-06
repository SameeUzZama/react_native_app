import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  console.log("totalPosts", totalPosts);
  console.log("postsPerPage", postsPerPage);

  const pageNumbers: any = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <View>
      <Text style={styles.pagination}>
        {pageNumbers.map((number: any) => (
          <Text key={number} style={styles.pageItem}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </Text>
        ))}
      </Text>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  pagination: {
    backgroundColor: "rgb(167, 247, 247)",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyleType: "none",
    borderRadius: 5,
    padding: "0 5rem",
  },
  pageItem: {
    backgroundColor: "rgb(71, 150, 241)",
    textDecoration: "none",
    padding: "5px 10px",
    margin: "2px",
    borderRadius: 2,
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
});
