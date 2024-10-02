let navbar =()=>{
    return `<div id="search_bar">
            <input type="text" id="query">
        </div>
        <div id="sorting">
            <h4 class="latest">Latest</h4>
            <hr>
            <h4 class="oldest">Oldest</h4>
            <hr>
            <h4 class="popular">Popular</h4>
            <hr>
            <h4 class="views">Views</h4>
            <hr>
            <h4 class="downloads">Downloads</h4>
        </div>
        <div id="categories">
            <h3 id ="nature">Nature</h3>
            <h3 id="car">Cars</h3>
            <h3 id="music">Music</h3>
            <h3 id="toy">Toy</h3>
            <h3 id="house">House</h3>
            <h3 id="college">College</h3>
            <h3 id="technology">Technology</h3>
            <h3 id="cartoon">Cartoons</h3>
            <h3 id="chatgpt">Chat gpt</h3>
        </div>`;
}
export { navbar }