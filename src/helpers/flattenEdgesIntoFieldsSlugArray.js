// This changes the structure of a node into a 
// use it as a callback function for mapping

export const flattenEdgesIntoFieldsSlugArray = (edges) =>{
  const newArray = edges.map(edge => {
    return {
      fields: {
        slug: edge.node.fields.url
      }
    }
  });

  return newArray;
};