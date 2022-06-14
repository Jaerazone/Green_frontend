const NewsItem = ({ loadingNew, news }) => {
    return (
        <div>
            {
                // loadingNew 가 true 일때 로딩중이라는 글자 출력
                loadingNew && "로딩중.."
            }
            {
                // loadingNew가 false이고, news의 값이 null 이 아닐때
                !loadingNew &&
                    news &&
                    // news를 map을 이용하여 반복
                    news.map((n) => (
                        <div>
                            <h2>{n.title}</h2>
                            <p>{n.description}</p>
                        </div>
                    ))
            }
        </div>
    );
};
export default NewsItem;
