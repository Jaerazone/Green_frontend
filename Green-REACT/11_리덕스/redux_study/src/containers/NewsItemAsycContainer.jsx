import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsItem from "../components/NewsItem";
import { getNews } from "../modules/newapi";

const NewsItemAsycContainer = () => {
    const { loadingNews, news } = useSelector((state) => ({
        loadingNews: state.newapi.loading.GET_NEWS,
        news: state.newapi.news,
    }));

    const dispatch = useDispatch();

    const GetNews = useCallback(() => dispatch(getNews()), [dispatch]);

    // 마운트될때 실행하기 위해서 useEffect 사용
    useEffect(() => {
        GetNews();
    }, [GetNews]);

    return <NewsItem news={news} loadingNew={loadingNews} />;
};
export default NewsItemAsycContainer;
