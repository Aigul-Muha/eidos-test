import { useMemo } from 'react';

export const useContent = (content, sort, query) => {
  // const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return content.filter((post) => post.module.toLowerCase().includes(query));
  }, [query, content]);
  return sortedAndSearchedPosts;
};
