import PropTypes from 'prop-types';

const Heading = ({children}) => {
    return (
        <div className='text-4xl font-bold w-4/6 mx-auto text-white text-center'>
            {children}
        </div>
    );
}

Heading.propTypes = {
    children:PropTypes.any,
}

export default Heading;