import PropTypes from "prop-types"

const ComponentLayout = ({children}) => {
    return (
        <div className="lg:max-w-5xl max-w-full mx-auto">
            {children}
        </div>
    );
};

ComponentLayout.propTypes = {
    children:PropTypes.any
}

export default ComponentLayout;