import axios from "axios"
import React,{ useState } from "react"

const Add = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [olsPrice, setoldPrice] = useState('')
    const [url, setUrl] = useState('')
    const [des, setDes] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const obj = {
            title: title,
            price: price,
            oldPrice: olsPrice,
            url: url,
            des: des
        }
        try {
            const res = await axios.post("http://localhost:3000/items", obj)
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="enter title" onChange={(e) => setTitle(e.target.value)} />
                <input type="number" placeholder="enter price" onChange={(e) => setPrice(e.target.value)} />
                <input type="number" placeholder="enter old price" onChange={(e) => setoldPrice(e.target.value)} />
                <input type="url" placeholder="enter image url" onChange={(e) => setUrl(e.target.value)} />
                <textarea name="" id="" cols="30" rows="10" onChange={(e) => setDes(e.target.value)}></textarea>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Add