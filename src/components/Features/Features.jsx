import PropTypes from 'prop-types';
import { FaCheck } from "react-icons/fa";
const Features = ({feature}) => {
    return (
        <div className='text-start my-5 '>
          <div>
          
                <p  className='flex items-center gap-2'>
                    <FaCheck className='text-green-500'></FaCheck>
                    {feature}
                </p>
            
          </div>
        </div>
    );
};
Features.propTypes={
    feature:PropTypes.string
}

export default Features;