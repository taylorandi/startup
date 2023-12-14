import React from "react";
import './service.css';

export function Service(props) {
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
    React.useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then((response) => response.json())
            .then((data) => {
                setQuote(data.content);
                setQuoteAuthor(data.author);
            })
            .catch();
    }, []);

        return (
            <main>
                <h2>Types of printing</h2>
                <p>We offer a wide variety of services and materials, we have standard filiment printing using petg, pla, tpu, and abs.
                    We also offer resin type printing with a wide variety of resins to suit your needs.
                    We can also perfom laser sintering printing to produce metal parts.
                    We can help you to identify what types of materials are best for your application, and what printing method will best
                    provide that.
                </p>
                <h2>Why choose 3D printing</h2>
                <p>3D printing is a fast and cheap method for producint parts with high consistancy.
                    Addative manufacuting is efficient and reproducable, it is viable for rapid prototyping,
                    part production, and many more uses.
                </p>
                <h2>Request a quote</h2>
                <p>At Ivy 3D we can print your parts based upon a .cad or .stl file if you have modeled the part already.
                    We can also model the part and print it for you at a higher cost, for this service please provide a
                    .jpeg of what you would like your part to look like, also provide us the specs you would need us to meet.
                    We will model your part and verify its correctness with you before printing.
                    Submit your files now and we will get back to you quickly with a quote.
                </p>
                <h5>Inspirational Quote</h5>
                <p className='quote'>{quote}</p>
                <p className='author'>{quoteAuthor}</p>
            </main>
        );
    }