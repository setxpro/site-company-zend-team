import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-size: calc(60% + .8vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
        background-image: url('https://images.pling.com/img/00/00/66/53/17/1845356/light-sky-stars-background-design-theme-hd-wallpapers-wallpaper-1920x1080-10wallpaper.com.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
    }

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-track {
        background: #161e31;
    }

    ::-webkit-scrollbar-thumb {
        background: #AAA;
    }
`;
