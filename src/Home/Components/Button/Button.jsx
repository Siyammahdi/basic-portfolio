import PropTypes from "prop-types"

const Button = ({children}) => {
    return (
        <div>
            <button className="btn btn-sm lg:btn-md text-white bg-gradient-to-r from-gred2 to-gred1 ">{children}</button>
        </div>
    );
};

Button.propTypes = {
    children:PropTypes.any
}

export default Button;