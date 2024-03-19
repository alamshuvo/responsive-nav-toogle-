import PropTypes from 'prop-types';
const List = ({route}) => {
    const {path,name}=route
    return (
        <div>
            <li className="mr-4 font-bold hover:bg-indigo-400 p-1"><a href={path}>{name}</a></li>
        </div>
    );
};
List.propTypes={
    route:PropTypes.object,
}
export default List;