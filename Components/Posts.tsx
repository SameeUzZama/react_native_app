import React from "react";
import { DataTable } from "react-native-paper";

const Posts = ({ posts }: any) => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Title</DataTable.Title>
        <DataTable.Title>URL</DataTable.Title>
        <DataTable.Title>created_at</DataTable.Title>
        <DataTable.Title>author</DataTable.Title>
      </DataTable.Header>
      {posts.map((item: any, i: any) => {
        return (
          <DataTable.Row key={i}>
            <DataTable.Cell>{item.title}</DataTable.Cell>
            <DataTable.Cell>{item.url}</DataTable.Cell>
            <DataTable.Cell>{item.created_at}</DataTable.Cell>
            <DataTable.Cell>{item.author}</DataTable.Cell>
          </DataTable.Row>
        );
      })}
    </DataTable>
  );
};

export default Posts;
