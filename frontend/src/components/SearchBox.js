import React, { useState, useEffect } from 'react'
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'


function SearchBox() {
    const [keyword, setKeyword] = useState('')
    const [results, setResults] = useState([])
    const [searchResults, setSearchResults] = useState([])
    // let navigate = useNavigate()
    // const [searchParams, setSearchParams] = useSearchParams({});

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { } = productList
    const { error, loading, products } = productList
    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])
    // console.log(products)
    const submitHandler = (e) => {
        e.preventDefault()

    }

    const handleSearchChange = (e) => {
        if (!e.target.value) {
            return setSearchResults(products)
        }

        const resultsArray = products.filter(product => product.name.includes(e.target.value)) // || product.description.includes(e.target.value))

        setSearchResults(resultsArray)


    }

    // console.log(searchResults)
    return (
        <Dropdown className='p-3'>
            <Form onSubmit={submitHandler} inline className="d-flex">
                <DropdownButton id="dropdown-item-button" title="Search" type='submit'
                    variant='outline-success'
                    className='outline-success me-4' disabled={loading} onClick={() => setSearchResults([])}>
                    <Dropdown.ItemText>
                        <Form.Control
                            type='text'
                            name='q'

                            className='p-3'
                            onChange={handleSearchChange}
                        ></Form.Control>
                        Results</Dropdown.ItemText>
                    {searchResults.map((result) => {
                        return (

                            <Dropdown.Item as="button">
                                <Link to={`/product/${result._id}`}>
                                    {result.name}
                                </Link>

                            </Dropdown.Item>
                        )
                    })}

                </DropdownButton>

            </Form>

        </Dropdown>
    )
}

export default SearchBox
