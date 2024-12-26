import React, {useContext} from "react";
import {useParams} from "react-router";
import {BookContext} from "../context/BookContext";


const BookDetails = () => {
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const bookDetail = books.find(book => book.id === bookId);

    if (!bookDetail) {
        return <h2>Libro no encontrado</h2>;
    }

    return (
        <main>
            <div className="row">
                <div className="col-md-5 col-lg-4 order-md-last">
                    ...
                </div>
                <div className="col-md-7 col-lg-8">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">{bookDetail.title}</h3>
                            <div
                                className="mb-1 text-body-secondary">{bookDetail.author} | {bookDetail.genre} | {bookDetail.price}</div>
                            <p className="card-text mb-auto">{bookDetail.synopsis}</p>
                            <button type="button" className="btn btn-primary" >Add to cart</button>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src={bookDetail.cover} alt={bookDetail.title}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default BookDetails;