import searchGif from './Search.gif';
const BlogList = ({blogs, title, deleteButton, handleChange}) => {
	return (
		<div className='blog-container'>
			{!deleteButton && (
				<div className='search'>
					<input
						placeholder='search for an author'
						onChange={(e) => handleChange(e)}
						className={deleteButton ? 'hidden' : undefined}
					/>
					<img className='search-icon' src={searchGif} alt='search' />
				</div>
			)}
			<div className='home'>
				<h2 className={!deleteButton ? 'hidden' : undefined}>{title}</h2>
				{blogs.map((blog) => (
					<div className='blog-preview' key={blog.id}>
						<h2>{blog.title}</h2>
						<p>Written by: {blog.author}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogList;
