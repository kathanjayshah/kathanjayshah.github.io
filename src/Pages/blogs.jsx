import Header from '../Components/header';
import './blogs.css'

function Blogs() {
    return (
        <div className="whole">
            <Header />
            <div className='blogs-body'>
                <h1>Blogs</h1>
                <h5>Computer Science Basics</h5>
                <h5>Dog Training Learnings (Chiko&apos;s Life)</h5>
                <h5>Personal Fitness Learnings (Kathan&apos;s Life)</h5>
            </div>
        </div>
    );
}

export default Blogs;
