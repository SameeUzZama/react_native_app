import React from "react";
import { View } from "react-native";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  console.log("totalPosts", totalPosts);
  console.log("postsPerPage", postsPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <View>
      <nav className="container">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                onClick={() => paginate(number)}
                // href="!#"
                className="page-link"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </View>
  );
};

export default Pagination;
