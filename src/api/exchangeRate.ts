import { useQuery } from "@tanstack/react-query";

export const useExchangeRate = () => {
  const { data: USDToKRWRate } = useQuery({
    queryKey: ["USD_to_KRW_rate"],
    queryFn: async () => {
      const response = await fetch(
        `https://m.search.naver.com/p/csearch/content/qapirender.nhn?key=calculator&pkid=141&q=%ED%99%98%EC%9C%A8&where=m&u1=keb&u6=standardUnit&u7=0&u3=USD&u4=KRW&u8=down&u2=1`
      );

      if (response.ok) {
        const resText = await response.text();
        const parsedRes = JSON.parse(resText);
        return parsedRes.country[1];
      }
    },
  });

  return { USDToKRWRate };
};
