import { ApolloClient, InMemoryCache } from "@apollo/client";
import todoVar from "../store/todo";

// 만든 Todo 데이터를 GraphQL 쿼리로 조회할 수 있도록 로컬 전용 필드에 등록한다.
// InMemoryCache typePolicies에 정의해준다.
// read 함수를 실행하면 todoVar를 실행해 Todo데이터를 반환해준다.

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // read 함수가 정의된 필드는 쿼리 요청이 들어올 때마다 해당 함수를 호출해 필드 값을 계산한다.
        // 로컬 상태는 캐싱된 데이터를 사용하지 않기 때문에 read 함수를 통해 데이터를 조회해야 한다.
        getTodos: {
          read() {
            return todoVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  cache,
});

export default client;
