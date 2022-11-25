import {ChangeEvent, useState} from "react";

type NewBookProps = {
    newBook : (title:string, author:string, isbn:string) => void
}
export default function NewBook(props : NewBookProps) {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setIsbn] = useState("")

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
 const onAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAuthor(event.target.value)
    }
 const onIsbnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsbn(event.target.value)
    }

    return (
        <div>
            <label>Title
                <input onChange={onTitleChange} value={title} />
            </label>
            <label>Author
                <input onChange={onAuthorChange} value={author} />
            </label>
            <label>ISBN
                <input onChange={onIsbnChange} value={isbn} />
            </label>
            <button onClick={() => props.newBook(title,author,isbn)}>Add Book</button>
        </div>

    )

}