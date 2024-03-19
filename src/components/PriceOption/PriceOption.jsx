import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    const {name,price,features}=option
    return (
        <div className='bg-blue-300 rounded-lg shadow p-4 hover:bg-slate-700 hover:text-white duration-1000 flex flex-col  text-center'>
            <h2 className='mb-4'>
                <span className='md:text-7xl text-xl'>{price}</span>
                <span className='md:text-3xl text-xl'>/mo</span>
            </h2>
            <h4>
                <span className='md:text-4xl text-xl'>{name}</span>
            </h4>
          <div className='flex-grow'>
          {
                features.map((feature,idx)=><Features key={idx} feature={feature}></Features>)
            }
          </div>
            <button className='btn w-full bg-green-500 font-bold hover:bg-cyan-400 duration-1000'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes={
    option:PropTypes.object,
    name:PropTypes.string,
    price:PropTypes.string,
    features:PropTypes.array
}
export default PriceOption;