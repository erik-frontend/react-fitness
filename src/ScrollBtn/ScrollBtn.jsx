import { FaArrowCircleUp } from "react-icons/fa";
import "./style.scss"

const ScrollBtn = ({arrowShow, setArrowShow}) => {

    const btnScrollShow = () => {
        window.pageYOffset > 600 ? setArrowShow(true) : setArrowShow(false)
    }

    window.addEventListener("scroll", btnScrollShow)
    
    const btnClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <button className={`arrowToTop ${arrowShow === true ? "active" : ""}`} >
            <FaArrowCircleUp onClick={btnClick}/>
        </button>
    )
}

export default ScrollBtn