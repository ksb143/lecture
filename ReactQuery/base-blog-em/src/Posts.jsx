import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchPosts, deletePost, updatePost } from './api';
import { PostDetail } from './PostDetail';
const maxPostPage = 10;

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      // prefetch의 기본 staleTime은 0초이다.
      queryClient.prefetchQuery({
        queryKey: ['post', nextPage],
        queryFn: () => fetchPosts(nextPage),
      });
    }
  }, [currentPage, queryClient]);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['post', currentPage],
    queryFn: () => fetchPosts(currentPage),
    // stale 이란 오래된 데이터지만 캐시에는 있음 (refetch의 기준)
    // staleTime이 기본이 0인데, 개발자 왈 데이터는 늘 새거여야 한다라는 의미임
    // 즉, 데이터를 가져와야 할 시간을 알려줌
    // 그러나 gcTime은 데이터를 캐시에서 유지할 시간 설정으로 시간이 지나면 데이터는 캐시에서 사라짐
    // 기본 gcTime은 5분 (데이터가 페이지에 표시될 때 측정되지 않음)
    staleTime: 2000, // 2초
  });
  // isLoding
  // isFetching의 하위 작업으로, 로딩 중을 뜻함
  // 쿼리 함수가 아직 미해결이지만 캐시된 데이터도 없음 (쿼리를 전에 실행한 적이 없음)
  // isFetching
  // 비동기 쿼리가 아직 해결되지 않았다는 것으로
  // 아직 fetch는 완료되지 않았지만 Axios 호출이나 GraphQL 호출 같은 다른 종류 데이터 가져오는 작업
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );
  }

  return (
    <>
      <ul>
        {data.map(post => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button
          disabled={currentPage <= 1}
          onClick={() => {
            setCurrentPage(pre => pre - 1);
          }}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= maxPostPage}
          onClick={() => {
            setCurrentPage(pre => pre + 1);
          }}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
