// https://til.hashrocket.com/posts/sxbrscjuqu-share-scss-variables-with-javascript
import variables from './sass/base/_variables.scss';

const CSS = {
    backgroundColor: variables.colordark
}

export default ({}) => {
    return <div style={CSS}>Content</div>
}