import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useHistory } from "react-router-dom"
function SearchBox() {
  const [keyword, setKeyword] = useState("")
  let history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword) {
      history.push(`/?keyword=${keyword}`)
    } else {
      history.push(history.push(history.location.pathname))
    }
  }
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        placeholder='Search'
        type='search'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        className='mr-sm-2 ml-sm-5'></Form.Control>
      <Button type='submit' className='p-2 bg-secondary'>
        <i class='fas fa-search'></i>
      </Button>
    </Form>
  )
}

export default SearchBox
