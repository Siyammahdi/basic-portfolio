import PropTypes from "prop-types"

const SubHeading = ({children}) => {
    return (
        <div className="text-sm  lg:text-xl font-semibold text-cyan-400 text-center">
            {children}
        </div>
    );
};

SubHeading.propTypes = {
    children:PropTypes.any
}

export default SubHeading;