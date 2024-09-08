import React from 'react'
import MiniCard from './MiniCard'
import htmlLogo from "../svg/html5.svg"
import cssLogo from "../svg/css3.svg"
import jsLogo from "../svg/js.png"
import bsLogo from "../svg/bootstrap-plain.svg"

const Container = () => {

    const cardArr = [
        {
            title: "HTML",
            description: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
            logo: htmlLogo,
        },
        {
            title: "CSS",
            description: "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
            logo: cssLogo,
        },
        {
            title: "JavaScript",
            description: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.",
            logo: jsLogo,
        },
        {
            title: "Bootstrap 5",
            description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
            logo: bsLogo,
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-5 md:mt-0 px-6'>
            {
                cardArr.map((item) => {
                    return (
                        <MiniCard title={item.title} description={item.description} logo={item.logo} />
                    )
                })
            }
        </div>
    )
}

export default Container