import React from "react";
// styled-components 사용하기위해 가져옴
import styled from "styled-components";

// styled-components의 이름작성
// styled.(태그) 를 통해서 사용할 컴포넌트의 디자인 작성
const NewsItemBlock = styled.div`
    display: flex;
    background-color: grey;

    .thumbnail {
        margin-right: 1rem;
        background-color: aquamarine;
        img {
            display: block;
            width: 300px;
            height : 200px
            object-fit: cover;
        }
    }

    .contents {
        background-color: bisque;
        h2 {
            margin: 0;
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin: 0.5rem;
            white-space: nomal;
        }
    }
    & + & {
        margin-top : 3rem;
    }
`;

const NewsItem = ({ news }) => {
    const { title, url, urlToImage, description } = news;
    return (
        <NewsItemBlock>
            {
                // jsx 언어 &&
                urlToImage && (
                    <div className="thumbnail">
                        <a href={url}>
                            <img src={urlToImage} alt="thumbnail" />
                        </a>
                    </div>
                )
            }

            <div className="contents">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;
