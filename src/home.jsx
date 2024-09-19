import {useState} from 'react';
import BlogList from './BlogList';
import settingGif from './Settings.gif';
import useFetch from './useFetch';

const Home = () => {
	const {data: blogs, loading, error} = useFetch('http://localhost:8000/blogs');
	const [author, setAuthor] = useState('');

	const handleChange = (e) => {
		setAuthor(e.target.value);
	};

	return (
		<div className='home'>
			{loading && <img src={settingGif} alt='loading...' />}
			{error && <span>{error}</span>}
			{blogs && (
				<BlogList
					blogs={blogs}
					title='All Blogs'
					deleteButton={true}
					handleChange={handleChange}
				/>
			)}
			{blogs && (
				<BlogList
					blogs={blogs.filter(
						(blog) => blog.author.toLowerCase() === author.toLowerCase()
					)}
					title={author + "'s  blogs"}
					deleteButton={false}
					handleChange={handleChange}
				/>
			)}
		</div>
	);
};
export default Home;
