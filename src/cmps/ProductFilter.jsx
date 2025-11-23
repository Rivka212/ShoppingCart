import { useState, useEffect } from 'react'

export function ProductFilter({ filterBy, onFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })



    useEffect(() => {
        onFilterBy(filterByToEdit)
    }, [filterByToEdit])


    function handleChange(ev) {
        const { name, value } = ev.target;
        setFilterByToEdit(prev => ({ ...prev, [name]: value }));
    }

    return (
        <section className="product-filter">
            <img className="search" src={`../../icons/search.png`} alt="search" />
            <input
                type="text"
                name="title"
                value={filterByToEdit.title || ""}
                placeholder="Search..."
                onChange={handleChange}
                required />

        </section>
    )
}