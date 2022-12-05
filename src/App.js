import './App.css';
import BlogPosts from './Components/BlogPosts';
import Header from './Components/Header.js';

const users = [
  {
    id: '1',
    username: 'JSmith',
    firstname: 'John',
    secondname: 'Smith',
    photo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  }
]
const blogPosts = [
  {
    id: '1',
    title: 'Frogs',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est mi, elementum eu tempus ac, porta sit amet arcu. Suspendisse non fermentum mauris. Proin quis elit interdum, consequat libero ornare, mattis nisl. Aenean vel dui sed ante iaculis tincidunt. Vivamus quis tincidunt tortor. Curabitur eget aliquet purus. Vestibulum ac eleifend metus. Aliquam tristique leo a lectus tempor feugiat.',
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <BlogPosts blogPosts={blogPosts} />
    </div>
  );
}

export default App;

//Create a way to post
//Create a drop down menu with two users, have it change who is posting
