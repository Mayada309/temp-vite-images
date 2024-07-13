import { useGlobalContext } from './context';

const SearchForm = () => {

	const { setSearchTerm } = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		const searchValue = e.target.elements.search.value;
		if (!searchValue) return;
		setSearchTerm(searchValue);
	};

	return (
		<section>
			<h1 className='title' >unsplash images</h1>
			<form className='search-form' onSubmit={handleSubmit}>
				<input
					type="text"
					name="search"
					placeholder='cat'
					className='form-input'
				/>
				<button className='btn' type="submit">search</button>
			</form>
		</section>
	);
};

export default SearchForm;