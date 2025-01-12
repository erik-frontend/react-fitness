import { arowBigLeft, arowBigRight, arowLeft, arowRight } from "../../assets/img"

export const CustomPrevArrow = ({ className, onClick, isNextActive, setIsNextActive }) => {
    const handleClick = () => {
        setIsNextActive(true)
        onClick()
    }
    return (
        <button className={`btn slick-btn ${className}`} onClick={handleClick}>
            <img src={isNextActive ? arowBigLeft : arowLeft} alt="prev" />
        </button>
    )
}

export const CustomNextArrow = ({ className, onClick, isNextActive, setIsNextActive }) => {
    const handleClick = () => {
        setIsNextActive(false)
        onClick()
    }
    return (
        <button className={`btn slick-btn ${className}`} onClick={handleClick}>
            <img src={isNextActive ? arowRight : arowBigRight} alt="next" />
        </button>
    )
}
