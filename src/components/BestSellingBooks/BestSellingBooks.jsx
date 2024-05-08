import React from 'react'
import './BestSellingBooks.css'
import TitleTypeTwo from '../../UI/TitleTypeTwo/TitleTypeTwo'
import TreeShape from '../../assets/treeShape.png'
import { sellingBooksData } from '../../Data/Data'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

export default function BestSellingBooks() {
    return (
        <section className='BestSellingBook'>

            <div className="treeShape">
                <img src={TreeShape} alt="" />
            </div>


            {
                sellingBooksData.map(({ img, infoTitle, infoTitleTop, desc, price, shopbtnLink }) => {
                    return (
                        <div className="container bestselling-container">
                            <div className="selling-book-left">
                                <img src={img} alt="" />
                            </div>
                            <div className="selling-book-right">
                                <div className='selling-book-title'>
                                    <TitleTypeTwo Title={'Best Selling Books'} />
                                </div>
                                <div><small>{infoTitleTop}</small></div>
                                <h3>{infoTitle}</h3>
                                <p>{desc}</p>
                                <h5><span>{price}</span></h5>
                                <Link to={shopbtnLink} className='btn'>
                                    Shop it now
                                    <FaArrowRightLong />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }


        </section>
    )
}
