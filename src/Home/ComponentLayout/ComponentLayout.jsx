import PropTypes from "prop-types"

const ComponentLayout = ({children}) => {
    return (
        <div className="max-w-5xl mx-auto">
            {children}
        </div>
    );
};

ComponentLayout.propTypes = {
    children:PropTypes.any
}

export default ComponentLayout;